import { Request, Response } from "express";

import { generateFeedback } from "../services/interview.service";

import {
  saveInterview,
  getAllInterviews,
  getInterviewById,
} from "../services/interviewPersistence.service";

import type {
  InterviewReport,
} from "../types/interview.types";

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

    const feedback = await generateFeedback(
      answer
    );

    return res.status(200).json({
      feedback,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message:
        "Failed to generate feedback.",
    });
  }
};

export const saveInterviewReport = (
  req: Request,
  res: Response
) => {
  try {
    const report: InterviewReport =
      req.body;

    const interviewId =
      saveInterview(report);

    return res.status(201).json({
      id: interviewId,
      message:
        "Interview saved successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message:
        "Failed to save interview.",
    });
  }
};

export const getInterviews = (
  _: Request,
  res: Response
) => {
  try {
    const interviews =
      getAllInterviews();

    return res.status(200).json(
      interviews
    );
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message:
        "Failed to load interviews.",
    });
  }
};

export const getInterview = (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    const interview =
      getInterviewById(id);

    if (!interview) {
      return res.status(404).json({
        message:
          "Interview not found.",
      });
    }

    return res.status(200).json(
      interview
    );
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message:
        "Failed to load interview.",
    });
  }
};