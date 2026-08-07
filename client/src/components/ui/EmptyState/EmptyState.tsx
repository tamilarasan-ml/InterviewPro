import { Inbox } from "lucide-react";
import type { EmptyStateProps } from "./EmptyState.types";

const EmptyState = ({
  title,
  description,
  icon,
  actionLabel,
  onAction,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-10 text-center shadow-sm">

      {icon ?? <Inbox className="mb-4 h-12 w-12 text-slate-400" />}

      <h3 className="text-lg font-semibold text-slate-700">
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-sm text-slate-500">
          {description}
        </p>
      )}

      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-6 rounded-lg bg-cyan-600 px-5 py-2 text-white transition hover:bg-cyan-700"
        >
          {actionLabel}
        </button>
      )}

    </div>
  );
};

export default EmptyState;