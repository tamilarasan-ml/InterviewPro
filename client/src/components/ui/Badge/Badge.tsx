import { cn } from "../../../lib/utils";
import type { BadgeProps } from "./Badge.types";

const Badge = ({
  children,
  variant = "neutral",
  rounded = true,
  className,
  ...props
}: BadgeProps) => {
  const baseStyles =
  "inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide";

  const variants = {
    primary:
      "bg-cyan-100 text-cyan-700",

    secondary:
      "bg-slate-100 text-slate-700",
        
    success:
      "bg-green-100 text-green-700",

    warning:
      "bg-yellow-100 text-yellow-700",

    error:
      "bg-red-100 text-red-700",

    info:
      "bg-blue-100 text-blue-700",

    neutral:
      "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={cn(
        baseStyles,
        variants[variant],
        rounded ? "rounded-full" : "rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;