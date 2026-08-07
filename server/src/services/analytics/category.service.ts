import type { CategoryPoint } from "../../types/analytics.types";
import type { InterviewRecord } from "../../repositories/interview.repository";

export const buildCategories = (
  interviews: InterviewRecord[]
): CategoryPoint[] => {
  const map = new Map<string, number>();

  interviews.forEach((interview) => {
    map.set(
      interview.category,
      (map.get(interview.category) ?? 0) + 1
    );
  });

  return Array.from(map.entries()).map(
    ([name, value]) => ({
      name,
      value,
    })
  );
};