import axiosInstance from "./axios";

export const api = axiosInstance;

export { ENDPOINTS } from "./endpoints";

// Core
export { AuthService } from "./auth.service";
export { UserService } from "./user.service";
export { ProfileService } from "./profile.service";

// Dashboard
export { DashboardService } from "./dashboard.service";
export { AnalyticsService } from "./analytics.service";

// Interview
export { InterviewService } from "./interview.service";
export { AIInterviewService } from "./aiInterview.service";
export { InterviewHistoryService } from "./interviewHistory.service";

// Resume & Career
export { ResumeService } from "./resume.service";
export { CareerCoachService } from "./careerCoach.service";

// Learning
export { LearningService } from "./learning.service";
export { PracticeService } from "./practice.service";