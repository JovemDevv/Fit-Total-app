import GoogleIcon from "@mui/icons-material/Google"
import { Button, FormHelperText, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import { Formik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useContext, useState } from "react"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {AuthContext} from "../../contexts/auth"

function Login() {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()

    const { login, socialLogin, user, signed } = useContext(AuthContext)

    function handleVisible(){
        setVisible(!visible)
    }

    async function signInGoogle() {
       socialLogin()
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
            <Formik  
                initialValues={{email: "", password: "" }} 
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('E-mail inválido').required('O E-mail é obrigatório'),
                    password: Yup.string().required('A senha é obrigatória'),
                  })}
                onSubmit={async (values, { setSubmitting }) => {
                 try {
    const res = await login(values.email, values.password);
    if(res.user.email === "admin@gmail.com"){
        navigate("/admin/home");
    }
    if (res instanceof Error) {
        // Trate o erro de login aqui, por exemplo, exibindo uma mensagem de erro para o usuário.
        console.log("Erro de login:", res.message);
    } else {
        // O login foi bem-sucedido, redirecione o usuário.
        navigate("/student/home");
    }
} catch (error) {
    console.log(error);
}

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
                <form noValidate onSubmit={handleSubmit} style={{width:"100%"}}>
                    <Stack spacing={3} width={"100%"}>
                        <TextField 
                            name="email"
                            id="email"
                            type="email"
                            value={values.email} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            fullWidth 
                            label="Email"
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error>
                                {errors.email}
                            </FormHelperText>
                        )}
                        <TextField 
                            name="password"
                            id="password"
                            type={visible ? "text" : "password"}
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            fullWidth 
                            label="Senha"
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleVisible}>
                                        {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                        />
                        {touched.password && errors.password && (
                            <FormHelperText error>
                                {errors.password}
                            </FormHelperText>
                        )}
                    </Stack>
                    <Stack direction={"column"} spacing={2} mt={2}>
                    <Typography 
                    variant="h5" 
                    component={Link} 
                    to="/auth/resetpassword" 
                    sx={{textDecoration: "none"}}
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
                onClick={signInGoogle}
                startIcon={<GoogleIcon sx={{ color: "yellow" }} />}
            >
                Continue com google
            </Button>
            <Typography variant ="h5" component={Link}
            to="/auth/signup" sx={{textDecoration: "none"}}
            >
                Clique aqui para fazer o seu cadastro
            </Typography>

        </Stack>
    )
}

export default Login

