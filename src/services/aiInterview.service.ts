import { api } from "./api";

import type {
  InterviewFeedback,
  InterviewReport,
} from "../types/interview.types";

export const AIInterviewService = {
  async generateFeedback(
    answer: string
  ): Promise<InterviewFeedback> {
    const response = await api.post(
      "/interview/feedback",
      {
        answer,
      }
    );

    return response.data.feedback;
  },

  async saveInterviewReport(
    report: InterviewReport
  ): Promise<void> {
    await api.post(
      "/interview",
      report
    );
  },
};