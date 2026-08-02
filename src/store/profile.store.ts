import { create } from "zustand";

import type { UserProfile } from "../types";
import { ProfileService } from "../services";

interface ProfileStore {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;

  fetchProfile: () => Promise<void>;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,
  loading: false,
  error: null,

  fetchProfile: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const response = await ProfileService.getProfile();

      set({
        profile: response.data,
        loading: false,
      });
    } catch {
      set({
        loading: false,
        error: "Unable to load profile.",
      });
    }
  },
}));