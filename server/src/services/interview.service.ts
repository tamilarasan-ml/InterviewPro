import { client } from "./azureAI.service";
import { env } from "../config/env";

export const generateFeedback = async (
  answer: string
): Promise<string> => {
  console.log("Endpoint:", env.endpoint);
  console.log("Deployment:", env.deployment);

  const response = await client.responses.create({
    model: env.deployment,
    input: `You are an expert technical interviewer.

Evaluate the following interview answer.

Candidate Answer:
${answer}

Return your response in this format:

Overall Score:
Strengths:
Areas for Improvement:
Suggested Answer:
Final Recommendation:
`,
  });

  return response.output_text;
};