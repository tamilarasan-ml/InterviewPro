import { api } from "./api";
import { ENDPOINTS } from "./endpoints";

export interface SummaryCard {
  totalInterviews: number;
  averageScore: number;
  highestScore: number;
  bestCategory: string;
}

export interface TrendData {
  interview: string;
  score: number;
}

export interface CategoryData {
  name: string;
  value: number;
}

export interface SkillData {
  skill: string;
  score: number;
}

export interface RecentActivity {
  id: number;
  category: string;
  score: number;
  createdAt: string;
}

export interface AnalyticsResponse {
  summary: SummaryCard;

  trend: TrendData[];

  categories: CategoryData[];

  skills: SkillData[];

  recentActivities: RecentActivity[];
}

export const AnalyticsService = {
  async getDashboardAnalytics(): Promise<AnalyticsResponse> {
    const response =
      await api.get<AnalyticsResponse>(
        ENDPOINTS.ANALYTICS.SUMMARY
      );

    return response.data;
  },
};