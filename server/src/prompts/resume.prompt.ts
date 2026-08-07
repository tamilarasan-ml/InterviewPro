export const resumeAnalysisPrompt = (
  resume: string
) => `
You are an expert ATS Resume Reviewer.

Analyze the following resume.

Return ONLY valid JSON.

{
  "atsScore": number,
  "resumeScore": number,
  "strengths": ["..."],
  "missingSkills": ["..."],
  "suggestions": ["..."],
  "summary": "..."
}

Resume:

${resume}
`;