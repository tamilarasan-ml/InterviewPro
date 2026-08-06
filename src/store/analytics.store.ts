import { create } from "zustand";

import {
  AnalyticsService,
  type DashboardAnalytics,
} from "../services/analytics.service";

interface AnalyticsStore {
  analytics: DashboardAnalytics | null;

  loading: boolean;

  error: string | null;

  fetchAnalytics: () => Promise<void>;
}

export const useAnalyticsStore =
  create<AnalyticsStore>((set) => ({
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
      } catch {
        set({
          loading: false,
          error: "Unable to load analytics.",
        });
      }
    },
  }));