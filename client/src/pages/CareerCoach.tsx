import { useEffect } from "react";

import {
  PageHeader,
  Card,
  Badge,
  Button,
  ProgressBar,
} from "../components/ui";

import { useResumeStore } from "../store/resume.store";
import { useCareerCoachStore } from "../store/careerCoach.store";

const CareerCoach = () => {
  const { analysis } = useResumeStore();

  const {
    advice,
    loading,
    generateCareerAdvice,
  } = useCareerCoachStore();

  useEffect(() => {
    if (analysis) {
      generateCareerAdvice(analysis);
    }
  }, [analysis]);

  if (!analysis) {
    return (
      <div className="space-y-8">
        <PageHeader
          title="AI Career Coach"
          subtitle="Analyze your resume first to unlock personalized career coaching."
        />

        <Card>
          <p className="text-slate-600">
            Please visit the Resume Analyzer page,
            upload your resume, and generate an
            analysis before using the Career Coach.
          </p>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <PageHeader
          title="AI Career Coach"
          subtitle="Preparing your personalized career roadmap..."
        />

        <Card>
          <p className="text-center text-lg">
            🤖 AI is analyzing your profile...
          </p>
        </Card>
      </div>
    );
  }

  if (!advice) {
    return null;
  }

  return (
    <div className="space-y-8">

      <PageHeader
        title="AI Career Coach"
        subtitle="Your personalized AI career guidance."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        <Card>

          <h3 className="font-semibold mb-4">
            Career Readiness
          </h3>

          <ProgressBar
            value={advice.careerReadinessScore}
            color="success"
          />

        </Card>

        <Card>

          <h3 className="font-semibold">
            Recommended Role
          </h3>

          <p className="mt-4 text-2xl font-bold text-cyan-600">
            {advice.recommendedRole}
          </p>

          <p className="mt-3">
            Interview Status:
          </p>

          <Badge variant="primary">
            {advice.interviewReadiness}
          </Badge>

        </Card>

      </div>

      <Card>

        <h2 className="text-xl font-semibold mb-4">
          Strengths
        </h2>

        <div className="flex flex-wrap gap-3">

          {advice.strengths.map((item) => (
            <Badge
              key={item}
              variant="success"
            >
              {item}
            </Badge>
          ))}

        </div>

      </Card>

      <Card>

        <h2 className="text-xl font-semibold mb-4">
          Skill Gaps
        </h2>

        <div className="flex flex-wrap gap-3">

          {advice.skillGaps.map((item) => (
            <Badge
              key={item}
              variant="warning"
            >
              {item}
            </Badge>
          ))}

        </div>

      </Card>

      <Card>

        <h2 className="text-xl font-semibold mb-4">
          Recommended Certifications
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          {advice.certifications.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}

        </ul>

      </Card>

      <Card>

        <h2 className="text-xl font-semibold mb-4">
          30-Day Learning Plan
        </h2>

        <ul className="list-disc pl-6 space-y-2">

          {advice.learningPlan.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}

        </ul>

      </Card>

      <Card>

        <h2 className="text-xl font-semibold mb-4">
          AI Career Summary
        </h2>

        <p className="leading-8 text-slate-700">
          {advice.summary}
        </p>

      </Card>

      <div className="flex justify-end">

        <Button
          variant="primary"
          onClick={() =>
            generateCareerAdvice(analysis)
          }
        >
          Refresh Advice
        </Button>

      </div>

    </div>
  );
};

export default CareerCoach;