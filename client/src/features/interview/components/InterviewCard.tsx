import { useNavigate } from "react-router-dom";

import {
  Card,
  Badge,
  Button,
  ProgressBar,
} from "../../../components/ui";

export interface InterviewCardProps {
  id: number;
  category: string;
  difficulty: string;
  overallScore: number;
  createdAt: string;
}

const InterviewCard = ({
  id,
  category,
  difficulty,
  overallScore,
  createdAt,
}: InterviewCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="space-y-5">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-xl font-semibold">
            {category}
          </h3>

          <div className="mt-2">

            <Badge variant="primary">
              {difficulty}
            </Badge>

          </div>

        </div>

        <div className="text-right">

          <p className="text-sm text-slate-500">
            Overall Score
          </p>

          <h2 className="text-3xl font-bold text-cyan-600">
            {overallScore}%
          </h2>

        </div>

      </div>

      <ProgressBar
        value={overallScore}
        color={
          overallScore >= 80
            ? "success"
            : overallScore >= 60
            ? "warning"
            : "danger"
        }
      />

      <div className="flex items-center justify-between">

        <span className="text-sm text-slate-500">
          {new Date(
            createdAt
          ).toLocaleString()}
        </span>

        <Button
          variant="primary"
          onClick={() =>
            navigate(
              `/interview-history/${id}`
            )
          }
        >
          View Details
        </Button>

      </div>

    </Card>
  );
};

export default InterviewCard;