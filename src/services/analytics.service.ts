import { api } from "./api";

export interface DashboardAnalytics {
  totalInterviews: number;
  averageScore: number;
  highestScore: number;
  bestCategory: string;
  latestInterview: string;
}

export const AnalyticsService = {
  async getDashboardAnalytics(): Promise<DashboardAnalytics> {
    const response = await api.get("/analytics");

    return response.data;
  },
};