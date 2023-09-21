import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import { Box, Button, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material"
import Logo from "/assets/logo.png"
import SendIcon from "@mui/icons-material/Send"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const navItems = ['inicio', 'Meu perfil', 'Meus exercícios']

function LayoutStudent() {
    const {logout} = useContext( AuthContext)

    return (
        <>
        <Grid container>
            <Grid item sm={2}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                <Box sx={{height: "100vh", width:"80%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"space-between"
             }}>

                    <Box>
                    <Box component="img"
                    src={Logo}
                    alt='logo da FitTotal'
                    sx={{ 
                        width:"90%", height: "auto",
                        marginTop:"50px"
                   }} />
                   
                <List sx={{ mt: 3 }}>
                    {navItems.map((item) => (
                        <ListItem key={item}>
                            <ListItemButton sx={{ textAlign: "left"}}>
                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    
                </List>
                    </Box>
                
                <Button onClick={logout} variant="contained"
                size="large"
                sx={{
                    color: "yellow",
                    "&:hover": {
                    backgroundColor: "grey",
                    },
                    
                 mb: 7, borderRadius: 10, minWidth:"50%" }}>
                    Sair
                </Button>
                
                </Box>
                <Divider orientation="vertical" flexItem />
                </Stack>
              
            </Grid>
            <Grid item sm={10}>
                    <Header />
                    <Divider />
                    <Container maxWidth={"xl"}>
                        <Outlet />
                    </Container>
            </Grid>
        </Grid>
        </>
    )
}

export default LayoutStudent