import { Router } from "express";

import {
  getCareerAdvice,
} from "../controllers/careerCoach.controller";

const router = Router();

router.post(
  "/",
  getCareerAdvice
);

export default router;