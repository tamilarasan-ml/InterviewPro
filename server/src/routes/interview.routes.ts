import { Router } from "express";

import {
  interviewFeedback,
  saveInterviewReport,
  getInterviews,
  getInterview,
} from "../controllers/interview.controller";

const router = Router();

// AI Feedback
router.post("/feedback", interviewFeedback);

// Save Interview Report
router.post("/", saveInterviewReport);

// Interview History
router.get("/", getInterviews);

// Interview Details
router.get("/:id", getInterview);

export default router;