import { cn } from "../../../lib/utils";
import type { ButtonProps } from "./Button.types";

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500",

    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",

    outline:
      "border border-cyan-600 text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-500",

    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;