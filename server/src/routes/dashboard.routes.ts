import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    progress: 68,
    mockInterviews: 12,
    accuracy: 87,
    currentStreak: 5,
  });
});

router.get("/recentActivities", (_, res) => {
  res.json([
    {
      id: 1,
      activity: "Completed AI Mock Interview",
    },
    {
      id: 2,
      activity: "Completed React Practice",
    },
    {
      id: 3,
      activity: "Completed Agile Quiz",
    },
  ]);
});

export default router;