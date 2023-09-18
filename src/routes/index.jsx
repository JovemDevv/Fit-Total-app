import Home from "../pages/home"
import Products from "../pages/products"
import Layout from "../layouts/loja"
import ProductDetail from "../pages/product-detail"
import LayoutAuth from "../layouts/auth"
import Login from "../pages/auth/login"

const routes = [
    {
        path: "/",
        element:<Layout />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/products/:categories",
                element: <Products />
            },
            {
                path: "/product-detail/:id",
                element: <ProductDetail />
            },
            {
                path: "/auth",
                element: <LayoutAuth />,
                children: [
                    {
                        path: "login",
                        element: <Login />,
                    }
                ]
            },

        ]
    },
    
]

export default routes