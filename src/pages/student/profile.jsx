
import {  Box, Grid, InputLabel, Stack, TextField, FormHelperText, Button, Avatar, FormLabel } from "@mui/material"
import { Formik } from "formik"
import * as Yup from 'yup'
import { PatternFormat } from 'react-number-format'

function Profile() {
    
    return (
        <>
        <Grid container>
        <Box sx={{width:"80%"}}>
        <Formik  
                initialValues={{
                    name:"",
                    lastname: "",
                    email: "",
                    phone: "",
                    cpf:"",
                    city:"",
                    cep: "", 
                    street: "",
                    neighborhood: "",
                    number:"",
                    complement:"",}} 
                validationSchema={Yup.object().shape({
                    name: Yup.string().required('Este campo é obrigatório preencher'),
                    lastname: Yup.string().required('Este campo é obrigatório preencher'),
                    email: Yup.string().required('Este campo é obrigatório preencher'),
                    phone: Yup.string().required('Este campo é obrigatório preencher'),
                    cpf: Yup.string().required('Este campo é obrigatório preencher'),
                    city: Yup.string().required('Este campo é obrigatório preencher'),
                    cep: Yup.string().required('Este campo é obrigatório preencher'),
                    street: Yup.string().required('Este campo é obrigatório preencher'),
                    neighborhood: Yup.string().required('Este campo é obrigatório preencher'),
                    number: Yup.string().required('Este campo é obrigatório preencher'),
                    
                  })}
                onSubmit={async (values, { setSubmitting }) => {
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
                <form noValidate onSubmit={handleSubmit} style={{width:"100%"}}
                >
                    <Grid container spacing={2}>
                    <Grid item lg={12} mb={4}>
                        <Stack alignItems={"flex-start"}>
                        <FormLabel htmlFor="photo" sx={{ cursor: "pointer", overflow: "hidden", borderRadius:"50%"}}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{height: 120, width: 120 }} />
                        </FormLabel>
                        <TextField type="file" name="photo" id="photo" sx={{ display: "none" }} /> 
                        </Stack>
                        
                        </Grid>
                        <Grid item lg={5}>
                        <Stack spacing={2}>
                            <InputLabel htmlFor="name">Nome</InputLabel>
                                <TextField 
                                name="name"
                                id="name"
                                type="text"
                                value={values.name} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                
                                fullWidth 
                                
                            />
                            {touched.name && errors.name && (
                                <FormHelperText error>
                                    {errors.name}
                                </FormHelperText>
                            )}
                            </Stack>
                        </Grid>
                        <Grid item lg={5}>
                        <Stack spacing={2}>
                        <InputLabel htmlFor="last name">Sobrenome</InputLabel>
                                <TextField 
                                name="lastname"
                                id="lastname"
                                type="text"
                                value={values.lastname} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                fullWidth 
                                
                            />
                            {touched.lastname && errors.lastname && (
                                <FormHelperText error>
                                    {errors.lastname}
                                </FormHelperText>
                            )}
                            </Stack>
                        </Grid>
                        <Grid item lg={5}>
                        <Stack spacing={2}>
                        <InputLabel htmlFor="email">E-mail</InputLabel>
                                <TextField 
                                name="email"
                                id="email"
                                type="email"
                                value={values.email} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                fullWidth 
                                
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error>
                                    {errors.email}
                                </FormHelperText>
                            )}
                            </Stack>
                        </Grid >
                        <Grid item lg={5}>
                        <Stack spacing={2}>
                        <InputLabel htmlFor="phone">Telefone</InputLabel>
                        <PatternFormat format="(##) # ####-####" allowEmptyFormatting mask="_" 
                                name="phone"
                                id="phone"
                                type="text"
                                value={values.phone} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                customInput={TextField}
                                fullWidth  />
                                
                            {touched.phone && errors.phone && (
                                <FormHelperText error>
                                    {errors.phone}
                                </FormHelperText>
                            )}
                            </Stack>
                        </Grid>
                        <Grid item lg={5}>
                        <Stack spacing={2}>
                        <InputLabel htmlFor="cpf">CPF</InputLabel>
                        <PatternFormat format="###.###.###-##" allowEmptyFormatting mask="_" name="cpf"
                                id="cpf"
                                type="text"
                                value={values.cpf} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                customInput={TextField}
                                fullWidth 
                               
                            /> 
                                
                            {touched.cpf && errors.cpf && (
                                <FormHelperText error>
                                    {errors.cpf}
                                </FormHelperText>
                            )}
                            </Stack>
                        </Grid>
                        <Grid item lg={5}>
                        <Stack spacing={2}>
                        <InputLabel htmlFor="city">Cidade</InputLabel>
                                <TextField 
                                name="city"
                                id="city"
                                type="text"
                                value={values.city} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                fullWidth 
                               
                            />
                            {touched.city && errors.city && (
                                <FormHelperText error>
                                    {errors.city}
                                </FormHelperText>
                            )}
                            </Stack>
                        </Grid>
                        <Grid item lg={5}>
                        <Stack spacing={2}>
                            <InputLabel htmlFor="cep">CEP</InputLabel>
                            <PatternFormat format="#####-###" allowEmptyFormatting mask="_" name="cep"
                                id="cep"
                                type="text"
                                value={values.cep} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                customInput={TextField} 
                                fullWidth
                                 
                               
                            />
                            {touched.cep && errors.cep && (
                                <FormHelperText error>
                                    {errors.cep}
                                </FormHelperText>
                            )}
                            </Stack>
                        </Grid>
                        <Grid item lg={5}>
                        <Stack spacing={2}>
                        <InputLabel htmlFor="street">Rua</InputLabel>
                                <TextField 
                                name="street"
                                id="street"
                                type="text"
                                value={values.street} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                fullWidth 
                                
                            />
                            {touched.street && errors.street && (
                                <FormHelperText error>
                                    {errors.street}
                                </FormHelperText>
                            )}
                            </Stack>
                        </Grid>
                        <Grid item lg={5}>
                        <Stack spacing={2}>
                        <InputLabel htmlFor="neighborhood">Bairro</InputLabel>
                                <TextField 
                                name="neighborhood"
                                id="neighborhood"
                                type="text"
                                value={values.neighborhood} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                fullWidth 
                                
                            />
                            {touched.neighborhood && errors.neighborhood && (
                                <FormHelperText error>
                                    {errors.neighborhood}
                                </FormHelperText >
                            )}
                            </Stack>
                        </Grid>
                        <Grid item lg={5}>
                        <Stack spacing={2}>
                        <InputLabel htmlFor="number">Número</InputLabel>
                                <TextField 
                                name="number"
                                id="number"
                                type="text"
                                value={values.number} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                fullWidth 
                            />
                            {touched.number && errors.number && (
                                <FormHelperText error>
                                    {errors.number}
                                </FormHelperText>
                            )}
                            </Stack>
                        </Grid>
                        <Grid item lg={12}>
                            <Stack width={"100%"} alignItems={"center"}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{mt:2, width:200 }}
                                type="submit" 
                            >
                                Enviar
                            </Button>   
                            </Stack> 
                        </Grid>
                    </Grid>
                </form>
        
        )}
        </Formik>
        </Box>
       
    </Grid>
       
    </>
    )
}

export default Profile