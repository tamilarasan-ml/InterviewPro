import { InterviewRepository } from "../../repositories/interview.repository";

import { buildSummary } from "./summary.service";
import { buildTrend } from "./trend.service";
import { buildCategories } from "./category.service";
import { buildSkills } from "./skill.service";
import { buildRecentActivities } from "./activity.service";

import type { AnalyticsResponse } from "../../types/analytics.types";

export const getAnalytics = (): AnalyticsResponse => {
  const interviews = InterviewRepository.findAll();

  return {
    summary: buildSummary(interviews),
    trend: buildTrend(interviews),
    categories: buildCategories(interviews),
    skills: buildSkills(interviews),
    recentActivities: buildRecentActivities(interviews),
  };
};