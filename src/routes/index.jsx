import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OpenRoutes from "./open-routes";
import StudantRoutes from "./student-routes";
import LojaRoutes from "./loja-routes";
import AdminRoutes from "./admin-routes";

function Routes(){

    const router = createBrowserRouter([
    ...StudantRoutes, 
    ...OpenRoutes,
    ...LojaRoutes,
    ...AdminRoutes,
    ])

    return <RouterProvider router={router} />
}

export default Routes