import { Grid, Typography } from "@mui/material"
import CardExercises from "./../../components/CardExercicios"

const treinoHoje = [
    {
        id:1,
        title:"Peito",
        exercises: [
            {
                title: "Supino",
                rep:10,
                quant: 4,
            },
            {
                title: "Supino inclinado",
                rep:8,
                quant: 3,
            },
            {
                title: "Supino",
                rep:10,
                quant: 4,
            },
        ],
    },
    {
        id:2,
        title: "triceps",
        exercises: [
            {
                title: "paralelas",
                rep:10,
                quant:4,
            },
            {
                title: "paralelas",
                rep:10,
                quant:4,
            },
            {
                title: "paralelas",
                rep:10,
                quant:4,
            },
        ],
    },
]

function HomeStudent() {
    return (
        <>
            
            <Grid container spacing={2}>
            <Grid item sm={12}>
                <Typography variant="h3" color={"primary.main"} >
                    Treino de Hoje
                </Typography>
                </Grid>
                {treinoHoje.map((item) =>(
                    <Grid item sm={12} key={item.id}>
                    <Typography variant="h3" color={"secondary.light"}>
                        {item.title}
                    </Typography>
                    <Grid container spacing={2} mt={2}>
                        {item.exercises.map((data, index) => (
                        <Grid item sm={3}key={index}>
                            <CardExercises item ={data} />
                        </Grid>
                        ))}
                        
                    </Grid>
                </Grid>
            ))}
            </Grid>
        </>
    )
}
export default HomeStudent