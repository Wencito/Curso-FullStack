import React from "react"; 
import Encabezado from "./Encabezado";
import Fila from "./Fila"; 
import "./Tabla.css"

function Tabla({
    entidades = [],
    editarEntidad = () => {},
    eliminarEntidad = () => {},
    columnas = [],
}) 
{

    return (  
        <table className="table table-hover"> 
            <Encabezado columnas={columnas}/>
            <tbody id="lista-mascotas">
                {entidades.map((entidad, index) => (
                    <Fila
                     key={`fila-${index}`}
                      index={index}
                       entidad={entidad}
                       editarEntidad = {editarEntidad}
                       eliminarEntidad = { eliminarEntidad }
                       columnas={columnas}
                        />
                ))}
            </tbody> 
        </table> 
    ); 
} 

export default Tabla;


