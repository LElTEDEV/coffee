import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={`bg-base-input border border-base-button rounded p-3 focus:outline-yellow-dark text-base-text ${className}`}
      {...rest}
    />
  );
}
