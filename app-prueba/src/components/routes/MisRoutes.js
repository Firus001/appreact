import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/Homee.js";
import LoginPage from "../Login/Login";
import Navbar from "../NavBar/Navbar";

export default function MisRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Navbar />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}