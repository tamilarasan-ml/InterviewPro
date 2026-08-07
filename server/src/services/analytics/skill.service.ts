import type { SkillPoint } from "../../types/analytics.types";
import type { InterviewRecord } from "../../repositories/interview.repository";

export const buildSkills = (
  interviews: InterviewRecord[]
): SkillPoint[] => {
  if (interviews.length === 0) {
    return [];
  }

  const count = interviews.length;

  return [
    {
      skill: "Communication",
      score: Math.round(
        interviews.reduce(
          (s, i) => s + i.communication,
          0
        ) / count
      ),
    },
    {
      skill: "Technical",
      score: Math.round(
        interviews.reduce(
          (s, i) => s + i.technicalKnowledge,
          0
        ) / count
      ),
    },
    {
      skill: "Domain",
      score: Math.round(
        interviews.reduce(
          (s, i) => s + i.domainKnowledge,
          0
        ) / count
      ),
    },
    {
      skill: "Confidence",
      score: Math.round(
        interviews.reduce(
          (s, i) => s + i.confidence,
          0
        ) / count
      ),
    },
  ];
};