import { create } from "zustand";

import { interviewCategories } from "../data/interview.data";
import type { InterviewQuestion } from "../data/interviewQuestions.data";

import { INTERVIEW_DURATION } from "../constants/interview.constants";

import type {
  DifficultyLevel,
  PracticeCategory,
} from "../types/practice.types";

import type {
  InterviewStatus,
  InterviewFeedback,
} from "../types/interview.types";

export interface InterviewAnswer {
  questionId: number;
  answer: string;
  feedback: InterviewFeedback;
}

interface InterviewStore {
  categories: PracticeCategory[];

  selectedCategory: number | null;

  selectedDifficulty: DifficultyLevel;

  questions: InterviewQuestion[];

  currentQuestionIndex: number;

  status: InterviewStatus;

  timeRemaining: number;

  isRunning: boolean;

  interviewAnswers: InterviewAnswer[];

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

  addInterviewAnswer: (
    answer: InterviewAnswer
  ) => void;

  clearInterviewAnswers: () => void;

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

    interviewAnswers: [],

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

    addInterviewAnswer: (answer) =>
      set((state) => ({
        interviewAnswers: [
          ...state.interviewAnswers,
          answer,
        ],
      })),

    clearInterviewAnswers: () =>
      set({
        interviewAnswers: [],
      }),

    resetInterview: () =>
      set({
        selectedCategory: null,
        selectedDifficulty: "Beginner",
        questions: [],
        currentQuestionIndex: 0,
        status: "idle",
        timeRemaining: INTERVIEW_DURATION,
        isRunning: false,
        interviewAnswers: [],
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