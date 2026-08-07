import InterviewHeader from "../features/interview/components/InterviewHeader";
import InterviewCategoryCard from "../features/interview/components/InterviewCategoryCard";
import InterviewSummary from "../features/interview/components/InterviewSummary";
import StartInterviewButton from "../features/interview/components/StartInterviewButton";

const MockInterview = () => {
  return (
    <div className="space-y-8">
      <InterviewHeader />

      <InterviewSummary />

      <InterviewCategoryCard />

      <StartInterviewButton />
    </div>
  );
};

export default MockInterview;