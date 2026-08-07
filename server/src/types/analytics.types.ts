export interface SummaryCard {
  totalInterviews: number;
  averageScore: number;
  highestScore: number;
  bestCategory: string;
}

export interface TrendPoint {
  interview: string;
  score: number;
}

export interface CategoryPoint {
  name: string;
  value: number;
}

export interface SkillPoint {
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

  trend: TrendPoint[];

  categories: CategoryPoint[];

  skills: SkillPoint[];

  recentActivities: RecentActivity[];
}