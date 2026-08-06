export type InterviewStatus =
  | "idle"
  | "running"
  | "completed";

export interface InterviewFeedback {
  overallScore: number;
  communication: number;
  technicalKnowledge: number;
  domainKnowledge: number;
  confidence: number;
  strengths: string[];
  areasForImprovement: string[];
  suggestedAnswer: string;
  recommendation: string;
}