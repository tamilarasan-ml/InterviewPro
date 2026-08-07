import { useEffect } from "react";

import { useLearningStore } from "../store";

export const useLearning = () => {
  const {
    courses,
    loading,
    error,
    fetchCourses,
  } = useLearningStore();

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return {
    courses,
    loading,
    error,
  };
};