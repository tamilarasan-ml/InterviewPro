import { practiceCategories } from "../data/practice.data";
import { practiceQuestions } from "../data/practiceQuestions.data";

import type { DifficultyLevel } from "../types/practice.types";

export const PracticeService = {
  getCategories() {
    return Promise.resolve(practiceCategories);
  },

  getQuestions(
    categoryId: number,
    difficulty: DifficultyLevel
  ) {
    const questions = practiceQuestions.filter(
      (question) =>
        question.categoryId === categoryId &&
        question.difficulty === difficulty
    );

    return Promise.resolve(questions);
  },
};