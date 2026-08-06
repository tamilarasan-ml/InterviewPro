import { Request, Response } from "express";

import { generateFeedback } from "../services/interview.service";
import { saveInterview } from "../services/interviewPersistence.service";

import type { InterviewReport } from "../types/interview.types";

export const interviewFeedback = async (
  req: Request,
  res: Response
) => {
  try {
    const { answer } = req.body;

    if (!answer) {
      return res.status(400).json({
        message: "Answer is required.",
      });
    }

    const feedback = await generateFeedback(answer);

    return res.status(200).json({
      feedback,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to generate feedback.",
    });
  }
};

export const saveInterviewReport = (
  req: Request,
  res: Response
) => {
  try {
    const report: InterviewReport = req.body;

    const interviewId = saveInterview(report);

    return res.status(201).json({
      id: interviewId,
      message: "Interview saved successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to save interview.",
    });
  }
};