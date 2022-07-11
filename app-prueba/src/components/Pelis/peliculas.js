import { Card, CardActions, CardContent, Grid, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import PeliculaCard from "../Pelis/peliculaCard"

function Variantes() {
    return (
        <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Skeleton variant="rectangular" width={210} height={10} />
                    <br />
                    <Skeleton variant="rectangular" width={210} height={10} />
                    <br />
                    <Skeleton variant="rectangular" width={100} height={5} />
                    <br />
                    <Skeleton variant="rectangular" width={100} height={5} />
                    <br />
                    <Skeleton variant="rectangular" width={100} height={5} />

                </CardContent>
                <CardActions>
                    <Skeleton variant="rectangular" width={50} height={2} />
                </CardActions>
            </Card>
        </Grid>
        
    );
}

export default function Peliculas() {

    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/peliculas")
            .then(response => response.json())
            .then(body => {

                setPeliculas(body)
                setLoading(false)
console.log(peliculas)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    const peliculasComponents = peliculas.map((peliculas, i) => {
        return <PeliculaCard key={peliculas._id} id={peliculas._id} nombre={peliculas.nombre} anioDeEstreno={peliculas.anioDeEstreno} elenco={peliculas.elenco} comentarios={peliculas.comentarios} />
    })

    const peliculasSkeleton = new Array(20).fill(<Variantes />)
    

    return (
        <Grid container spacing={2}>
            {loading ? peliculasSkeleton : peliculasComponents}
        </Grid>
    )

}