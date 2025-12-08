import { useState } from "react";
import { Minus, PlusIcon, ShoppingCart } from "lucide-react";

import { Tag } from "./Tag";

export type CoffeeItemProps = {
  title: string;
  description: string;
  image: string;
  price: number;
  type: string[];
};

export function CoffeeItem({
  title,
  description,
  price,
  image,
  type,
}: CoffeeItemProps) {
  const [amount, setAmount] = useState<number>(0);

  function handleAmountRemove() {
    setAmount((prev) => (prev === 0 ? 0 : (prev -= 1)));
  }

  function handleAmountSome() {
    setAmount((prev) => (prev += 1));
  }

  return (
    <div className="max-w-64 max-h-[19.37rem] p-5 flex flex-col items-center justify-center bg-base-card rounded rounded-tr-4xl rounded-bl-4xl">
      <img
        src={new URL(`../assets/${image}.png`, import.meta.url).href}
        alt=""
        className="-mt-10 w-[120px]"
      />

      <div className="flex items-center gap-1">
        {type.map((tag, index) => (
          <Tag key={`${tag}-${index}`} title={tag} />
        ))}
      </div>

      <h1 className="font-baloo text-l text-base-subtitle font-bold mb-2">
        {title}
      </h1>

      <p className="text-s font-normal text-center text-base-label mb-8">
        {description}
      </p>

      <div className="flex items-center gap-2">
        <div className="flex flex-1 items-center gap-1 mr-6">
          <span className="text-xs text-base-text">R$</span>
          <span className="font-baloo text-l font-extrabold text-base-text leading-130">
            {price}
          </span>
        </div>

        <div className="group border border-transparent focus-within:border focus-within:border-purple flex items-center bg-base-button rounded-lg px-2 py-3 h-[38px]">
          <button
            className={`${
              amount === 0 ? "cursor-not-allowed disabled" : "cursor-pointer"
            }`}
            onClick={handleAmountRemove}
          >
            <Minus
              size={14}
              className={amount === 0 ? "text-red-700/60" : "text-purple"}
            />
          </button>

          <input
            type="number"
            name="add"
            id="add"
            min={0}
            value={amount}
            className="text-center text-base-title w-10 focus:outline-0"
            onChange={({ target }) => setAmount(Number(target.value))}
          />

          <button className="hover:cursor-pointer" onClick={handleAmountSome}>
            <PlusIcon size={14} className="text-purple" />
          </button>
        </div>

        <button className="p-2 bg-purple rounded text-white hover:cursor-pointer hover:bg-purple-dark transition ease-in">
          <ShoppingCart size={22} />
        </button>
      </div>
    </div>
  );
}
