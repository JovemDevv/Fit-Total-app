import GoogleIcon from "@mui/icons-material/Google"
import { Button, Stack, TextField, Typography } from "@mui/material"
import { Formik } from "formik"
import { Link } from "react-router-dom"

function Login() {
    
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
            <Formik  initialValues={{email: "", password: "" }}  onSubmit={(values, { setSubmitting }) => {
                console.log(values)
            }}>
                {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3} width={"100%"}>
                        <TextField 
                            name="email"
                            id="email"
                            value={values.email} 
                            onChange={handleChange} 
                            fullWidth 
                            label="Email"
                        />
                        <TextField 
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange} 
                            fullWidth 
                            label="Senha"
                        />
                    </Stack>
                    <Stack direction={"column"}>
                    <Typography variant="h5" component={Link} to="/" sx={{textDecoration: "none"}}
                    >
                        Esqueci minha senha
                    </Typography>
                    <Button variant="contained" size="large" type="submit" sx={{
                            color: "yellow",
                            "&:hover": {
                            backgroundColor: "grey",
                            },
                        }}
                    >
                        Entrar
                    </Button>
                    </Stack>
                </form> 
            )}
            </Formik>
            
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