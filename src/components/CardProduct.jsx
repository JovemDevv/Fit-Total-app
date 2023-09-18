import * as React from "react"
import Card from "@mui/material/Card"

import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"
import { Stack } from "@mui/material"

function CardProduct({item}) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/product-detail/${item.id}`)
    }

    return (
        <Card 
        sx={{ 
            minHeight: 400,
            backgroundColor: "secondary.main",
             }}>
            <CardMedia
                sx={{ height:160 }}
                image={item.image}
                title="proteins photo" 
            />
            <CardContent sx={{ display:"flex",
            flexDirection:"column",
            minHeight:240,
            justifyContent: "space-between"
            }}>
                <Stack >
                    <Typography gutterBottom variant="h4" component="div" color="primary">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="primary">
                        {item.description}
                    </Typography>
                </Stack>
                
                <Typography gutterBottom variant="h4" component="div" color="primary">
                   R$ {item.price}
                </Typography>
                <Button onClick={handleClick} variant="contained" size="small">
                    Ver produto
                </Button>
            </CardContent>
        </Card>
    )
}

export default CardProduct