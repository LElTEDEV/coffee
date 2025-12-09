import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { CartContextProvider } from "./context/BagContext";

export function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <AppRoutes />
      </CartContextProvider>
    </BrowserRouter>
  );
}
