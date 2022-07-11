export default function ListPeliculas ({ peliculas }){
    const peliculasComponents = peliculas.mp((pelicula,i)=>{
        <div key={1}>
        Nombre: {pelicula.nombre}.Añio:{pelicula.anioDeEstreno}
        </div>
    })
}