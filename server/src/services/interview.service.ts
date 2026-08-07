import { client } from "./azureAI.service";
import { env } from "../config/env";

import { interviewEvaluationPrompt } from "../prompts/interview.prompt";
import { interviewFeedbackSchema } from "../validators/interview.validator";

import type { InterviewFeedback } from "../types/interview.types";

export const generateFeedback = async (
  answer: string
): Promise<InterviewFeedback> => {
  const response = await client.responses.create({
    model: env.deployment,
    input: interviewEvaluationPrompt(answer),
  });

  const parsed = JSON.parse(response.output_text);

  return interviewFeedbackSchema.parse(parsed);
};