import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.json([
    {
      id: 1,
      title: "React Fundamentals",
      description:
        "Master React components, hooks and state management.",
      duration: "6 Hours",
      level: "Beginner",
    },
    {
      id: 2,
      title: "TypeScript Essentials",
      description:
        "Learn interfaces, generics and advanced TypeScript concepts.",
      duration: "5 Hours",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Azure AI Foundry",
      description:
        "Build Generative AI applications using Azure AI Foundry.",
      duration: "8 Hours",
      level: "Advanced",
    },
  ]);
});

export default router;