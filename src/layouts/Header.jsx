import { AppBar, Container, Toolbar, Box, TextField, InputAdornment, Button, Stack, useTheme, useMediaQuery, Autocomplete } from '@mui/material'
import Logo from '/public/assets/mstile-150x150.png';
import SearchIcon from '@mui/icons-material/Search'
import { Link, createSearchParams, useNavigate } from "react-router-dom"
import products from "./../data/products"
import { useState } from 'react';

function Header() {
  const theme = useTheme()
  const [value, setValue] = useState("")
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"))
  const navigate = useNavigate()

  function handleSubmit() {
    navigate({
      pathname: "/products",
      search: createSearchParams({
        q: value,
      }).toString(),
    })
  }
  return (
    <AppBar position='static' elevation={1} sx={{ backgroundColor: "primary.main", height: "15vh", padding:0,  }}>
      <Container maxWidth={"xl"}>
        <Toolbar sx={{ 
            display:"flex", justifyContent:"space-between",
            alignItems:'flex-start',
            marginTop:'20px'
            }}
        >
          <Link to={"/"}>
            <Box component="img"
              src={Logo}
              alt='logo da FitTotal'
              sx={{ 
                  marginTop: "-90px" ,
                  marginLeft: "-90px" }}>
            </Box>
          </Link>
          { isUpMd && (
            <Stack direction={"row"} spacing={2} width={600} height={55}>
              
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              fullWidth
              onChange={(event, newValue)=> {
                setValue(newValue)
              }}
              onInputChange={(event, newInputValue) => {
                setValue(newInputValue)
              }}
              options={products.map((option) => option.title)}
              renderInput={(params) => (
              <TextField
              {...params}
              fullWidth
              id="input-search"
              placeholder='Pesquisar produto'
              sx={{ 
                backgroundColor:"#73777b", 
                borderRadius: "10px",
            }}
            
            InputProps={{
              ...params.InputProps,
              type: 'search',
              startAdornment: (
                <InputAdornment position='start' sx={{ color: 'primary.light' }}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
              
              variant='outlined'
              />
              )}
            />
            <Button variant='contained'
            onClick={handleSubmit} 
            sx={{ 
                fontWeight:"bolder",
                width:"150px",
                color: 'primary.light',
                backgroundColor:'secondary.light' }}>
                  Pesquisar
            </Button>
            </Stack>
          ) }
          
          
            <Button
                variant='contained'
                size={ isUpMd ? 'large' : "small"}
                
                sx={{ color: 'secondary.light', backgroundColor:'primary.dark', height:50, fontWeight:"bolder"  }}>
                Entrar no sistema
            </Button>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header
