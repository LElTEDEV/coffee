import type { LucideIcon } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type SuccessInfoProps = ComponentProps<"span"> & {
  icon: LucideIcon;
  children: ReactNode;
};

export function SuccessInfo({
  children,
  icon: Icon,
  className,
}: SuccessInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <span className={`rounded-full block w-fit p-2 text-white ${className}`}>
        <Icon size={16} />
      </span>

      {children}
    </div>
  );
}
