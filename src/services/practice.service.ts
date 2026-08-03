import { practiceCategories } from "../data/practice.data";

export const PracticeService = {
  getCategories() {
    return Promise.resolve(practiceCategories);
  },
};