import React from "react"; 
import BotonAccion from "../BotonAccion";

const evaluarCampo = ({ entidad, columna }) => {
    if (typeof entidad[columna] === "object") {
        return 'objeto';
    }
    return entidad[columna];
}

function Fila({ index, entidad, editarEntidad = () => {}, eliminarEntidad = () => {}, columnas = [] }) {
    return (
        <tr>
            <th scope="row">{index + 1}</th> 
            {columnas.map((columna, _index) => (
                <td key={`col-${columna}-${index}`}>{evaluarCampo({ entidad, columna })}</td> // Corrección aquí
            ))}
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <BotonAccion tipo="editar" onClick={() => editarEntidad(entidad)} index={index} />
                    <BotonAccion tipo="eliminar" onClick={(e) => eliminarEntidad(e, index)} />
                </div>
            </td>
        </tr>
    );
}

export default Fila;

