import { create } from "zustand";

import { practiceCategories } from "../data/practice.data";

import type {
  DifficultyLevel,
  PracticeCategory,
} from "../types/practice.types";

interface PracticeStore {
  categories: PracticeCategory[];

  selectedCategory: number | null;

  selectedDifficulty: DifficultyLevel;

  selectCategory: (id: number) => void;

  selectDifficulty: (
    difficulty: DifficultyLevel
  ) => void;

  canStartPractice: () => boolean;
}

export const usePracticeStore =
  create<PracticeStore>((set, get) => ({
    categories: practiceCategories,

    selectedCategory: null,

    selectedDifficulty: "Beginner",

    selectCategory: (id) =>
      set({
        selectedCategory: id,
      }),

    selectDifficulty: (difficulty) =>
      set({
        selectedDifficulty: difficulty,
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