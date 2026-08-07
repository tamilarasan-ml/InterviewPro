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