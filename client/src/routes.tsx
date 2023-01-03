import { createBrowserRouter } from "react-router-dom";
import Archive from "./pages/Archive";
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
];

export const router = createBrowserRouter(routes);
