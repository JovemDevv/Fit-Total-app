import Home from "../pages/home"
import Products from "../pages/products"
import Layout from "../layouts/loja"
import ProductDetail from "../pages/product-detail"
import LayoutAuth from "../layouts/auth"
import Login from "../pages/auth/login"
import SignUp from "../pages/auth/signUp"
import ResetPassword from "../pages/auth/resetSenha"
import MainGuard from "../utils/mainGuard"

const OpenRoutes = [
    
    {
        path: "/auth",
        element: (
        <MainGuard>
            <LayoutAuth />
        </MainGuard>
        ),
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "resetpassword",
                element: <ResetPassword />,
            },
        ],
    },
    
]

export default OpenRoutes