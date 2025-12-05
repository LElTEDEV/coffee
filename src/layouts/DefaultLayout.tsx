import { NavLink, Outlet } from "react-router-dom";

import logoSvg from "../assets/logo.svg";
import { MapPin, ShoppingCart } from "lucide-react";

export function DefaultLayout() {
  return (
    <div className="w-screen px-4 md:px-20 lg:px-40">
      <div className="flex items-center justify-between py-8">
        <img src={logoSvg} alt="" />

        <nav className="flex items-center gap-3">
          <span className="flex items-center gap-1 p-2 rounded bg-purple-light text-purple-dark">
            <MapPin size={22} />
            São Paulo, SP
          </span>

          <NavLink
            to="/check-out"
            className="group bg-yellow-light p-2 rounded hover:bg-yellow-dark transition-colors ease-in"
          >
            <ShoppingCart
              size={22}
              className="text-yellow-dark group-hover:text-white transition-colors ease-in"
            />
          </NavLink>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}
