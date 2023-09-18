import Home from "../pages/home"
import Products from "../pages/products"
import Layout from "../layouts"
import ProductDetail from "../pages/product-detail"

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
        ]
    },
    
]

export default routes