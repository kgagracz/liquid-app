import { createBrowserRouter } from "react-router-dom";
import Archive from "./pages/Archive";
import Home from "./pages/Home";
import Reserve from "./pages/Reserve";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/kiedys-dostepne',
        element: <Archive />
    },
    {
        path: '/zarezerwuj', 
        element: <Reserve />
    },
]) 