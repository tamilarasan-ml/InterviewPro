import { InterviewRepository } from "../repositories/interview.repository";

import type {
  InterviewReport,
} from "../types/interview.types";

export const saveInterview = (
  report: InterviewReport
): number => {
  return InterviewRepository.saveInterview(report);
};

export const getAllInterviews = () => {
  return InterviewRepository.findAll();
};

export const getInterviewById = (
  id: number
) => {
  return InterviewRepository.findById(id);
};