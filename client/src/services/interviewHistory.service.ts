import { api } from "./api";

export const InterviewHistoryService = {
  getAllInterviews() {
    return api.get("/interview");
  },

  getInterviewById(id: number) {
    return api.get(`/interview/${id}`);
  },
};