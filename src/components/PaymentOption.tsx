import type { LucideIcon } from "lucide-react";

interface PaymentOptionProps {
  id: string;
  label: string;
  icon: LucideIcon;
  name: string;
  checked: boolean;
  onChange: () => void;
}

export function PaymentOption({
  id,
  label,
  icon: Icon,
  name,
  checked,
  onChange,
}: PaymentOptionProps) {
  return (
    <div className="cursor-pointer flex-1">
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />

      <label
        htmlFor={id}
        className="
          bg-base-button
          rounded-md
          p-4
          flex
          items-center
          gap-3
          border
          border-transparent
          peer-checked:border-purple
          peer-checked:bg-purple-light
          cursor-pointer
        "
      >
        {<Icon size={16} className="text-purple" />}
        <span className="text-base-text text-[11px]">{label}</span>
      </label>
    </div>
  );
}
