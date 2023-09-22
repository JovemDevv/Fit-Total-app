

import { useContext} from "react"
import { AuthContext } from "../contexts/auth"
import { Navigate } from "react-router-dom"

function AdminGuard({children}){
    
    const {signed, loading} = useContext( AuthContext )
    
    return !loading ? (
    signed ? (
        <Navigate to={"/auth/login"} />
     ) : (
    user.email === 'admin@gmail.com' ? children : <Navigate to={"/studant/home"} />
     )
    ) : undefined
}

export default AdminGuard