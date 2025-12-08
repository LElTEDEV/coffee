import { Coffee, Package, ShoppingCart, Timer } from "lucide-react";

import coffeBanner from "../assets/coffeeBanner.svg";
import { InfoContent } from "../components/InfoContent";
import { CoffeeItem, type CoffeeItemProps } from "../components/CoffeeItem";

const COFFEES: CoffeeItemProps[] = [
  {
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    image: "expresso-tradicional",
    price: 9.9,
    type: ["TRADICIONAL"],
  },
  {
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    image: "expresso-americano",
    price: 9.9,
    type: ["TRADICIONAL"],
  },
  {
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    image: "expresso-cremoso",
    price: 9.9,
    type: ["TRADICIONAL"],
  },
  {
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    image: "expresso-gelado",
    price: 9.9,
    type: ["TRADICIONAL", "GELADO"],
  },
  {
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    image: "cafe-com-leite",
    price: 9.9,
    type: ["TRADICIONAL", "COM LEITE"],
  },
  {
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: "latte",
    price: 9.9,
    type: ["TRADICIONAL", "COM LEITE"],
  },
  {
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: "capuccino",
    price: 9.9,
    type: ["TRADICIONAL", "COM LEITE"],
  },
  {
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    image: "macchiato",
    price: 9.9,
    type: ["TRADICIONAL", "COM LEITE"],
  },
  {
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    image: "mocaccino",
    price: 9.9,
    type: ["TRADICIONAL", "COM LEITE"],
  },
  {
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    image: "chocolate-quente",
    price: 9.9,
    type: ["ESPECIAL", "COM LEITE"],
  },
  {
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: "cubano",
    price: 9.9,
    type: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
  },
  {
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    image: "havaiano",
    price: 9.9,
    type: ["ESPECIAL"],
  },
  {
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    image: "arabe",
    price: 9.9,
    type: ["ESPECIAL"],
  },
  {
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    image: "irlandes",
    price: 9.9,
    type: ["ESPECIAL", "ALCOÓLICO"],
  },
];

export function Home() {
  return (
    <div>
      <div className="relative flex flex-col sm:flex-row justify-between mt-6 xl:mt-24 mb-14 xl:mb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-yellow/30 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-purple/50 blur-3xl" />
        </div>

        <main className="max-w-147">
          <h1 className="font-baloo text-baloo-l xl:text-baloo-xl font-extrabold leading-130 text-base-title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>

          <p className="text-base-subtitle text-m xl:text-l mt-4 mb-8 lg:mb-16">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="flex flex-col lg:flex-row flex-wrap max-w-[35.43rem] gap-5">
            <div className="grid md:grid-cols-2 gap-4 xl:gap-8">
              <InfoContent>
                <span className="bg-yellow-dark p-2 lg:p-3 rounded-full">
                  <ShoppingCart size={16} className="text-white" />
                </span>

                <p className="text-base-text text-s xl:text-m leading-130">
                  Compra simples e segura
                </p>
              </InfoContent>

              <InfoContent>
                <span className="bg-base-text p-2 lg:p-3 rounded-full">
                  <Package size={16} className="text-white" />
                </span>

                <p className="text-base-text text-s xl:text-m leading-130">
                  Embalagem mantém o café intacto
                </p>
              </InfoContent>
            </div>

            <div className="grid md:grid-cols-2 gap-4 xl:gap-8">
              <InfoContent>
                <span className="bg-yellow p-2 lg:p-3 rounded-full">
                  <Timer size={16} className="text-white" />
                </span>

                <p className="text-base-text text-s xl:text-m leading-130">
                  Entrega rápida e rastreada
                </p>
              </InfoContent>

              <InfoContent>
                <span className="bg-purple p-2 lg:p-3 rounded-full">
                  <Coffee size={16} className="text-white" />
                </span>

                <p className="text-base-text text-s xl:text-m leading-130">
                  O café chega fresquinho até você
                </p>
              </InfoContent>
            </div>
          </div>
        </main>

        <img
          src={coffeBanner}
          alt=""
          width={300}
          className="self-center lg:w-119 lg:self-start"
        />
      </div>

      <section>
        <h1 className="font-baloo text-baloo-l xl:text-baloo-xl font-extrabold leading-130 text-base-title mb-8 xl:mb-14">
          Nossos cafés
        </h1>

        <div className="w-full flex flex-col flex-wrap md:flex-row items-center justify-center lg:justify-start gap-x-8 gap-y-10">
          {COFFEES.map((item) => (
            <CoffeeItem
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
              type={item.type}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
