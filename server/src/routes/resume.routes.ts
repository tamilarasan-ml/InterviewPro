import { Router } from "express";
import multer from "multer";

import {
  analyzeResumeController,
} from "../controllers/resume.controller";

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/analyze",
  upload.single("resume"),
  analyzeResumeController
);

export default router;