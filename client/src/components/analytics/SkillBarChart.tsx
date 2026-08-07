import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export interface SkillData {
  skill: string;
  score: number;
}

interface SkillBarChartProps {
  data: SkillData[];
}

const SkillBarChart = ({
  data,
}: SkillBarChartProps) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Skill Performance
      </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="skill" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Bar
            dataKey="score"
            fill="#22c55e"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default SkillBarChart;