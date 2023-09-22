
import { Typography, Card, Stack, Box, IconButton } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useNavigate } from 'react-router-dom';
import products from '../data/products';

function CardExercises({ item }) {
  const productCount = products.filter((product) => product.category === item.title).length;

  const navigate = useNavigate();


  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: 'primary.main',
        height: '200px',
        p: 4,
        mt:2,
        borderRadius: 3,
      }}
    >
      
        <Stack
          direction={"column"}
          alignItems={"space-between"}
          height={"100%"} 
        >
          <Box>
            <Typography variant={"h3"} color="secondary.main">
              {item.title}
            </Typography>
            <Stack direction={"row"}>
              <Typography variant={"h5"} color="secondary.main">
                item
              </Typography>
            </Stack>
          </Box>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ height: "100%"}}>
              <Stack direction={"column"}>
              <HorizontalRuleIcon sx={{
                    color: 'secondary.light',
                    rotate: "90deg",
                    fontSize: 40,
                  }} /> 
              
              </Stack>   
            </Stack>
      </Stack>
    </Card>
  );
}

export default CardExercises
