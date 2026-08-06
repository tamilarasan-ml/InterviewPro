import type { HTMLAttributes } from "react";

export interface ProgressBarProps
  extends HTMLAttributes<HTMLDivElement> {
  value: number;

  label?: string;

  showLabel?: boolean;

  color?: "primary" | "success" | "warning" | "danger";
}