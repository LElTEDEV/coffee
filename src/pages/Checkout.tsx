import { useState } from "react";
import {
  Banknote,
  CreditCard,
  DollarSign,
  Landmark,
  MapPinned,
} from "lucide-react";
import { Input } from "../components/Input";
import { useCartContext } from "../context/BagContext";
import { CheckOutCard } from "../components/CheckOutCard";
import { PaymentOption } from "../components/PaymentOption";
import { CoffeeCardCart } from "../components/CoffeeCardCart";
import { NavLink } from "react-router-dom";

export function CheckOut() {
  const { amountInCart, cart } = useCartContext();
  const [metodPayment, setMetodPayment] = useState("");

  const valueTotal = cart.reduce(
    (prev, current) => (prev += current.item.price * current.amount),
    0
  );

  if (amountInCart <= 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <h1 className="font-baloo text-baloo-s text-yellow-dark">
          Nenhum produto :'(
        </h1>
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-col lg:flex-row gap-8">
      <div className="flex flex-1 flex-col gap-4 max-w-[640px]">
        <h1 className="text-base-subtitle font-baloo font-bold text-l">
          Complete seu pedido
        </h1>

        <CheckOutCard
          icon={MapPinned}
          subtitle="Informe o endereço onde deseja receber seu pedido"
          title="Endereço de Entrega"
          className="text-yellow-dark"
        >
          <div className="flex flex-col gap-4">
            <Input type="text" placeholder="CEP" className="md:max-w-50" />
            <Input type="text" placeholder="Rua" />

            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <Input type="number" placeholder="Número" />
              <Input type="text" placeholder="Complemento" className="flex-1" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <Input type="text" placeholder="Bairro" />
              <Input type="text" placeholder="Cidade" className="flex-1" />
              <Input type="text" placeholder="UF" className="md:max-w-16" />
            </div>
          </div>
        </CheckOutCard>

        <div className="bg-base-card rounded-md flex flex-col gap-8">
          <CheckOutCard
            icon={DollarSign}
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            className="text-purple"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <PaymentOption
                icon={CreditCard}
                label="CARTÃO DE CRÉDITO"
                id="credit-card"
                name="payment"
                checked={metodPayment === "CARTÃO DE CRÉDITO"}
                onChange={() => setMetodPayment("CARTÃO DE CRÉDITO")}
              />

              <PaymentOption
                icon={Landmark}
                label="CARTÃO DE DÉBITO"
                id="debit-card"
                name="payment"
                checked={metodPayment === "CARTÃO DE DÉBITO"}
                onChange={() => setMetodPayment("CARTÃO DE DÉBITO")}
              />

              <PaymentOption
                icon={Banknote}
                label="DINHEIRO"
                id="money"
                name="payment"
                checked={metodPayment === "DINHEIRO"}
                onChange={() => setMetodPayment("DINHEIRO")}
              />
            </div>
          </CheckOutCard>
        </div>
      </div>

      <div>
        <h1 className="text-base-subtitle font-baloo font-bold text-l">
          Cafés selecionados
        </h1>

        <div className="bg-base-card flex flex-col gap-6 xl:items-center rounded-tr-4xl rounded-bl-4xl mt-4 p-10">
          {cart.length > 0 && (
            <div className="flex flex-col xl:items-center  gap-6">
              {cart.map(({ item, amount }) => (
                <CoffeeCardCart
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  amount={amount}
                  title={item.title}
                  value={item.price * amount}
                />
              ))}
            </div>
          )}

          <div className="flex flex-col gap-3 w-full">
            <p className="text-s text-base-text flex justify-between">
              Total de itens{" "}
              <span className="self-end inline">
                R$ {valueTotal.toFixed(2)}
              </span>
            </p>

            <p className="text-s text-base-text flex justify-between">
              Entrega <span className="self-end inline">R$ {3.5}</span>
            </p>

            <p className="text-l text-base-subtitle font-bold flex justify-between">
              Total{" "}
              <span className="self-end inline">
                R$ {(valueTotal + 3).toFixed(2)}
              </span>
            </p>
          </div>

          <NavLink
            to="/success"
            className="w-full text-center py-3 bg-yellow text-white rounded-md text-md font-bold"
          >
            CONFIRMAR PEDIDO
          </NavLink>
        </div>
      </div>
    </div>
  );
}
