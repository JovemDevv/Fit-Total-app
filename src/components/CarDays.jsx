import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Typography, Card, Stack, IconButton, Box } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import products from '../data/products';

function CardDays({ item }) {
  const productCount = products.filter((product) => product.category === item.title).length;


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
      <Box>
        <Typography variant={"h3"} color="secondary.main">
          {item.title}
        </Typography>
        <Stack direction={"row"}>
          {item.group.map((data,index)=>(
            <>
              <Typography variant={"h5"} color="secondary.main" key={index}>
              {data.title} 
            </Typography>
            {index + 1 !== item.group.length &&(
              <Typography variant={"h5"} color="secondary.main" key={index}>
                ,&nbsp;
              </Typography>
            )}
            </>
          ))}
          
        </Stack>
      </Box>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={{ height: '100%' }}
      >
        <Stack direction={'column'}>
          <Typography variant="h4" color={'secondary.light'}>
            {item.group.length} {item.group.length > 1 ? "exercícios" : "exercício"} 
          </Typography>
          <Typography variant="body2" color={'secondary.main'}>
            
          </Typography>
        </Stack>
        <Box sx={{
                    color: 'secondary.light',
                    height: '40px',
                    width: '40px',
                    backgroundColor: 'secondary.main',
                    borderRadius: 2,
                  }}>
        <IconButton>
                <HorizontalRuleIcon sx={{
                    color: 'primary.main',
                    
                    fontSize: 40,
                  }} />             
        </IconButton>
        </Box>
      </Stack>
    </Card>
  );
}

export default CardDays
