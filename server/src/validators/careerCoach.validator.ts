import { z } from "zod";

export const careerCoachSchema = z.object({
  careerReadinessScore: z.number(),

  interviewReadiness: z.string(),

  recommendedRole: z.string(),

  strengths: z.array(z.string()),

  skillGaps: z.array(z.string()),

  certifications: z.array(z.string()),

  learningPlan: z.array(z.string()),

  summary: z.string(),
});