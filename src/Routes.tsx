import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Success } from "./pages/Success";
import { CheckOut } from "./pages/Checkout";
import { NotFound } from "./pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/check-out" element={<CheckOut />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
