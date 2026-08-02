import { Inbox } from "lucide-react";
import type { EmptyStateProps } from "./EmptyState.types";

const EmptyState = ({
  title,
  description,
  icon,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 p-10 text-center">
      <div className="mb-4 text-slate-400">
        {icon ?? <Inbox className="h-12 w-12" />}
      </div>

      <h3 className="text-lg font-semibold text-slate-700">
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-sm text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
};

export default EmptyState;