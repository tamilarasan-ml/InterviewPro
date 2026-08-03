import type { DifficultyLevel } from "../types/practice.types";

export interface PracticeQuestion {
  id: number;
  categoryId: number;
  question: string;
  difficulty: DifficultyLevel;
}

export const practiceQuestions: PracticeQuestion[] = [
  // ============================
  // AI
  // ============================

  {
    id: 1,
    categoryId: 1,
    question: "What is Prompt Engineering?",
    difficulty: "Beginner",
  },
  {
    id: 2,
    categoryId: 1,
    question: "What is an LLM?",
    difficulty: "Beginner",
  },
  {
    id: 3,
    categoryId: 1,
    question: "What is Generative AI?",
    difficulty: "Beginner",
  },
  {
    id: 4,
    categoryId: 1,
    question: "Explain the difference between RAG and Fine-Tuning.",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    categoryId: 1,
    question: "What is Vector Embedding?",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    categoryId: 1,
    question: "Design an enterprise AI chatbot architecture.",
    difficulty: "Advanced",
  },

  // ============================
  // Agile
  // ============================

  {
    id: 7,
    categoryId: 2,
    question: "What are Scrum Events?",
    difficulty: "Beginner",
  },
  {
    id: 8,
    categoryId: 2,
    question: "What is a Sprint Goal?",
    difficulty: "Beginner",
  },
  {
    id: 9,
    categoryId: 2,
    question: "Explain Definition of Done.",
    difficulty: "Beginner",
  },
  {
    id: 10,
    categoryId: 2,
    question: "How do you handle changing priorities during a sprint?",
    difficulty: "Intermediate",
  },
  {
    id: 11,
    categoryId: 2,
    question: "How do you measure team velocity?",
    difficulty: "Intermediate",
  },
  {
    id: 12,
    categoryId: 2,
    question: "How would you scale Scrum across multiple teams?",
    difficulty: "Advanced",
  },

  // ============================
  // React
  // ============================

  {
    id: 13,
    categoryId: 3,
    question: "What is Virtual DOM?",
    difficulty: "Beginner",
  },
  {
    id: 14,
    categoryId: 3,
    question: "What is JSX?",
    difficulty: "Beginner",
  },
  {
    id: 15,
    categoryId: 3,
    question: "Explain React Components.",
    difficulty: "Beginner",
  },
  {
    id: 16,
    categoryId: 3,
    question: "Explain React Reconciliation.",
    difficulty: "Intermediate",
  },
  {
    id: 17,
    categoryId: 3,
    question: "What are Custom Hooks?",
    difficulty: "Intermediate",
  },
  {
    id: 18,
    categoryId: 3,
    question: "Explain Concurrent Rendering.",
    difficulty: "Advanced",
  },

  // ============================
  // TypeScript
  // ============================

  {
    id: 19,
    categoryId: 4,
    question: "What is TypeScript?",
    difficulty: "Beginner",
  },
  {
    id: 20,
    categoryId: 4,
    question: "Explain Interfaces.",
    difficulty: "Beginner",
  },
  {
    id: 21,
    categoryId: 4,
    question: "What are Enums?",
    difficulty: "Beginner",
  },
  {
    id: 22,
    categoryId: 4,
    question: "Explain Generics.",
    difficulty: "Intermediate",
  },
  {
    id: 23,
    categoryId: 4,
    question: "Explain Utility Types.",
    difficulty: "Intermediate",
  },
  {
    id: 24,
    categoryId: 4,
    question: "How does Type Inference work?",
    difficulty: "Advanced",
  },

  // ============================
  // Python
  // ============================

  {
    id: 25,
    categoryId: 5,
    question: "What is Python?",
    difficulty: "Beginner",
  },
  {
    id: 26,
    categoryId: 5,
    question: "Explain List Comprehension.",
    difficulty: "Beginner",
  },
  {
    id: 27,
    categoryId: 5,
    question: "What are Functions in Python?",
    difficulty: "Beginner",
  },
  {
    id: 28,
    categoryId: 5,
    question: "Explain Python Decorators.",
    difficulty: "Intermediate",
  },
  {
    id: 29,
    categoryId: 5,
    question: "What are Generators?",
    difficulty: "Intermediate",
  },
  {
    id: 30,
    categoryId: 5,
    question: "Explain the Global Interpreter Lock (GIL).",
    difficulty: "Advanced",
  },
];