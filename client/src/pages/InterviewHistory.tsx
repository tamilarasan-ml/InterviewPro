import { useEffect } from "react";

import {
  PageHeader,
  EmptyState,
} from "../components/ui";

import {
  useInterviewHistoryStore,
} from "../store/interviewHistory.store";

import {
  InterviewCard,
} from "../features/interview/components";

const InterviewHistory = () => {
  const {
    interviews,
    loading,
    error,
    fetchInterviews,
  } = useInterviewHistoryStore();

  useEffect(() => {
    fetchInterviews();
  }, [fetchInterviews]);

  if (loading) {
    return (
      <p className="text-center text-slate-600">
        Loading interview history...
      </p>
    );
  }

  if (error) {
    return (
      <EmptyState
        title="Error"
        description={error}
      />
    );
  }

  if (interviews.length === 0) {
    return (
      <EmptyState
        title="No Interviews"
        description="Complete your first interview to see your history."
      />
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Interview History"
        subtitle="Review all your completed AI interview reports."
      />

      <div className="grid gap-6">
        {interviews.map((interview) => (
          <InterviewCard
            key={interview.id}
            id={interview.id}
            category={interview.category}
            difficulty={interview.difficulty}
            overallScore={interview.overallScore}
            createdAt={interview.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default InterviewHistory;