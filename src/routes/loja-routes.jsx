import Home from "../pages/home"
import Products from "../pages/products"
import Layout from "../layouts/loja"
import ProductDetail from "../pages/product-detail"


const LojaRoutes = [
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

export default LojaRoutes