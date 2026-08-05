import OpenAI from "openai";
import { env } from "../config/env";

export const client = new OpenAI({
  baseURL: env.endpoint,
  apiKey: env.apiKey,
});