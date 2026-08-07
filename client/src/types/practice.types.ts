export interface PracticeCategory {
  id: number;
  name: string;
  icon: string;
  totalQuestions: number;
}

export type DifficultyLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface PracticeSummary {
  totalQuestions: number;
  estimatedTime: string;
}

export interface PracticeState {
  selectedCategory: number | null;
  selectedDifficulty: DifficultyLevel;
}