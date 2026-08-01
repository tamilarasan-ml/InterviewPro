import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}