import { createBrowserRouter } from "react-router-dom";
import Archive from "./pages/Archive";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Reserve from "./pages/Reserve";

export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Strona główna",
  },
  {
    path: "/kiedys-dostepne",
    element: <Archive />,
    name: "Kiedyś dostępne",
  },
  {
    path: "/zarezerwuj",
    element: <Reserve />,
    name: "Zamów liquid",
  },
  {
    path: "/koszyk",
    element: <Cart />,
    name: "Koszyk",
  },
];

export const router = createBrowserRouter(routes);
