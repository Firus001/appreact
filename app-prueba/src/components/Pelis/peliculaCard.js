import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';


export default function PeliculaCard({id, nombre, anioDeEstreno}) {


    return (
        <Grid item xs={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {nombre}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {anioDeEstreno}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button LinkComponent={Link} to={`/peliculas/${id}`} size="small">Ir a la Pelicula</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
