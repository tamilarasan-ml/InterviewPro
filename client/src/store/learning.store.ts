import { create } from "zustand";

import type { LearningCourse } from "../types";
import { LearningService } from "../services";

interface LearningStore {
  courses: LearningCourse[];
  loading: boolean;
  error: string | null;

  fetchCourses: () => Promise<void>;
}

export const useLearningStore = create<LearningStore>((set) => ({
  courses: [],
  loading: false,
  error: null,

  fetchCourses: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const response = await LearningService.getCourses();

      set({
        courses: response.data,
        loading: false,
      });
    } catch {
      set({
        loading: false,
        error: "Unable to load learning courses.",
      });
    }
  },
}));