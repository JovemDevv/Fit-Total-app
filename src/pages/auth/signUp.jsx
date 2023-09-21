import GoogleIcon from "@mui/icons-material/Google"
import { Button, FormControlLabel, FormHelperText, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import { Formik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from 'yup'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useContext, useState } from "react"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Checkbox } from "@mui/material"
import {  signInWithPopup,  } from "firebase/auth"
import { auth } from "../../config/firebase"
import { AuthContext } from "../../contexts/auth"

function SignUp() {

    const [visible, setVisible] = useState(false)

    const {signUp} = useContext(AuthContext)

    function handleVisible(){
        setVisible(!visible)
    }

    async function signInGoogle() {
        try{
            const res = await signInWithPopup(auth,provider)
            console.log(res)
        } catch (error) {
            console.log(error)
        }    
    }

    return (
        <Stack
            direction={"column"}
            spacing={2}
            width={"100%"}
            alignItems={"center"}
            mt={4}
        >
            <Typography variant ="h2" color="primary.main">
                Cadastre-se
            </Typography>
            <Typography variant="h5" color="primary.main">
                Entre para FitTotal
            </Typography>
            <Formik  
                initialValues={{email: "", password: "", passwordConfirmation: "", checkbox: false }} 
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('E-mail inválido')
                        .required('O E-mail é obrigatório'),
                    password: Yup.string()
                        .matches(/^(?=.*?[A-Z])(?=.*[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/, "A senha deve ter pelo menos uma letra maiúscula,minúscula e números"
                        )
                        .min(8, "A senha deve ter pelo menos 8 carácteres")
                        .required('A senha é obrigatória'
                        ),
                    passwordConfirmation: Yup.string()
                        .oneOf([Yup.ref("password"), null], "As senhas não conferem")
                        .required("A senha dé obrigatória"),
                    checkbox: Yup.boolean()
                        .oneOf([true], "Você deve concordar com os termos de uso e política de privacidade")
                  })}
                onSubmit={async(values, { setSubmitting }) => {
                  signUp(values.email, values.password)  
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
                    <Stack spacing={2} width={"100%"}>
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

                        <TextField 
                            name="passwordConfirmation"
                            id={"password"}
                            type={visible ? "text" : "password"}
                            value={values.passwordConfirmation}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            fullWidth 
                            label="Digite novamente a senha"
                           
                        />
                        {touched.passwordConfirmation && errors.passwordConfirmation && (
                            <FormHelperText error>
                                {errors.passwordConfirmation}
                            </FormHelperText>
                        )}
                    </Stack>
                    <Stack direction={"column"} spacing={2} mt={2}>
                            <FormControlLabel 
                            control={<Checkbox
                                        name="checkbox"
                                        color="primary"
                                        checked={values.checkbox}
                                        onChange={handleChange}
                                    />}
                            label="Eu concordo com os termos de uso e politica de privacidade"
                            />
                        {touched.checkbox && errors.checkbox && (
                            <FormHelperText error>
                                {errors.checkbox}
                            </FormHelperText>
                        )}
                    <Button 
                    variant="contained" 
                    size="large" 
                    type="submit"
                    disabled={Object.keys(errors).length !== 0}
                    sx={{
                        color: "yellow",
                        "&:hover": {
                        backgroundColor: "grey",
                        },
                        }}
                    >
                        Cadastrar
                    </Button>
                    </Stack>
                </form> 
            )}
            </Formik>
            <Typography 
                    variant="h6" 
                    component={Link} 
                    to="/" 
                    sx={{textDecoration: "none"}}
                    >
                        ou inscreva-se com sua conta google
                    </Typography>
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
            <Typography
             variant ="h5" 
             component={Link}
            to="/auth/login" sx={{textDecoration: "none"}}
            >
                Já tem conta? Clique aqui
            </Typography>
        </Stack>
    )
}


export default SignUp