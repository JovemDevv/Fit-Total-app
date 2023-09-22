import {  Container, Divider, Grid, Stack, useMediaQuery } from "@mui/material"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import Sidebar from "./../student/Sidebar"
import { useTheme } from "@emotion/react"
import SendIcon from "@mui/icons-material/Send"



function LayoutStudent() {
    const theme = useTheme()
    const isUpSm = useMediaQuery(theme.breakpoints.up("sm"))

    return (
        <>
        <Grid container>
            {isUpSm && (
            <Grid item lg={2} md={3} sm={4} xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"} height={"100%"} minHeight={"100vh"}>
                    <Sidebar />
                <Divider orientation="vertical" flexItem />
                </Stack>
            </Grid>
            )}
            <Grid item lg={10} md={9} sm={8} xs={12}>
                    <Header />
                    <Divider />
                    <Container maxWidth={"xl"}  sx={{mt:4 ,pd:5}}>
                        <Outlet />
                    </Container>
            </Grid>
        </Grid>
        </>
    )
}

export default LayoutStudent