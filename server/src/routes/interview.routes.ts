import { Router } from "express";

import {
  interviewFeedback,
  saveInterviewReport,
} from "../controllers/interview.controller";

const router = Router();

router.post("/feedback", interviewFeedback);

router.post("/", saveInterviewReport);

export default router;