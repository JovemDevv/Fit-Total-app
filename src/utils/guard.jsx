
import { useContext} from "react"
import { AuthContext } from "../contexts/auth"
import { Navigate } from "react-router-dom"

function AuthGuard({children}){
    
    const {signed, loading, user} = useContext( AuthContext )
    
    return !loading ? (
    !signed ? (
        <Navigate to={"/auth/login"} />
     ) : UserActivation.email === "admin@gmail.com" ? (<Navigate to={"/admin/home"} />
     ) : (
        children
     )
    ) : undefined
}

export default AuthGuard