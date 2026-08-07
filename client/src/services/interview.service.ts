import { api } from "./api";
import { ENDPOINTS } from "./endpoints";

export const InterviewService = {
  getInterviews() {
    return api.get(ENDPOINTS.INTERVIEW.LIST);
  },

  startInterview() {
    return api.post(ENDPOINTS.INTERVIEW.START);
  },

  submitInterview(data: unknown) {
    return api.post(ENDPOINTS.INTERVIEW.SUBMIT, data);
  },

  getHistory() {
    return api.get(ENDPOINTS.INTERVIEW.HISTORY);
  },
};