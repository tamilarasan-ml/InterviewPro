import {
  Navigate,
  useNavigate,
} from "react-router-dom";
import {
  useEffect,
  useRef,
} from "react";

import {
  PageHeader,
  Card,
  Button,
  ProgressBar,
  Badge,
  StatCard,
} from "../components/ui";

import { Trophy } from "lucide-react";

import { useInterview } from "../hooks/useInterview";
import { AIInterviewService } from "../services";

import type { InterviewReport } from "../types";

const InterviewResult = () => {
  const navigate = useNavigate();

  const hasSavedReport = useRef(false);

  const {
    categories,
    selectedCategory,
    selectedDifficulty,
    questions,
    interviewAnswers,
    resetInterview,
  } = useInterview();

  

  const category = categories.find(
    (item) =>
      item.id === selectedCategory
  );

  const average = (
    selector: (
      item: typeof interviewAnswers[number]
    ) => number
  ) => {
    if (interviewAnswers.length === 0) {
      return 0;
    }

    const total = interviewAnswers.reduce(
      (sum, item) =>
        sum + selector(item),
      0
    );

    return Math.round(
      total / interviewAnswers.length
    );
  };

  const overallScore = average(
    (item) =>
      item.feedback.overallScore
  );

  const communication = average(
    (item) =>
      item.feedback.communication
  );

  const technicalKnowledge = average(
    (item) =>
      item.feedback.technicalKnowledge
  );

  const domainKnowledge = average(
    (item) =>
      item.feedback.domainKnowledge
  );

  const confidence = average(
    (item) =>
      item.feedback.confidence
  );

  const latestFeedback =
    interviewAnswers[
      interviewAnswers.length - 1
    ]?.feedback;

  useEffect(() => {
    if (
      hasSavedReport.current ||
      !latestFeedback ||
      !category
    ) {
      return;
    }

    hasSavedReport.current = true;

    const report: InterviewReport = {
      category: category.name,
      difficulty: selectedDifficulty,
      totalQuestions: questions.length,

      overallScore,
      communication,
      technicalKnowledge,
      domainKnowledge,
      confidence,

      strengths: latestFeedback.strengths,
      areasForImprovement:
        latestFeedback.areasForImprovement,

      suggestedAnswer:
        latestFeedback.suggestedAnswer,

      recommendation:
        latestFeedback.recommendation,
    };

    AIInterviewService
      .saveInterviewReport(report)
      .catch((error) => {
        console.error(
          "Failed to save interview report:",
          error
        );
      });

  }, [
    category,
    selectedDifficulty,
    questions.length,
    overallScore,
    communication,
    technicalKnowledge,
    domainKnowledge,
    confidence,
    latestFeedback,
  ]);

  const handleInterviewAgain = () => {
    resetInterview();
    navigate("/mock-interview");
  };


  if (
    selectedCategory === null ||
    questions.length === 0
  ) {
    return (
      <Navigate
        to="/mock-interview"
        replace
      />
    );
  }
  return (
    <div className="space-y-8">
      <PageHeader
        title="AI Interview Report"
        subtitle="Your interview has been evaluated successfully."
      />

      <StatCard
        title="Overall Score"
        value={`${overallScore}%`}
        icon={
          <Trophy className="h-10 w-10" />
        }
      />

      <Card>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-700">
                Category
              </h3>

              <p className="mt-1 text-slate-600">
                {category?.name}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-700">
                Difficulty
              </h3>

              <p className="mt-1 text-slate-600">
                {selectedDifficulty}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-700">
                Questions
              </h3>

              <p className="mt-1 text-slate-600">
                {questions.length}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-700">
                Completed
              </h3>

              <p className="mt-1 text-slate-600">
                {interviewAnswers.length}
              </p>
            </div>
          </div>

          <hr />

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 font-semibold">
                Communication
              </h4>

              <ProgressBar
                value={communication}
                color="primary"
              />
            </div>

            <div>
              <h4 className="mb-2 font-semibold">
                Technical Knowledge
              </h4>

              <ProgressBar
                value={technicalKnowledge}
                color="success"
              />
            </div>

            <div>
              <h4 className="mb-2 font-semibold">
                Domain Knowledge
              </h4>

              <ProgressBar
                value={domainKnowledge}
                color="warning"
              />
            </div>

            <div>
              <h4 className="mb-2 font-semibold">
                Confidence
              </h4>

              <ProgressBar
                value={confidence}
                color="danger"
              />
            </div>
          </div>

          <hr />

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Strengths
            </h3>

            <div className="flex flex-wrap gap-3">
              {latestFeedback?.strengths.map(
                (strength) => (
                  <Badge
                    key={strength}
                    variant="primary"
                  >
                    {strength}
                  </Badge>
                )
              )}
            </div>
          </div>

          <hr />

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Areas for Improvement
            </h3>

            <div className="flex flex-wrap gap-3">
              {latestFeedback?.areasForImprovement.map(
                (item) => (
                  <Badge
                    key={item}
                    variant="warning"
                  >
                    {item}
                  </Badge>
                )
              )}
            </div>
          </div>

          <hr />

          <div>
            <h3 className="text-lg font-semibold">
              Suggested Answer
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {latestFeedback?.suggestedAnswer}
            </p>
          </div>

          <hr />

          <div>
            <h3 className="text-lg font-semibold">
              AI Recommendation
            </h3>

            <p className="mt-3 rounded-lg bg-cyan-50 p-4 text-slate-700">
              {latestFeedback?.recommendation}
            </p>
          </div>

          <div className="flex justify-end">
            <Button
              variant="primary"
              onClick={handleInterviewAgain}
            >
              Interview Again
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InterviewResult;