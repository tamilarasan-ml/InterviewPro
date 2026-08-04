import { create } from "zustand";

import { interviewCategories } from "../data/interview.data";
import type { InterviewQuestion } from "../data/interviewQuestions.data";

import { INTERVIEW_DURATION } from "../constants/interview.constants";

import type {
  DifficultyLevel,
  PracticeCategory,
} from "../types/practice.types";

import type { InterviewStatus } from "../types/interview.types";

interface InterviewStore {
  categories: PracticeCategory[];

  selectedCategory: number | null;

  selectedDifficulty: DifficultyLevel;

  questions: InterviewQuestion[];

  currentQuestionIndex: number;

  status: InterviewStatus;

  timeRemaining: number;

  isRunning: boolean;

  selectCategory: (id: number) => void;

  selectDifficulty: (
    difficulty: DifficultyLevel
  ) => void;

  setQuestions: (
    questions: InterviewQuestion[]
  ) => void;

  nextQuestion: () => void;

  startInterview: () => void;

  finishInterview: () => void;

  setTimeRemaining: (
    time: number
  ) => void;
  tickTimer: () => void;

  resetInterview: () => void;

  canStartInterview: () => boolean;
}

export const useInterviewStore =
  create<InterviewStore>((set, get) => ({
    categories: interviewCategories,

    selectedCategory: null,

    selectedDifficulty: "Beginner",

    questions: [],

    currentQuestionIndex: 0,

    status: "idle",

    timeRemaining: INTERVIEW_DURATION,

    isRunning: false,

    selectCategory: (id) =>
      set({
        selectedCategory: id,
      }),

    selectDifficulty: (difficulty) =>
      set({
        selectedDifficulty: difficulty,
      }),

    setQuestions: (questions) =>
      set({
        questions,
        currentQuestionIndex: 0,
      }),

    nextQuestion: () =>
      set((state) => ({
        currentQuestionIndex:
          state.currentQuestionIndex + 1,
      })),

    startInterview: () =>
      set({
        status: "running",
        isRunning: true,
        timeRemaining: INTERVIEW_DURATION,
      }),

    finishInterview: () =>
      set({
        status: "completed",
        isRunning: false,
      }),

    setTimeRemaining: (time) =>
      set({
        timeRemaining: time,
      }),

    tickTimer: () =>
  set((state) => ({
    timeRemaining: Math.max(
      state.timeRemaining - 1,
      0
    ),
  })),

    resetInterview: () =>
      set({
        selectedCategory: null,
        selectedDifficulty: "Beginner",
        questions: [],
        currentQuestionIndex: 0,
        status: "idle",
        timeRemaining: INTERVIEW_DURATION,
        isRunning: false,
      }),

    canStartInterview: () => {
      const {
        selectedCategory,
        selectedDifficulty,
      } = get();

      return (
        selectedCategory !== null &&
        selectedDifficulty !== undefined
      );
    },
  }));