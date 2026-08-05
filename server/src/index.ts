import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import interviewRoutes from "./routes/interview.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/interview", interviewRoutes);

app.get("/api/health", (_, res) => {
  res.status(200).json({
    status: "OK",
    message: "InterviewPro AI Backend is running 🚀",
  });
});

import { env } from "./config/env";

const PORT = env.port;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on http://localhost:${PORT}`
  );
});