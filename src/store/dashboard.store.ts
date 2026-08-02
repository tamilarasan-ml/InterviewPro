import { create } from "zustand";

import { InterviewService } from "../services";

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

      const [dashboardResponse, activityResponse] = await Promise.all([
        InterviewService.getDashboard(),
        InterviewService.getRecentActivities(),
      ]);

      set({
        stats: dashboardResponse.data,
        activities: activityResponse.data,
        loading: false,
      });
    } catch {
      set({
        loading: false,
        error: "Unable to load dashboard data.",
      });
    }
  },
}));