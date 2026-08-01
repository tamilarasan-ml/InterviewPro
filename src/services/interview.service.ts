import { api, ENDPOINTS } from ".";

export const InterviewService = {
  getInterviews() {
    return api.get(
      ENDPOINTS.INTERVIEW.LIST
    );
  },

  startInterview(id: string) {
    return api.post(
      ENDPOINTS.INTERVIEW.START,
      {
        interviewId: id,
      }
    );
  },

  submitInterview(data: unknown) {
    return api.post(
      ENDPOINTS.INTERVIEW.SUBMIT,
      data
    );
  },
};