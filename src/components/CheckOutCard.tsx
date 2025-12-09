import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type CheckOutCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  children: ReactNode;
  className: string;
};

export function CheckOutCard({
  icon: Icon,
  title,
  subtitle,
  className,
  children,
}: CheckOutCardProps) {
  return (
    <div className="bg-base-card p-10 rounded-md flex flex-col gap-8">
      <div className="grid grid-cols-[40px_1fr]">
        <div>
          <Icon size={22} className={className} />
        </div>

        <div>
          <p className="text-base-subtitle text-m">{title}</p>
          <p className="text-base-text text-s">{subtitle}</p>
        </div>
      </div>

      {children}
    </div>
  );
}
