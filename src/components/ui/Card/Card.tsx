import { cn } from "../../../lib/utils";
import type { CardProps } from "./Card.types";

const Card = ({
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white shadow-md p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;