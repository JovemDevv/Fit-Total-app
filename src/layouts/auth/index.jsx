import { Link, Outlet } from "react-router-dom";
import { Box, Container, Grid, Stack, useTheme, useMediaQuery } from "@mui/material";
import Logo from '/assets/logo.png'; 

function LayoutAuth() {
    const theme = useTheme();
    const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Grid container >
            <Grid item lg={8} md={12} xs={12}>
                <Container
                    maxWidth="xl"
                    sx={{
                        mt: 15,
                        minHeight: "80vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: isUpMd ? "center" : "flex-start",
                        justifyContent: "flex-start",
                    }}
                >
                    <Stack
                        direction={"column"}
                        alignItems={isUpMd ? "flex-start" : "center"}
                        width={isUpMd ? "50%" : "100%"}
                        height={"100%"}
                    >
                        <Link to="/">
                            <Box component="img"
                                src={Logo}
                                alt='logo da FitTotal'
                                sx={{
                                    height: 100,
                                    width: "auto"
                                }}
                            />
                        </Link>
                        <Outlet />
                    </Stack>
                </Container>
            </Grid>
            {isUpMd && (
                <Grid item lg={4}>
                    <Box sx={{
                        backgroundImage: "url('/assets/SideBarLogin.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "100vh",
                    }}
                    />
                </Grid>
            )}
        </Grid>
    );
}

export default LayoutAuth
