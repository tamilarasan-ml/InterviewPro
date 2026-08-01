import { api } from "./api";

export const InterviewService = {
  getDashboard() {
    return api.get("/dashboard");
  },

  getRecentActivities() {
    return api.get("/recentActivities");
  },
};