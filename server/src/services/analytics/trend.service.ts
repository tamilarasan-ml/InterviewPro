import type { TrendPoint } from "../../types/analytics.types";
import type { InterviewRecord } from "../../repositories/interview.repository";

export const buildTrend = (
  interviews: InterviewRecord[]
): TrendPoint[] => {
  return interviews.map((interview) => ({
    interview: new Date(interview.createdAt).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
      }
    ),
    score: interview.overallScore,
  }));
};