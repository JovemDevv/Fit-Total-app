import { AppBar, Container, Toolbar, Box, Button, useTheme, useMediaQuery, Typography, Avatar, Drawer, IconButton } from '@mui/material'
import { useState } from 'react';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth =240

function Header() {
  const theme = useTheme()
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"))
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
    <AppBar position='static' elevation={1} sx={{ backgroundColor: "primary.main", height: "15vh", padding:0, 
      }}
      >
      <Container maxWidth={"xl"}>
        <Toolbar sx={{ 
            display:"flex", justifyContent:"space-between",
            alignItems:'flex-start',
            mt:2
            }}
        >
          {
            isUpSm ? (
              <Typography variant="h3"  color={"secondary.main"}>
              Bem vindo (a) pessoa x!
            </Typography>
            ) : <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
          }
         
            <Button
                variant='contained'
                size={ isUpSm ? 'large' : "small"}
                
                sx={{ color: 'secondary.light', backgroundColor:'primary.dark', height:60, width: isUpSm ? 300 : 150, justifyContent:"flex-start", fontWeight:"bolder"  }}
                startIcon={
                  <Avatar alt="Remy Sharp" src='/assets/avatar.jpeg' />
                } 
            >
                Pessoa X
            </Button>

        </Toolbar>
      </Container>
    </AppBar>
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        modalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          }
        }}
        >
          <Sidebar />
        </Drawer>
    </Box>
  </>
  );
}

export default Header
