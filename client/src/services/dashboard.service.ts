import { api } from "./api";
import { ENDPOINTS } from "./endpoints";

export interface DashboardSummary {
  progress: number;
  mockInterviews: number;
  accuracy: number;
  currentStreak: number;
}

export interface RecentActivity {
  id: number;
  activity: string;
}

export const DashboardService = {
  async getDashboard(): Promise<DashboardSummary> {
    const response = await api.get<DashboardSummary>(
      ENDPOINTS.DASHBOARD.SUMMARY
    );

    return response.data;
  },

  async getRecentActivities(): Promise<RecentActivity[]> {
    const response = await api.get<RecentActivity[]>(
      ENDPOINTS.DASHBOARD.RECENT_ACTIVITIES
    );

    return response.data;
  },
};