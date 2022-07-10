import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListPeliculas from "./ListPeliculas";



function Cargando() {
    return (
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  }

export default function Pelicula() {

    const params = useParams()
    const [pelicula, setPelicula] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3001/peliculas/${params.id}`)
        .then(response => response.json())
        .then(body => {

            setPelicula(body)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
        })
    }, []);

    if(loading) {
        return (
            <Cargando />
        )
    }

    return (
        <div>
            Esta es la pelicula {pelicula.nombre} {pelicula.apellido}
            <br />
            <ListPeliculas cursos={pelicula.anioDeEstreno}/>
            
        </div>
    )

}