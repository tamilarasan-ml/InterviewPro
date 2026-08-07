import { api } from "./api";

export interface CareerCoachResponse {
  careerReadinessScore: number;

  interviewReadiness: string;

  recommendedRole: string;

  strengths: string[];

  skillGaps: string[];

  certifications: string[];

  learningPlan: string[];

  summary: string;
}

export const CareerCoachService = {
  async generateCareerAdvice(
    resumeAnalysis: unknown
  ): Promise<CareerCoachResponse> {

    const response = await api.post(
      "/career-coach",
      resumeAnalysis
    );

    return response.data;
  },
};