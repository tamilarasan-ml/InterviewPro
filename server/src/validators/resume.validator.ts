import { z } from "zod";

export const resumeAnalysisSchema =
  z.object({
    atsScore: z.number(),

    resumeScore: z.number(),

    strengths: z.array(
      z.string()
    ),

    missingSkills: z.array(
      z.string()
    ),

    suggestions: z.array(
      z.string()
    ),

    summary: z.string(),
  });