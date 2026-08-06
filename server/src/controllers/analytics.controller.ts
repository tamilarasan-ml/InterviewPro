import { Request, Response } from "express";

import { AnalyticsService } from "../services/analytics.service";

export const getDashboardAnalytics = (
  _: Request,
  res: Response
) => {
  try {
    const analytics =
      AnalyticsService.getDashboardAnalytics();

    return res.status(200).json(analytics);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to load analytics.",
    });
  }
};