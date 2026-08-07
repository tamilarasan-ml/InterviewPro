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

export interface InterviewReport {
  category: string;
  difficulty: string;
  totalQuestions: number;

  overallScore: number;
  communication: number;
  technicalKnowledge: number;
  domainKnowledge: number;
 confidence: number;

  strengths: string[];
  areasForImprovement: string[];

  suggestedAnswer: string;
  recommendation: string;

  createdAt?: string;
}