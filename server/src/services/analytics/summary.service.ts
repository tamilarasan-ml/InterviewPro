import type { SummaryCard } from "../../types/analytics.types";
import type { InterviewRecord } from "../../repositories/interview.repository";

export const buildSummary = (
  interviews: InterviewRecord[]
): SummaryCard => {
  const totalInterviews = interviews.length;

  const averageScore =
    totalInterviews === 0
      ? 0
      : Math.round(
          interviews.reduce(
            (sum, interview) => sum + interview.overallScore,
            0
          ) / totalInterviews
        );

  const highestScore =
    totalInterviews === 0
      ? 0
      : Math.max(...interviews.map((i) => i.overallScore));

  const bestCategory =
    totalInterviews === 0
      ? "-"
      : interviews.reduce((best, current) =>
          current.overallScore > best.overallScore
            ? current
            : best
        ).category;

  return {
    totalInterviews,
    averageScore,
    highestScore,
    bestCategory,
  };
};