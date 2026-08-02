export interface UserProfile {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
  experience: string;
  location: string;
  careerGoal: string;
  skills: string[];
  certifications: string[];
  learningProgress: number;
  completedInterviews: number;
  currentStreak: number;
}