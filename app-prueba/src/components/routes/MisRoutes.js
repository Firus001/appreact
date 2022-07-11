import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/Homee.js";
import LoginPage from "../Login/Login";
import Navbar from "../NavBar/Navbar";
import Peliculas from "../Pelis/peliculas.js";
import Pelicula from "../Pelis/peliscula.js";

export default function MisRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/login' element={<LoginPage />} />
                <Route element={<Navbar />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/peliculas' element={<Peliculas/>}/>
                    <Route path='/peliculas/:id' element={<Pelicula />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}