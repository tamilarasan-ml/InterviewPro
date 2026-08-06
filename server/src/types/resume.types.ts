export interface ResumeAnalysis {
  atsScore: number;
  resumeScore: number;

  strengths: string[];

  missingSkills: string[];

  suggestions: string[];

  summary: string;
}