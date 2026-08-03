import type {
  HTMLAttributes,
  ReactNode,
} from "react";

interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Card = ({
  children,
  className = "",
  ...props
}: CardProps) => {
  return (
    <div
      className={`
        rounded-xl
        bg-white
        p-6
        shadow-md
        transition-all
        duration-300
        hover:shadow-lg
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;