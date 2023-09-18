import { Outlet } from "react-router-dom"
import Header from "./Header"
import { Container, Divider } from "@mui/material"
import Footer from "./Footer"

function Layout(){
    return(
        <>
            <Header />
            <Divider />
            <Container maxWidth="xl" sx={{ mt: 5, minHeight: "80vh", display: "flex", flexDirection:"column" }}>
                <Outlet />
                <Footer />
            </ Container>
        </>
    )
}

export default Layout