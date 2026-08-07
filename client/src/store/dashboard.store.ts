import { create } from "zustand";

import { DashboardService } from "../services";

export interface DashboardStat {
  id: number;
  title: string;
  value: string;
}

export interface RecentActivity {
  id: number;
  activity: string;
}

interface DashboardStore {
  stats: DashboardStat[];
  activities: RecentActivity[];

  loading: boolean;
  error: string | null;

  fetchDashboard: () => Promise<void>;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  stats: [],
  activities: [],

  loading: false,
  error: null,

  fetchDashboard: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const [dashboard, activities] = await Promise.all([
        DashboardService.getDashboard(),
        DashboardService.getRecentActivities(),
      ]);

      set({
        stats: [
          {
            id: 1,
            title: "Progress",
            value: `${dashboard.progress}%`,
          },
          {
            id: 2,
            title: "Mock Interviews",
            value: `${dashboard.mockInterviews}`,
          },
          {
            id: 3,
            title: "Accuracy",
            value: `${dashboard.accuracy}%`,
          },
          {
            id: 4,
            title: "Current Streak",
            value: `${dashboard.currentStreak} Days`,
          },
        ],

        activities,

        loading: false,
      });
    } catch (error) {
      console.error(error);

      set({
        loading: false,
        error: "Unable to load dashboard data.",
      });
    }
  },
}));