import { InterviewRepository } from "../repositories/interview.repository";

import type {
  InterviewReport,
} from "../types/interview.types";

export const saveInterview = (
  report: InterviewReport
): number => {
  return InterviewRepository.saveInterview(report);
};