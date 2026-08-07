import type { ButtonProps } from "./Button.types";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-all duration-300 focus:outline-none";

  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-600",

    secondary:
      "bg-slate-600 text-white hover:bg-slate-700",

    outline:
      "border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;