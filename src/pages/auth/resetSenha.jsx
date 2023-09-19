
import { Button, FormHelperText, Stack, TextField, Typography } from "@mui/material"
import { sendPasswordResetEmail } from "firebase/auth"
import { Formik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from 'yup'
import { auth } from "../../config/firebase"



function ResetPassword() {
    const authRef = auth
    return (
        <Stack
            direction={"column"}
            spacing={2}
            width={"100%"}
            alignItems={"center"}
            mt={4}
        >
            <Typography variant ="h2" color="primary.main">
                Resetar senha
            </Typography>
            <Typography variant="h5" color="primary.main">
                Digite seu email no campo abaixo que vamos te enviar instruções para você resetar sua senha
            </Typography>
            <Formik  
                initialValues={{email: "" }} 
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('E-mail inválido').required('O E-mail é obrigatório'),
                  })}
                onSubmit={ async (values, { setSubmitting }) => {
                    try{
                        const res = sendPasswordResetEmail(authRef, values.email)
                        console.log(res)
                    } catch (error) {
                        console.log(error)
                    }
                   
                }}
               >
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
                        
                    </Stack>
                    <Stack direction={"column"} spacing={2} mt={2}>
                    
                    <Button variant="contained" size="large" type="submit" sx={{
                            color: "yellow",
                            "&:hover": {
                            backgroundColor: "grey",
                            },
                        }}
                    >
                        Enviar
                    </Button>
                    </Stack>
                </form> 
            )}
            </Formik>
           
            <Typography variant ="h5" component={Link}
            to="/auth/login" sx={{textDecoration: "none"}}
            >
                Voltar para login
            </Typography>
        </Stack>
    )
}

export default ResetPassword