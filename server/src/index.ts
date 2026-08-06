import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import interviewRoutes from "./routes/interview.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import learningRoutes from "./routes/learning.routes";
import profileRoutes from "./routes/profile.routes";
import "./database/database";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/interview", interviewRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/learning", learningRoutes);
app.use("/api/profile", profileRoutes);

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