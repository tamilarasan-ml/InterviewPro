import { Request, Response } from "express";

import { generateFeedback } from "../services/interview.service";

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

    res.status(200).json({
      feedback,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to generate feedback.",
    });
  }
};