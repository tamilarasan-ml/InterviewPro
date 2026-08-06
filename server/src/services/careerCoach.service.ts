import { client } from "./azureAI.service";
import { env } from "../config/env";

import { InterviewRepository } from "../repositories/interview.repository";

import { careerCoachPrompt } from "../prompts/careerCoach.prompt";

import { careerCoachSchema } from "../validators/careerCoach.validator";

import type {
  ResumeAnalysis,
} from "../types/resume.types";

import type {
  CareerCoachResponse,
} from "../types/careerCoach.types";

export const generateCareerAdvice =
  async (
    resumeAnalysis: ResumeAnalysis
  ): Promise<CareerCoachResponse> => {

    const interviews =
      InterviewRepository.findAll();

    const response =
      await client.responses.create({
        model: env.deployment,

        input: careerCoachPrompt(
          resumeAnalysis,
          interviews
        ),
      });

    const parsed = JSON.parse(
      response.output_text
    );

    return careerCoachSchema.parse(
      parsed
    );
  };