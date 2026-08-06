import { Request, Response } from "express";

import {
  analyzeResume,
} from "../services/resume.service";

export const analyzeResumeController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          message:
            "Resume PDF is required.",
        });
      }

      const analysis =
        await analyzeResume(
          req.file.buffer
        );

      return res.status(200).json(
        analysis
      );
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message:
          "Resume analysis failed.",
      });
    }
  };