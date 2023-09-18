import { Stack, Typography } from "@mui/material"

function Footer() {
    return <Stack 
    direction={"row"} 
    justifyContent={"flex-start"}
    position={"sticky"}
    sx={{ mt: "auto", pt:2, pb:3}}
    >
            <Typography variant="h5">
            ©️ Feito por Ana Caroline 
            </Typography>
        </Stack>
    
}

export default Footer