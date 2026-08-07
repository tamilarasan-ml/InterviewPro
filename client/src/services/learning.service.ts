import axiosInstance from "./axios";
import type { LearningCourse } from "../types";

export const LearningService = {
  getCourses() {
    return axiosInstance.get<LearningCourse[]>("/learning");
  },
};