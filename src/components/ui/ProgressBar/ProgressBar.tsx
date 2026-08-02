import { cn } from "../../../lib/utils";
import type { ProgressBarProps } from "./ProgressBar.types";

const ProgressBar = ({
  value,
  showLabel = true,
  color = "primary",
  className,
  ...props
}: ProgressBarProps) => {
  const colors = {
    primary: "bg-cyan-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
  };

  const progress = Math.min(Math.max(value, 0), 100);

  return (
    <div className={cn("w-full", className)} {...props}>
      {showLabel && (
        <div className="mb-2 flex justify-between text-sm font-medium text-slate-600">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
      )}

      <div className="h-3 w-full rounded-full bg-slate-200">
        <div
          className={cn(
            "h-3 rounded-full transition-all duration-500",
            colors[color]
          )}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;