import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({
  children,
  className = "",
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
    >
      {children}
    </div>
  );
};

export default Card;