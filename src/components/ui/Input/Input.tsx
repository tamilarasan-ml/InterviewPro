import { cn } from "../../../lib/utils";
import type { InputProps } from "./Input.types";

const Input = ({
  label,
  helperText,
  error,
  required = false,
  className,
  id,
  ...props
}: InputProps) => {
  const inputId =
    id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <input
        id={inputId}
        className={cn(
          "w-full rounded-lg border border-gray-300 px-4 py-2",
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

export default Input;