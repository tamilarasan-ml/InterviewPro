import { useEffect } from "react";

import { useProfileStore } from "../store";

export const useProfile = () => {
  const {
    profile,
    loading,
    error,
    fetchProfile,
  } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return {
    profile,
    loading,
    error,
  };
};