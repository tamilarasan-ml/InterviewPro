import { useEffect } from "react";
import {
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  PageHeader,
  Card,
  Badge,
  Button,
  ProgressBar,
} from "../components/ui";

import {
  useInterviewHistoryStore,
} from "../store/interviewHistory.store";

const InterviewDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    selectedInterview,
    fetchInterview,
    loading,
  } = useInterviewHistoryStore();

  useEffect(() => {
    if (id) {
      fetchInterview(Number(id));
    }
  }, [id, fetchInterview]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-lg text-slate-600">
          Loading Interview Report...
        </p>
      </div>
    );
  }

  if (!selectedInterview) {
    return (
      <Navigate
        to="/interview-history"
        replace
      />
    );
  }

  return (
    <div className="space-y-8">

      <PageHeader
        title="Interview Details"
        subtitle="Complete AI Interview Evaluation Report"
      />

      {/* Header */}

      <Card>

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold">
              {selectedInterview.category}
            </h2>

            <div className="mt-3">
              <Badge variant="primary">
                {selectedInterview.difficulty}
              </Badge>
            </div>

          </div>

          <div className="text-right">

            <p className="text-slate-500">
              Overall Score
            </p>

            <h2 className="text-5xl font-bold text-cyan-600">
              {selectedInterview.overallScore}%
            </h2>

          </div>

        </div>

      </Card>

      {/* Skill Scores */}

      <Card>

        <div className="space-y-6">

          <ProgressBar
            label="Communication"
            value={selectedInterview.communication}
            color="primary"
          />

          <ProgressBar
            label="Technical Knowledge"
            value={selectedInterview.technicalKnowledge}
            color="success"
          />

          <ProgressBar
            label="Domain Knowledge"
            value={selectedInterview.domainKnowledge}
            color="warning"
          />

          <ProgressBar
            label="Confidence"
            value={selectedInterview.confidence}
            color="danger"
          />

        </div>

      </Card>

      {/* Strengths */}

      <Card>

        <h3 className="mb-4 text-xl font-semibold">
          Strengths
        </h3>

        <div className="flex flex-wrap gap-3">

          {selectedInterview.strengths.map(
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

      </Card>

      {/* Areas For Improvement */}

      <Card>

        <h3 className="mb-4 text-xl font-semibold">
          Areas For Improvement
        </h3>

        <div className="flex flex-wrap gap-3">

          {selectedInterview.areasForImprovement.map(
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

      </Card>

      {/* Suggested Answer */}

      <Card>

        <h3 className="text-xl font-semibold">
          Suggested Answer
        </h3>

        <p className="mt-4 leading-8 text-slate-700">
          {selectedInterview.suggestedAnswer}
        </p>

      </Card>

      {/* AI Recommendation */}

      <Card>

        <h3 className="text-xl font-semibold">
          AI Recommendation
        </h3>

        <p className="mt-4 rounded-lg bg-cyan-50 p-5 leading-7 text-slate-700">
          {selectedInterview.recommendation}
        </p>

      </Card>

      {/* Footer */}

      <div className="flex justify-end gap-4">

        <Button
          variant="secondary"
          onClick={() =>
            navigate("/interview-history")
          }
        >
          Back
        </Button>

        <Button
          variant="primary"
          onClick={() =>
            navigate("/mock-interview")
          }
        >
          Retake Interview
        </Button>

      </div>

    </div>
  );
};

export default InterviewDetails;