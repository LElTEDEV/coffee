import { useMemo } from "react";
import {
  Banknote,
  CreditCard,
  DollarSign,
  Landmark,
  MapPinned,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { Input } from "../components/Input";
import { useCartContext } from "../context/BagContext";
import { CheckOutCard } from "../components/CheckOutCard";
import { PaymentOption } from "../components/PaymentOption";
import { CoffeeCardCart } from "../components/CoffeeCardCart";

const checkoutFormSchema = z.object({
  cep: z.string().min(8, "Informe o CEP corretamente"),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  uf: z.string().min(2, "UF deve ter 2 letras").max(2, "UF deve ter 2 letras"),
  paymentMethod: z.enum(["credit", "debit", "money"], {
    message: "Selecione uma opção de pagamento.",
  }),
});

type CheckoutFormInputs = z.infer<typeof checkoutFormSchema>;

export function CheckOut() {
  const { amountInCart, cart } = useCartContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<CheckoutFormInputs>({
    resolver: zodResolver(checkoutFormSchema),
  });

  const selectedPaymentMethod = watch("paymentMethod");

  const valueTotal = useMemo(
    () =>
      cart.reduce(
        (prev, current) => prev + current.item.price * current.amount,
        0
      ),
    [cart]
  );

  const deliveryPrice = 3.5;

  function handleConfirmOrder() {
    navigate("/success");
  }

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
    <form
      onSubmit={handleSubmit(handleConfirmOrder)}
      className="mt-10 flex flex-col lg:flex-row gap-8"
    >
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
            <div className="flex flex-col gap-2">
              <Input
                type="text"
                placeholder="CEP"
                className="md:max-w-50"
                {...register("cep")}
              />
              {errors.cep && (
                <span className="text-xs text-red-500">
                  {errors.cep.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Input type="text" placeholder="Rua" {...register("street")} />
              {errors.street && (
                <span className="text-xs text-red-500">
                  {errors.street.message}
                </span>
              )}
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex flex-col gap-2">
                <Input
                  type="number"
                  placeholder="Número"
                  {...register("number")}
                />
                {errors.number && (
                  <span className="text-xs text-red-500">
                    {errors.number.message}
                  </span>
                )}
              </div>

              <Input
                type="text"
                placeholder="Complemento"
                className="flex-1"
                {...register("complement")}
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex flex-col gap-2">
                <Input
                  type="text"
                  placeholder="Bairro"
                  {...register("neighborhood")}
                />
                {errors.neighborhood && (
                  <span className="text-xs text-red-500">
                    {errors.neighborhood.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Input
                  type="text"
                  placeholder="Cidade"
                  className="flex-1"
                  {...register("city")}
                />
                {errors.city && (
                  <span className="text-xs text-red-500">
                    {errors.city.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Input
                  type="text"
                  placeholder="UF"
                  className="md:max-w-16"
                  maxLength={2}
                  {...register("uf")}
                />
                {errors.uf && (
                  <span className="text-xs text-red-500">
                    {errors.uf.message}
                  </span>
                )}
              </div>
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
                checked={selectedPaymentMethod === "credit"}
                onChange={() => setValue("paymentMethod", "credit")}
              />

              <PaymentOption
                icon={Landmark}
                label="CARTÃO DE DÉBITO"
                id="debit-card"
                name="payment"
                checked={selectedPaymentMethod === "debit"}
                onChange={() => setValue("paymentMethod", "debit")}
              />

              <PaymentOption
                icon={Banknote}
                label="DINHEIRO"
                id="money"
                name="payment"
                checked={selectedPaymentMethod === "money"}
                onChange={() => setValue("paymentMethod", "money")}
              />
            </div>

            {errors.paymentMethod && (
              <span className="text-xs text-red-500">
                {errors.paymentMethod.message}
              </span>
            )}
          </CheckOutCard>
        </div>
      </div>

      <div>
        <h1 className="text-base-subtitle font-baloo font-bold text-l">
          Cafés selecionados
        </h1>

        <div className="bg-base-card flex flex-col gap-6 xl:items-center rounded-tr-4xl rounded-bl-4xl mt-4 p-10">
          {cart.length > 0 && (
            <div className="flex flex-col xl:items-center gap-6">
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
              Entrega{" "}
              <span className="self-end inline">
                R$ {deliveryPrice.toFixed(2)}
              </span>
            </p>

            <p className="text-l text-base-subtitle font-bold flex justify-between">
              Total{" "}
              <span className="self-end inline">
                R$ {(valueTotal + deliveryPrice).toFixed(2)}
              </span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full text-center py-3 bg-yellow text-white rounded-md text-md font-bold disabled:opacity-70 disabled:cursor-not-allowed"
          >
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </form>
  );
}
