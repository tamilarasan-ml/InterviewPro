import { create } from "zustand";

import { InterviewHistoryService } from "../services";

export interface InterviewHistory {
  id: number;
  category: string;
  difficulty: string;

  overallScore: number;
  communication: number;
  technicalKnowledge: number;
  domainKnowledge: number;
  confidence: number;

  strengths: string[];

  areasForImprovement: string[];

  suggestedAnswer: string;
  recommendation: string;

  createdAt: string;
}

interface InterviewHistoryStore {
  interviews: InterviewHistory[];

  selectedInterview: InterviewHistory | null;

  loading: boolean;

  error: string | null;

  fetchInterviews: () => Promise<void>;

  fetchInterview: (
    id: number
  ) => Promise<void>;
}

const parseInterview = (
  item: unknown
): InterviewHistory => {
  const interview =
    item as InterviewHistory & {
      strengths: string | string[];
      areasForImprovement:
        | string
        | string[];
    };

  return {
    ...interview,

    strengths:
      typeof interview.strengths ===
      "string"
        ? JSON.parse(
            interview.strengths
          )
        : interview.strengths,

    areasForImprovement:
      typeof interview.areasForImprovement ===
      "string"
        ? JSON.parse(
            interview.areasForImprovement
          )
        : interview.areasForImprovement,
  };
};

export const useInterviewHistoryStore =
  create<InterviewHistoryStore>(
    (set) => ({
      interviews: [],

      selectedInterview: null,

      loading: false,

      error: null,

      fetchInterviews: async () => {
        try {
          set({
            loading: true,
            error: null,
          });

          const response =
            await InterviewHistoryService.getAllInterviews();

          set({
            interviews:
              response.data.map(
                parseInterview
              ),
            loading: false,
          });
        } catch {
          set({
            loading: false,
            error:
              "Unable to load interview history.",
          });
        }
      },

      fetchInterview: async (
        id: number
      ) => {
        try {
          set({
            loading: true,
            error: null,
          });

          const response =
            await InterviewHistoryService.getInterviewById(
              id
            );

          set({
            selectedInterview:
              parseInterview(
                response.data
              ),
            loading: false,
          });
        } catch {
          set({
            loading: false,
            error:
              "Unable to load interview.",
          });
        }
      },
    })
  );