import { z } from "zod";

export const interviewFeedbackSchema = z.object({
  overallScore: z.number(),
  communication: z.number(),
  technicalKnowledge: z.number(),
  domainKnowledge: z.number(),
  confidence: z.number(),

  strengths: z.array(z.string()),

  areasForImprovement: z.array(z.string()),

  suggestedAnswer: z.string(),

  recommendation: z.string(),
});