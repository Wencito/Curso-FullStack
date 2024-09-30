import React from "react";
import classNames from "classnames";
import 'bootstrap-icons/font/bootstrap-icons.css';

function BotonAccion({ tipo, onClick = () => {}, index = "" }) {
  return (
    <button
      type="button"
      className={classNames("btn", {
        "btn-info": tipo === "editar",
        "btn-danger": tipo === "eliminar",
      })}
      onClick={(e) => onClick(e, index)}
      data-index={index}
    >
      {tipo === "editar" && <i className="bi bi-pencil-square"></i>}
      {tipo === "eliminar" && <i className="bi bi-trash"></i>}
      
    </button>
  );
}

export default BotonAccion;
