import type { HTMLAttributes } from "react";

export type ProgressBarColor =
  | "primary"
  | "success"
  | "warning"
  | "danger";

export interface ProgressBarProps
  extends HTMLAttributes<HTMLDivElement> {
  value: number;
  showLabel?: boolean;
  color?: ProgressBarColor;
  className?: string;
}