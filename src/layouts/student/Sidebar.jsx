
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import Logo from "/assets/logo.png"
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
    {title:'inicio', icon: <HomeWorkIcon />, src: "/student/home"},
    {title:'Meu perfil', icon: <AccountBoxIcon />, src: "/student/profile"},
    {title:'Meus exercícios', icon: <FitnessCenterIcon  />, src: "/student/exercises"}
    ]

function Sidebar(){

    const { logout } = useContext(AuthContext )
    const navigate = useNavigate()
    const location = useLocation()
    
    return(
        <Box sx={{height: "100%", width:"80%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"space-between"
    }}>
        <Box>
            <Link to="/student/home">
                    <Box component="img"
                    src={Logo}
                    alt='logo da FitTotal'
                    sx={{ 
                        width:"90%", height: "auto",
                        marginTop:"50px"
                   }} />
                 </Link>  
                <List sx={{ mt: 3 }}>
                    {navItems.map((item) => (
                        <ListItem key={item.src}>
                            <ListItemButton onClick={() => navigate(item.src)} sx={{ textAlign: "left", color: location.pathname === item.src ? "secondary.light" : ""}}>
                                <ListItemIcon sx={{color: location.pathname === item.src ? "secondary.light" : ""}}>
                                 {item.icon}  
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
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
                    
                 mb: 10, borderRadius: 10, minWidth:"50%" }}>
                    Sair
                </Button> 
            </Box>
            
    )

}

export default Sidebar