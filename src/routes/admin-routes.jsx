
import LayoutStudent from "../layouts/student"
import HomeAdmin from "../pages/admin/home"
import Exercicios from "../pages/student/exercicios"

import Profile from "../pages/student/profile"
import AdminGuard from "../utils/adminGuard"

const AdminRoutes = [
    {
        path: "/admin",
        element:(
            <AdminGuard>
                <LayoutStudent />
            </AdminGuard>
         ),   
        children: [
            {
                path: "home",
                element: <HomeAdmin />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "exercises",
                element: <Exercicios />
            },
        ],
    },
    
]

export default AdminRoutes
