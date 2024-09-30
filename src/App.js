import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Pagina from "./Pagina";

function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route
                     path="/" element={<Pagina titulo="Mascotas" entidad="mascotas" />} />
                    <Route path="/veterinarias" element={<Pagina titulo="Veterinarios" entidad="veterinarias" />} />
                    <Route path="/duenos" element={<Pagina titulo="Dueños" entidad="duenos" />} />
                    <Route path="/consultas" element={<Pagina titulo="Consultas" entidad="consultas" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
