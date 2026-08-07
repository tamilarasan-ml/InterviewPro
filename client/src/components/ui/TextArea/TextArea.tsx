import { cn } from "../../../lib/utils";

import type { TextAreaProps } from "./TextArea.types";

const TextArea = ({
  label,
  helperText,
  error,
  required = false,
  className,
  id,
  ...props
}: TextAreaProps) => {
  const textAreaId =
    id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textAreaId}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <textarea
        id={textAreaId}
        rows={8}
        className={cn(
          "w-full rounded-lg border border-gray-300 px-4 py-3",
          "focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500",
          "disabled:bg-gray-100 disabled:cursor-not-allowed",
          error &&
            "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />

      {helperText && !error && (
        <p className="mt-2 text-sm text-gray-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;