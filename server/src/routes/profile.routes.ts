import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    id: 1,
    name: "Tamil Arasan",
    email: "tamilarasan@example.com",

    avatar:
      "https://ui-avatars.com/api/?name=Tamil+Arasan&background=0891b2&color=ffffff",

    role: "AI Product Owner",

    experience: "12+ Years",

    location: "Chennai, India",

    careerGoal:
      "Build enterprise-grade AI products and become an AI Product Leader.",

    skills: [
      "Product Ownership",
      "Business Analysis",
      "Scrum",
      "SAFe",
      "Payments",
      "Azure AI",
      "React",
      "TypeScript",
      "Node.js",
      "Prompt Engineering",
    ],

    certifications: [
      "PSM I",
      "PSM II",
      "SAFe Scrum Master",
      "SAFe POPM",
    ],

    learningProgress: 68,

    completedInterviews: 12,

    currentStreak: 5,
  });
});

export default router;