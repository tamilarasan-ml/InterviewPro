import { Card } from "..";
import type { StatCardProps } from "./StatCard.types";

const StatCard = ({
  title,
  value,
  icon,
}: StatCardProps) => {
  return (
    <Card className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-800">
          {value}
        </h2>
      </div>

      {icon && (
        <div className="text-cyan-500">
          {icon}
        </div>
      )}
    </Card>
  );
};

export default StatCard;