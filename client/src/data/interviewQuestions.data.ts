export interface InterviewQuestion {
  id: number;
  categoryId: number;
  question: string;
}

export const interviewQuestions: InterviewQuestion[] = [
  // ===========================
  // AI
  // ===========================
  {
    id: 1,
    categoryId: 1,
    question:
      "Tell me about yourself and your experience in AI.",
  },
  {
    id: 2,
    categoryId: 1,
    question:
      "What is the difference between Machine Learning and Generative AI?",
  },
  {
    id: 3,
    categoryId: 1,
    question:
      "Explain a challenging AI project you worked on.",
  },

  // ===========================
  // Agile
  // ===========================
  {
    id: 4,
    categoryId: 2,
    question:
      "What are the responsibilities of a Scrum Master?",
  },
  {
    id: 5,
    categoryId: 2,
    question:
      "Explain the Scrum framework with all ceremonies.",
  },
  {
    id: 6,
    categoryId: 2,
    question:
      "How do you handle conflicts within a Scrum Team?",
  },

  // ===========================
  // React
  // ===========================
  {
    id: 7,
    categoryId: 3,
    question:
      "What is the Virtual DOM in React?",
  },
  {
    id: 8,
    categoryId: 3,
    question:
      "Explain the React component lifecycle.",
  },
  {
    id: 9,
    categoryId: 3,
    question:
      "What is the difference between props and state?",
  },

  // ===========================
  // TypeScript
  // ===========================
  {
    id: 10,
    categoryId: 4,
    question:
      "Why do we use TypeScript instead of JavaScript?",
  },
  {
    id: 11,
    categoryId: 4,
    question:
      "Explain interfaces and types in TypeScript.",
  },
  {
    id: 12,
    categoryId: 4,
    question:
      "What are generics in TypeScript?",
  },

  // ===========================
  // Python
  // ===========================
  {
    id: 13,
    categoryId: 5,
    question:
      "Explain Python's key features.",
  },
  {
    id: 14,
    categoryId: 5,
    question:
      "What is the difference between a list and a tuple?",
  },
  {
    id: 15,
    categoryId: 5,
    question:
      "Explain decorators in Python.",
  },
];