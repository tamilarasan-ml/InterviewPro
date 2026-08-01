export interface DashboardStat {
  id: number;
  title: string;
  value: string;
}

export interface QuickAction {
  id: number;
  title: string;
}

export interface RecentActivity {
  id: number;
  activity: string;
}

export const dashboardStats: DashboardStat[] = [
  {
    id: 1,
    title: "Progress",
    value: "42%",
  },
  {
    id: 2,
    title: "Mock Interviews",
    value: "12",
  },
  {
    id: 3,
    title: "Accuracy",
    value: "87%",
  },
  {
    id: 4,
    title: "Current Streak",
    value: "8 Days",
  },
];

export const quickActions: QuickAction[] = [
  {
    id: 1,
    title: "Start Learning",
  },
  {
    id: 2,
    title: "Practice Questions",
  },
  {
    id: 3,
    title: "Mock Interview",
  },
  {
    id: 4,
    title: "STAR Builder",
  },
];

export const recentActivities: RecentActivity[] = [
  {
    id: 1,
    activity: "Completed Python Basics",
  },
  {
    id: 2,
    activity: "Finished Agile Interview Practice",
  },
  {
    id: 3,
    activity: "Reviewed AI Product Manager Questions",
  },
];