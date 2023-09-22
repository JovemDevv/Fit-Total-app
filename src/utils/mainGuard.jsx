import { useContext } from "react"
import { AuthContext } from "../contexts/auth"
import { Navigate} from "react-router-dom"

function MainGuard({children}){

    const {signed, loading} = useContext( AuthContext )
    
    return !loading ? (
    !signed ? (
        <Navigate to={"/student/home"} />
     ) : (
        children
     )
    ) : undefined
}

export default MainGuard