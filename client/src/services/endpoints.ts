export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    PROFILE: "/auth/profile",
  },

  USER: {
    PROFILE: "/users/profile",
    UPDATE: "/users/update",
  },

  DASHBOARD: {
    SUMMARY: "/dashboard",
    RECENT_ACTIVITIES: "/dashboard/recentActivities",
  },

  ANALYTICS: {
    SUMMARY: "/analytics",
  },

  INTERVIEW: {
    LIST: "/interviews",
    START: "/interviews/start",
    SUBMIT: "/interviews/submit",
    HISTORY: "/interviews/history",
  },

  RESUME: {
    ANALYZE: "/resume/analyze",
    HISTORY: "/resume/history",
  },

  CAREER: {
    COACH: "/career-coach",
  },

  LEARNING: {
    LIST: "/learning",
    PROGRESS: "/learning/progress",
  },

  PRACTICE: {
    CATEGORIES: "/practice/categories",
    QUESTIONS: "/practice/questions",
    RESULT: "/practice/result",
  },

  PROFILE: {
    SUMMARY: "/profile",
  },
} as const;