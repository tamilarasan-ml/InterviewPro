export const interviewEvaluationPrompt = (
  answer: string
) => `
You are an experienced technical interviewer.

Evaluate the candidate's interview answer.

Candidate Answer:
${answer}

Return ONLY valid JSON.

Do not include markdown.
Do not include explanations.

Return this exact schema:

{
  "overallScore": number,
  "communication": number,
  "technicalKnowledge": number,
  "domainKnowledge": number,
  "confidence": number,
  "strengths": [
    "string"
  ],
  "areasForImprovement": [
    "string"
  ],
  "suggestedAnswer": "string",
  "recommendation": "string"
}
`;