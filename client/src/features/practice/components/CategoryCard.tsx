import { Card, Badge } from "../../../components/ui";
import { usePractice } from "../../../hooks/usePractice";

const CategoryCard = () => {
  const {
    categories,
    selectedCategory,
    selectCategory,
  } = usePractice();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const isSelected =
          selectedCategory === category.id;

        return (
          <Card
            key={category.id}
            className={`
              cursor-pointer
              transition-all
              duration-300
              hover:scale-105
              ${
                isSelected
                  ? "border-2 border-cyan-500 shadow-xl"
                  : "border border-gray-200"
              }
            `}
            onClick={() => selectCategory(category.id)}
          >
            <div className="text-4xl">
              {category.icon}
            </div>

            <h3 className="mt-4 text-xl font-semibold">
              {category.name}
            </h3>

            <div className="mt-3">
              <Badge
                variant={
                  isSelected ? "success" : "info"
                }
              >
                {category.totalQuestions} Questions
              </Badge>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default CategoryCard;