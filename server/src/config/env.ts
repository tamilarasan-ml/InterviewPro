import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: Number(process.env.PORT) || 5000,

  endpoint: process.env.AZURE_AI_FOUNDRY_ENDPOINT ?? "",

  apiKey: process.env.AZURE_AI_FOUNDRY_API_KEY ?? "",

  deployment: process.env.AZURE_AI_DEPLOYMENT_NAME ?? "",
};