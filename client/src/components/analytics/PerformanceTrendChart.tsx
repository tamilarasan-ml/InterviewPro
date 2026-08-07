import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface TrendData {
  interview: string;
  score: number;
}

interface PerformanceTrendChartProps {
  data: TrendData[];
}

const PerformanceTrendChart = ({
  data,
}: PerformanceTrendChartProps) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Interview Performance Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <LineChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="interview" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#06b6d4"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default PerformanceTrendChart;