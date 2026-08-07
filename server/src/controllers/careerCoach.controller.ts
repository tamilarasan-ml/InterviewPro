import { Request, Response } from "express";

import {
  generateCareerAdvice,
} from "../services/careerCoach.service";

export const getCareerAdvice =
  async (
    req: Request,
    res: Response
  ) => {
    try {

      const advice =
        await generateCareerAdvice(
          req.body
        );

      return res.status(200).json(
        advice
      );

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        message:
          "Career advice generation failed.",
      });

    }
  };