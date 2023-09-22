
import LayoutStudent from "../layouts/student"
import Exercicios from "../pages/student/exercicios"
import HomeStudent from "../pages/student/home"
import Profile from "../pages/student/profile"
import AuthGuard from "../utils/guard"

const StudantRoutes = [
    {
        path: "/student",
        element:(
            <AuthGuard>
                <LayoutStudent />
            </AuthGuard>
         ),   
        children: [
            {
                path: "home",
                element: <HomeStudent />
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

export default StudantRoutes
