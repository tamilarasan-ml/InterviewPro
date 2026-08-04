import { create } from "zustand";

import { interviewCategories } from "../data/interview.data";
import type { InterviewQuestion } from "../data/interviewQuestions.data";

import type {
  DifficultyLevel,
  PracticeCategory,
} from "../types/practice.types";

interface InterviewStore {
  categories: PracticeCategory[];

  selectedCategory: number | null;

  selectedDifficulty: DifficultyLevel;

  questions: InterviewQuestion[];

  currentQuestionIndex: number;

  selectCategory: (id: number) => void;

  selectDifficulty: (
    difficulty: DifficultyLevel
  ) => void;

  setQuestions: (
    questions: InterviewQuestion[]
  ) => void;

  nextQuestion: () => void;

  resetInterview: () => void;

  canStartInterview: () => boolean;
}

export const useInterviewStore =
  create<InterviewStore>((set, get) => ({
    categories: interviewCategories,

    selectedCategory: null,

    selectedDifficulty: "Beginner",

    questions: [],

    currentQuestionIndex: 0,

    selectCategory: (id) =>
      set({
        selectedCategory: id,
      }),

    selectDifficulty: (difficulty) =>
      set({
        selectedDifficulty: difficulty,
      }),

    setQuestions: (questions) =>
      set({
        questions,
        currentQuestionIndex: 0,
      }),

    nextQuestion: () =>
      set((state) => ({
        currentQuestionIndex:
          state.currentQuestionIndex + 1,
      })),

    resetInterview: () =>
      set({
        selectedCategory: null,
        selectedDifficulty: "Beginner",
        questions: [],
        currentQuestionIndex: 0,
      }),

    canStartInterview: () => {
      const {
        selectedCategory,
        selectedDifficulty,
      } = get();

      return (
        selectedCategory !== null &&
        selectedDifficulty !== undefined
      );
    },
  }));