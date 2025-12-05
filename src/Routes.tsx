import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
