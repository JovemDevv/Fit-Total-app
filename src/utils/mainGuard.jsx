import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/auth"
import { useNavigate } from "react-router-dom"

function MainGuard({children}){

    const {signed} = useContext( AuthContext )
    const navigate = useNavigate()

    useEffect(()=> {
        if(!signed){
            navigate("/auth/login")// /student/home
        }
        
    }, [signed, navigate])
    return children
}

export default MainGuard