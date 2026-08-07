import PerformanceTrendChart, {
  type TrendData,
} from "./PerformanceTrendChart";

import CategoryPieChart, {
  type CategoryData,
} from "./CategoryPieChart";

import SkillBarChart, {
  type SkillData,
} from "./SkillBarChart";

interface AnalyticsChartsProps {
  trendData: TrendData[];

  categoryData: CategoryData[];

  skillData: SkillData[];
}

const AnalyticsCharts = ({
  trendData,
  categoryData,
  skillData,
}: AnalyticsChartsProps) => {
  return (
    <div className="space-y-8">

      <PerformanceTrendChart
        data={trendData}
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

        <CategoryPieChart
          data={categoryData}
        />

        <SkillBarChart
          data={skillData}
        />

      </div>

    </div>
  );
};

export default AnalyticsCharts;