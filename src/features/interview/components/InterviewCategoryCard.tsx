import { Card, Badge } from "../../../components/ui";
import { useInterview } from "../../../hooks/useInterview";

const InterviewCategoryCard = () => {
  const {
    categories,
    selectedCategory,
    selectCategory,
  } = useInterview();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Card
          key={category.id}
          className={`cursor-pointer transition-all ${
            selectedCategory === category.id
              ? "border-2 border-cyan-500"
              : ""
          }`}
          onClick={() => selectCategory(category.id)}
        >
          <div>
            <div className="text-4xl">
              {category.icon}
            </div>

            <h3 className="mt-4 text-xl font-semibold">
              {category.name}
            </h3>

            <div className="mt-3">
              <Badge variant="info">
                {category.totalQuestions} Questions
              </Badge>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default InterviewCategoryCard;