import { create } from "zustand";

import {
  ResumeService,
  type ResumeAnalysis,
} from "../services/resume.service";

interface ResumeStore {
  analysis: ResumeAnalysis | null;

  loading: boolean;

  error: string | null;

  analyzeResume: (
    file: File
  ) => Promise<void>;

  clearAnalysis: () => void;
}

export const useResumeStore =
  create<ResumeStore>((set) => ({
    analysis: null,

    loading: false,

    error: null,

    analyzeResume: async (
      file: File
    ) => {
      try {
        set({
          loading: true,
          error: null,
        });

        const result =
          await ResumeService.analyzeResume(
            file
          );

        set({
          analysis: result,
          loading: false,
        });
      } catch {
        set({
          loading: false,
          error:
            "Resume analysis failed.",
        });
      }
    },

    clearAnalysis: () =>
      set({
        analysis: null,
        error: null,
      }),
  }));