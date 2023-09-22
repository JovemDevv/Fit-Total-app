import { Grid } from "@mui/material"
import CardDays from "./../../components/CarDays"

const days = [
    {
        title: "segunda-feira",
        group: [
            {
                title: "Peito",
                exercises: [
                    {
                        id:1,
                        title: "Supino inclinado",
                        rep:8,
                        quant: 3,
                    },
                    {
                        title: "Supino",
                        rep:10,
                        quant: 4,
                    },
                    {
                        title: "Supino",
                        rep:10,
                        quant: 4,
                    },
                ],
            },
            {
                title: "Peito",
                exercises: [
                    {
                        id:1,
                        title: "Supino inclinado",
                        rep:8,
                        quant: 3,
                    },
                    {
                        title: "Supino",
                        rep:10,
                        quant: 4,
                    },
                    {
                        title: "Supino",
                        rep:10,
                        quant: 4,
                    },
                ],
            },
        ],
    },
    {
        title: "terça-feira",
        group: [
            {
                title: "Peito",
                exercises: [
                    {
                        id:1,
                        title: "Supino inclinado",
                        rep:8,
                        quant: 3,
                    },
                    {
                        title: "Supino",
                        rep:10,
                        quant: 4,
                    },
                    {
                        title: "Supino",
                        rep:10,
                        quant: 4,
                    },
                ],
            },
            
        ],
    },
    {
        title: "quarta-feira",
        group: [
            {
                title: "Peito",
                exercises: [
                    {
                        id:1,
                        title: "Supino inclinado",
                        rep:8,
                        quant: 3,
                    },
                    {
                        title: "Supino",
                        rep:10,
                        quant: 4,
                    },
                    {
                        title: "Supino",
                        rep:10,
                        quant: 4,
                    },
                ],
            },
            
        ],
    },
    {
        title: "quinta-feira",
        group: [
            {
                title: "Peito",
                exercises: [
                    {
                        id:1,
                        title: "Supino inclinado",
                        rep:8,
                        quant: 3,
                    },
                    {
                        title: "Supino",
                        rep:10,
                        quant: 4,
                    },
                    {
                        title: "Supino",
                        rep:10,
                        quant: 4,
                    },
                ],
            },
            
        ],
    },
    {
        title: "sexta-feira",
        group: [
            {
                title: "Peito",
                exercises: [
                    {
                        id:1,
                        title: "Supino inclinado",
                        rep:8,
                        quant: 3,
                    },
                    {
                        title: "Supino",
                        rep:10,
                        quant: 4,
                    },
                    {
                        title: "Supino",
                        rep:10,
                        quant: 4,
                    },
                ],
            },
            
        ],
    }
]


function MyExercises() {
    return (
        <>
        <Grid container spacing={2} mt={5}>
            {days.map((item, index) =>(
                <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
                <CardDays item={item} />
            </Grid>
            ))}
            
        </Grid>
        </>
    )
}  

export default MyExercises