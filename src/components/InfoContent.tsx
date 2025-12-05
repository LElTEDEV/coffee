import type { ReactNode } from "react";

export function InfoContent({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-3">{children}</div>;
}
