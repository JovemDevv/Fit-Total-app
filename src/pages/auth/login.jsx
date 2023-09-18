import GoogleIcon from "@mui/icons-material/Google"
import { Button, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit() {
        console.log(email, password)
    }

    return (
        <Stack
            direction={"column"}
            spacing={3}
            width={"100%"}
            alignItems={"center"}
            mt={4}
        >
            <Typography variant ="h2" color="primary.main">
                Entrar no sistema
            </Typography>
            <Typography variant="h5" color="primary.main">
                Bem vindo ao nosso sistema!
            </Typography>
            <Stack spacing={3} width={"100%"}>
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} fullWidth label="Email" />
                <TextField value={password}
                onChange={(e) => setPassword(e.target.value)} fullWidth label="Senha" />
            </Stack>
            <Typography variant="h5" component={Link} to="/" sx={{textDecoration: "none"}}
            >
                Esqueci minha senha
            </Typography>
            <Button variant="contained" size="large" onClick={handleSubmit} sx={{
                    color: "yellow",
                    "&:hover": {
                    backgroundColor: "grey",
                    },
                }}>
                Entrar
            </Button>
            <Button variant="contained"
                sx={{
                    color: "yellow",
                    "&:hover": {
                    backgroundColor: "grey",
                    },
                }}
                
                startIcon={<GoogleIcon sx={{ color: "yellow" }} />}
            >
                Continue com google
            </Button>
            <Typography variant ="h5" component={Link}
            to="/" sx={{textDecoration: "none"}}
            >
                Clique aqui para fazer o seu cadastro
            </Typography>
        </Stack>
    )
}

export default Login