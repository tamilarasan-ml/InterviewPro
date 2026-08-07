import type { RecentActivity } from "../../types/analytics.types";
import type { InterviewRecord } from "../../repositories/interview.repository";

export const buildRecentActivities = (
  interviews: InterviewRecord[]
): RecentActivity[] => {
  return interviews.slice(0, 5).map((interview) => ({
    id: interview.id,
    category: interview.category,
    score: interview.overallScore,
    createdAt: interview.createdAt,
  }));
};