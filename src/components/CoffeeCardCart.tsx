import { Trash } from "lucide-react";
import { useCartContext } from "../context/BagContext";

type CoffeeCardCart = {
  id: number;
  title: string;
  image: string;
  amount: number;
  value: number;
};

export function CoffeeCardCart({
  id,
  title,
  image,
  amount,
  value,
}: CoffeeCardCart) {
  const { handleRemoveToCart } = useCartContext();

  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-5 pt-2 px-2 pb-6 border-b border-b-base-button">
      <img
        src={new URL(`../assets/${image}.png`, import.meta.url).href}
        alt=""
        className="w-16 h-16"
      />

      <div className="flex flex-col gap-2">
        <p className="text-m text-base-subtitle">{title}</p>

        <div className="flex items-center gap-2 h-8 overflow-hidden">
          <span className="py-1.5 px-5 bg-base-button rounded-md text-base-title">
            {amount}
          </span>

          <button
            onClick={() => handleRemoveToCart(id)}
            className="py-1.5 px-5 bg-base-button text-s rounded-md text-base-text flex items-center gap-1 hover:bg-base-hover transition ease-in cursor-pointer"
          >
            <Trash size={16} className="text-purple" />
            REMOVER
          </button>
        </div>
      </div>

      <p className="text-m font-bold text-base-text font-baloo self-end xl:self-start">
        R$ {value.toFixed(2)}
      </p>
    </div>
  );
}
