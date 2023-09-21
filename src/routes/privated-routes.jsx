
import LayoutStudent from "../layouts/student"
import AuthGuard from "../utils/guard"

const PrivatedRoutes = [
    {
        path: "/home/student",
        element:(
            <AuthGuard>
                <LayoutStudent />
            </AuthGuard>
         ),   
            
    },
    
]

export default PrivatedRoutes
