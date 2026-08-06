import { InterviewRepository } from "../repositories/interview.repository";

export const AnalyticsService = {
  getDashboardAnalytics() {
    const interviews =
      InterviewRepository.findAll();

    if (interviews.length === 0) {
      return {
        totalInterviews: 0,
        averageScore: 0,
        highestScore: 0,
        bestCategory: "-",
        latestInterview: "-",
      };
    }

    const totalInterviews =
      interviews.length;

    const highestScore = Math.max(
      ...interviews.map(
        (i: any) => i.overallScore
      )
    );

    const averageScore = Math.round(
      interviews.reduce(
        (sum: number, i: any) =>
          sum + i.overallScore,
        0
      ) / totalInterviews
    );

    const latestInterview =
      interviews[0].createdAt;

    const categoryMap =
      new Map<string, number>();

    interviews.forEach((i: any) => {
      categoryMap.set(
        i.category,
        (categoryMap.get(i.category) ?? 0) +
          i.overallScore
      );
    });

    let bestCategory = "-";
    let bestScore = 0;

    categoryMap.forEach(
      (score, category) => {
        if (score > bestScore) {
          bestScore = score;
          bestCategory = category;
        }
      }
    );

    return {
      totalInterviews,
      averageScore,
      highestScore,
      bestCategory,
      latestInterview,
    };
  },
};