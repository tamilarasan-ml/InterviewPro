import { Router } from "express";

import { interviewFeedback } from "../controllers/interview.controller";

const router = Router();

router.post("/feedback", interviewFeedback);

export default router;