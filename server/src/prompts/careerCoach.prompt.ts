import type { ResumeAnalysis } from "../types/resume.types";
import type { InterviewReport } from "../types/interview.types";

export const careerCoachPrompt = (
  resume: ResumeAnalysis,
  interviews: InterviewReport[]
) => `
You are an experienced AI Career Coach.

You have two inputs:

1. Resume Analysis
2. Interview Performance

Resume Analysis

${JSON.stringify(resume, null, 2)}

Interview Performance

${JSON.stringify(interviews, null, 2)}

Return ONLY valid JSON.

{
  "careerReadinessScore": number,
  "interviewReadiness": "Ready | Almost Ready | Needs Improvement",
  "recommendedRole": "",
  "strengths": [],
  "skillGaps": [],
  "certifications": [],
  "learningPlan": [],
  "summary": ""
}
`;