import {
  Navigate,
  useNavigate,
} from "react-router-dom";

import {
  PageHeader,
  Card,
  Button,
} from "../components/ui";

import { useInterview } from "../hooks/useInterview";

const InterviewResult = () => {
  const navigate = useNavigate();

  const {
    categories,
    selectedCategory,
    selectedDifficulty,
    questions,
    interviewAnswers,
    resetInterview,
  } = useInterview();

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

  const category = categories.find(
    (item) =>
      item.id === selectedCategory
  );

  const average = (
    selector: (
      value: typeof interviewAnswers[number]
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
      item.feedback
        .technicalKnowledge
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

  const handleInterviewAgain = () => {
    resetInterview();
    navigate("/mock-interview");
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="AI Interview Report"
        subtitle="Here's your AI-powered interview evaluation."
      />

      <Card>
        <div className="space-y-6">

          <div>
            <h3 className="text-lg font-semibold">
              Category
            </h3>

            <p>
              {category?.name}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Difficulty
            </h3>

            <p>
              {selectedDifficulty}
            </p>
          </div>

          <hr />

          <div className="grid grid-cols-2 gap-4">

            <div>
              <strong>
                Overall Score
              </strong>

              <p>
                {overallScore}%
              </p>
            </div>

            <div>
              <strong>
                Communication
              </strong>

              <p>
                {communication}%
              </p>
            </div>

            <div>
              <strong>
                Technical
              </strong>

              <p>
                {technicalKnowledge}%
              </p>
            </div>

            <div>
              <strong>
                Domain
              </strong>

              <p>
                {domainKnowledge}%
              </p>
            </div>

            <div>
              <strong>
                Confidence
              </strong>

              <p>
                {confidence}%
              </p>
            </div>

          </div>

          <hr />

          <div>
            <h3 className="font-semibold">
              Strengths
            </h3>

            <ul className="list-disc pl-6">
              {latestFeedback?.strengths.map(
                (strength) => (
                  <li key={strength}>
                    {strength}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">
              Areas for Improvement
            </h3>

            <ul className="list-disc pl-6">
              {latestFeedback?.areasForImprovement.map(
                (item) => (
                  <li key={item}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">
              Suggested Answer
            </h3>

            <p>
              {
                latestFeedback?.suggestedAnswer
              }
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Recommendation
            </h3>

            <p>
              {
                latestFeedback?.recommendation
              }
            </p>
          </div>

          <div className="flex justify-end">
            <Button
              variant="primary"
              onClick={
                handleInterviewAgain
              }
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