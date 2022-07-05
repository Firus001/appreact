import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";

export default function MisRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Navbar />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}