import CardCategories from './../components/Card'
import { Grid, Typography } from '@mui/material'
import categorias from "../data/categories"


function Home() {
  
 
  return (
    <>
      
        <Typography variant='h1' color={"primary"}>Produtos FitTotal - Categorias
        </Typography>

        <Grid container spacing={2} mt={5}>
          
          {categorias.map((item, index) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
              <CardCategories item={item} /> 
            </Grid>
            ))}
          
        </Grid>
      
    </>
  )
}

export default Home
