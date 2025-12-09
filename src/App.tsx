import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { CartContextProvider } from "./context/BagContext";

export function App() {
  return (
    <BrowserRouter basename="/coffee">
      <CartContextProvider>
        <AppRoutes />
      </CartContextProvider>
    </BrowserRouter>
  );
}
