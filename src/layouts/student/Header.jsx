import { AppBar, Container, Toolbar, Box, TextField, InputAdornment, Button, Stack, useTheme, useMediaQuery, Autocomplete, Typography, Avatar } from '@mui/material'
import Logo from '/assets/mstile-150x150.png';
import SearchIcon from '@mui/icons-material/Search'
import { Link, createSearchParams, useNavigate } from "react-router-dom"
import products from "../../data/products"
import { useState } from 'react';

function Header() {
  const theme = useTheme()
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"))

  function handleSubmit() {
    navigate({
      pathname: "/products",
      search: createSearchParams({
        q: value,
      }).toString(),
    })
  }
  return (
    <AppBar position='static' elevation={1} sx={{ backgroundColor: "primary.main", height: "15vh", padding:0,   }}>
      <Container maxWidth={"xl"}>
        <Toolbar sx={{ 
            display:"flex", justifyContent:"space-between",
            alignItems:'flex-start',
            marginTop:'20px',mt:5
            }}
        >
          <Typography variant="h3" sx={{mt:2}} color={"secondary.main"}>
            Bem vindo (a) pessoa x!
          </Typography>
            <Button
                variant='contained'
                size={ isUpMd ? 'large' : "small"}
                
                sx={{ color: 'secondary.light', backgroundColor:'primary.dark', height:60, width: 250, justifyContent:"flex-start", fontWeight:"bolder"  }}
                startIcon={
                  <Avatar alt="Remy Sharp" src='/assets/avatar.jpeg' />
                } 
            >
                Pessoa X
            </Button>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header
