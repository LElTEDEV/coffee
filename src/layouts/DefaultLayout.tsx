import { NavLink, Outlet } from "react-router-dom";

import logoSvg from "../assets/logo.svg";
import { MapPin, ShoppingCart } from "lucide-react";
import { useCartContext } from "../context/BagContext";

export function DefaultLayout() {
  const { amountInCart } = useCartContext();

  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40 mb-[9.81rem]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between py-8">
          <NavLink to="/">
            <img src={logoSvg} alt="" />
          </NavLink>

          <nav className="flex items-center gap-3">
            <span className="flex items-center gap-1 p-2 rounded bg-purple-light text-purple-dark">
              <MapPin size={22} />
              São Paulo, SP
            </span>

            <NavLink
              to="/check-out"
              className="group bg-yellow-light p-2 rounded hover:bg-yellow-dark transition-colors ease-in relative"
            >
              <ShoppingCart
                size={22}
                className="text-yellow-dark group-hover:text-white transition-colors ease-in"
              />

              {amountInCart > 0 && (
                <span className="absolute -top-3 -right-2 bg-yellow rounded-full p-1.5 py-0 text-white text-s">
                  {amountInCart}
                </span>
              )}
            </NavLink>
          </nav>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
