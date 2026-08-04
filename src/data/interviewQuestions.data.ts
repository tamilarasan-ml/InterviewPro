export interface InterviewQuestion {
  id: number;
  categoryId: number;
  question: string;
}

export const interviewQuestions: InterviewQuestion[] = [
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
];