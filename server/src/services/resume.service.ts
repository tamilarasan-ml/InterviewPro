import pdfParse from "pdf-parse";

import { client } from "./azureAI.service";

import { env } from "../config/env";

import { resumeAnalysisPrompt } from "../prompts/resume.prompt";

import { resumeAnalysisSchema } from "../validators/resume.validator";

import type {
  ResumeAnalysis,
} from "../types/resume.types";

export const analyzeResume =
  async (
    pdfBuffer: Buffer
  ): Promise<ResumeAnalysis> => {
    const pdf =
      await pdfParse(pdfBuffer);

    const response =
      await client.responses.create({
        model: env.deployment,
        input: resumeAnalysisPrompt(
          pdf.text
        ),
      });

    const parsed = JSON.parse(
      response.output_text
    );

    return resumeAnalysisSchema.parse(
      parsed
    );
  };