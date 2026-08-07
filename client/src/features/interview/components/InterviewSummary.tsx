import { StatCard } from "../../../components/ui";
import { useInterview } from "../../../hooks/useInterview";

const InterviewSummary = () => {
  const { categories, selectedCategory } =
    useInterview();

  const category = categories.find(
    (item) => item.id === selectedCategory
  );

  const totalQuestions =
    category?.totalQuestions ?? 0;

  const estimatedTime = `${totalQuestions * 2} mins`;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <StatCard
        title="Questions"
        value={totalQuestions.toString()}
      />

      <StatCard
        title="Estimated Time"
        value={estimatedTime}
      />
    </div>
  );
};

export default InterviewSummary;