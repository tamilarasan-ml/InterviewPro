import axiosInstance from "./axios";

export const api = axiosInstance;

export { ENDPOINTS } from "./endpoints";

export { AuthService } from "./auth.service";
export { UserService } from "./user.service";
export { ProfileService } from "./profile.service";
export { LearningService } from "./learning.service";
export { PracticeService } from "./practice.service";

export { InterviewService } from "./interview.service";
export { AIInterviewService } from "./aiInterview.service";
export { InterviewHistoryService } from "./interviewHistory.service";