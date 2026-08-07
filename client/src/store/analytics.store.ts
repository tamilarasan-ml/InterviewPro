import { create } from "zustand";

import {
  AnalyticsService,
  type AnalyticsResponse,
} from "../services/analytics.service";

interface AnalyticsStore {
  analytics: AnalyticsResponse | null;

  loading: boolean;

  error: string | null;

  fetchAnalytics: () => Promise<void>;

  refresh: () => Promise<void>;
}

export const useAnalyticsStore =
  create<AnalyticsStore>((set, get) => ({
    analytics: null,

    loading: false,

    error: null,

    fetchAnalytics: async () => {
      try {
        set({
          loading: true,
          error: null,
        });

        const analytics =
          await AnalyticsService.getDashboardAnalytics();

        set({
          analytics,
          loading: false,
        });
      } catch (error) {
        console.error(error);

        set({
          analytics: null,
          loading: false,
          error: "Unable to load analytics.",
        });
      }
    },

    refresh: async () => {
      await get().fetchAnalytics();
    },
  }));