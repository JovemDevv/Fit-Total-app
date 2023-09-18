import { Link, Outlet } from "react-router-dom"
import { Box, Container, Grid, Stack } from "@mui/material"
import Logo from '/assets/logo.png'


function LayoutAuth(){
    return(
        <>
        <Grid container sx={{ 
            color: "grey",
            }}
        >
            <Grid item lg={8}>
            <Container 
                maxWidth="xl" 
                    sx={{ mt: 5, 
                    minHeight: "60vh", 
                    display: "flex", 
                    flexDirection:"column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Stack 
                    direction={"column"} 
                    alignItems={"flex-start"}
                     width={"100%"} 
                     height={"100%"}
                >
                    <Link to="/">
                        <Box component="img"
                            src={Logo}
                            alt='logo da FitTotal'
                            sx={{ 
                                marginTop:"-250px",
                                height: "40%",
                                width: "40%",
                                }}
                        >
                        </Box>
                    </Link>
                    
                </Stack>
                
                <Outlet />
            </ Container>
            </Grid>
            <Grid item lg={4}>
                <Box sx={{ 
                    backgroundImage:"url('/assets/SideBarLogin.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height:"110vh",
                    }}
                />
            </Grid>
        </Grid>
        </>
    )
}

export default LayoutAuth