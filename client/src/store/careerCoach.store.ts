import { create } from "zustand";

import {
  CareerCoachService,
  type CareerCoachResponse,
} from "../services/careerCoach.service";

interface CareerCoachStore {

  advice: CareerCoachResponse | null;

  loading: boolean;

  error: string | null;

  generateCareerAdvice: (
    resumeAnalysis: unknown
  ) => Promise<void>;

  clear: () => void;
}

export const useCareerCoachStore =
  create<CareerCoachStore>((set) => ({

    advice: null,

    loading: false,

    error: null,

    generateCareerAdvice: async (
      resumeAnalysis
    ) => {

      try {

        set({
          loading: true,
          error: null,
        });

        const advice =
          await CareerCoachService.generateCareerAdvice(
            resumeAnalysis
          );

        set({
          advice,
          loading: false,
        });

      } catch {

        set({
          loading: false,
          error:
            "Unable to generate career advice.",
        });

      }

    },

    clear: () =>
      set({
        advice: null,
        error: null,
      }),

  }));