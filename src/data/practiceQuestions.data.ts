import type { DifficultyLevel } from "../types/practice.types";

export interface PracticeQuestion {
  id: number;
  categoryId: number;
  question: string;
  difficulty: DifficultyLevel;
}

export const practiceQuestions: PracticeQuestion[] = [
  // AI
  {
    id: 1,
    categoryId: 1,
    question: "What is Prompt Engineering?",
    difficulty: "Beginner",
  },
  {
    id: 2,
    categoryId: 1,
    question: "Explain the difference between RAG and Fine-Tuning.",
    difficulty: "Intermediate",
  },

  // Agile
  {
    id: 3,
    categoryId: 2,
    question: "What are the Scrum events?",
    difficulty: "Beginner",
  },
  {
    id: 4,
    categoryId: 2,
    question: "How would you handle a blocked Sprint Goal?",
    difficulty: "Advanced",
  },

  // React
  {
    id: 5,
    categoryId: 3,
    question: "What is Virtual DOM?",
    difficulty: "Beginner",
  },
  {
    id: 6,
    categoryId: 3,
    question: "Explain React reconciliation.",
    difficulty: "Intermediate",
  },

  // TypeScript
  {
    id: 7,
    categoryId: 4,
    question: "What are Generics in TypeScript?",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    categoryId: 4,
    question: "Explain Utility Types with examples.",
    difficulty: "Advanced",
  },

  // Python
  {
    id: 9,
    categoryId: 5,
    question: "What are Python decorators?",
    difficulty: "Intermediate",
  },
  {
    id: 10,
    categoryId: 5,
    question: "Explain list comprehension with an example.",
    difficulty: "Beginner",
  },
];