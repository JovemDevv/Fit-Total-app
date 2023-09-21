import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OpenRoutes from "./open-routes";
import PrivatedRoutes from "./privated-routes";
import LojaRoutes from "./loja-routes";

function Routes(){

    const router = createBrowserRouter([...PrivatedRoutes, ...OpenRoutes, ...LojaRoutes,])

    return <RouterProvider router={router} />
}

export default Routes