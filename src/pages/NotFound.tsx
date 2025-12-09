import { NavLink } from "react-router-dom";

export function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col gap-10 items-center justify-center">
      <h1 className="font-baloo text-baloo-xl text-purple-dark">
        Ops! Essa página não existe.
      </h1>

      <NavLink to="/" className="bg-purple text-white p-4 rounded-md">
        Voltar com segurança
      </NavLink>
    </div>
  );
}
