import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/auth"
import { useNavigate } from "react-router-dom"

function AuthGuard({children}){

    const {signed} = useContext( AuthContext )
    const navigate = useNavigate()

    useEffect(()=> {
        if(!signed){
            navigate("/home/student")
        }
        
    }, [signed, navigate])
    return children
}

export default AuthGuard