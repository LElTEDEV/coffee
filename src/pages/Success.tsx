import { useLocation } from "react-router-dom";
import { Clock, DollarSign, MapPin } from "lucide-react";

import type { CheckoutFormInputs } from "./Checkout";
import { SuccessInfo } from "../components/SuccessInfo";
import illustrationSvg from "../assets/illustration.svg";

const metodoPagamento = {
  credit: "Crédito",
  debit: "Débito",
  money: "Dinheiro",
};

export function Success() {
  const location = useLocation();

  const { street, neighborhood, city, number, uf, paymentMethod } =
    location.state as CheckoutFormInputs;

  return (
    <div className="mt-6 xl:mt-20 flex flex-col md:flex-row items-center gap-20">
      <main>
        <h1 className="font-baloo text-baloo-m xl:text-baloo-l text-yellow-dark font-extrabold leading-130">
          Uhu! Pedido confirmado
        </h1>

        <p className="text-m xl:text-l text-base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <section className="lg:w-[526px] border p-10 rounded rounded-tr-4xl rounded-bl-4xl border-yellow mt-5 xl:mt-10 flex flex-col gap-8">
          <SuccessInfo icon={MapPin} className="bg-purple">
            <p className="text-base-text text-xs lg:text-m">
              Entrega em {street}, {number} {neighborhood} - {city}, {uf}
            </p>
          </SuccessInfo>

          <SuccessInfo icon={Clock} className="bg-yellow">
            <p className="text-base-text text-xs lg:text-m">
              Previsão de entrega <p className="font-bold">20 min - 30 min</p>
            </p>
          </SuccessInfo>

          <SuccessInfo icon={DollarSign} className="bg-yellow-dark">
            <p className="text-base-text text-xs lg:text-m">
              Pagamento na entrega{" "}
              <p className="font-bold">{metodoPagamento[paymentMethod]}</p>
            </p>
          </SuccessInfo>
        </section>
      </main>

      <img src={illustrationSvg} alt="" className="w-3xs xl:w-3xl" />
    </div>
  );
}
