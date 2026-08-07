import { useInterviewStore } from "../store/interview.store";

export const useInterview = () => {
  return useInterviewStore();
};