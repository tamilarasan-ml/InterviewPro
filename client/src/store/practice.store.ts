import { create } from "zustand";

import { practiceCategories } from "../data/practice.data";
import type { PracticeQuestion } from "../data/practiceQuestions.data";

import type {
  DifficultyLevel,
  PracticeCategory,
} from "../types/practice.types";

interface PracticeStore {
  categories: PracticeCategory[];

  selectedCategory: number | null;

  selectedDifficulty: DifficultyLevel;

  questions: PracticeQuestion[];

  currentQuestionIndex: number;

  selectCategory: (id: number) => void;

  selectDifficulty: (
    difficulty: DifficultyLevel
  ) => void;

  setQuestions: (
    questions: PracticeQuestion[]
  ) => void;

  nextQuestion: () => void;

  resetPractice: () => void;

  canStartPractice: () => boolean;
}

export const usePracticeStore =
  create<PracticeStore>((set, get) => ({
    categories: practiceCategories,

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

    resetPractice: () =>
      set({
        selectedCategory: null,
        selectedDifficulty: "Beginner",
        questions: [],
        currentQuestionIndex: 0,
      }),

    canStartPractice: () => {
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