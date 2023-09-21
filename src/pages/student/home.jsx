import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import { Button } from "@mui/material"

function HomeStudent() {
    const {logout} = useContext( AuthContext)

    return (
        <>
        <p>Home do aluno</p>
        <Button onClick={logout} variant="contained"
                sx={{
                    color: "yellow",
                    "&:hover": {
                    backgroundColor: "grey",
                    },
                }}>
            Sair do sistema
        </Button>
        </>
    )
}

export default HomeStudent