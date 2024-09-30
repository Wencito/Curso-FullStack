import React from "react";

function Input ({
    tipo = "text",
    nombreCampo,
    onInut = () => {},
    placeholder,
    value = "",
    }){
    return (
        <input 
            type={tipo} 
            name={nombreCampo}
            className="form-control" 
            placeholder={placeholder}
            onInput={onInut}
            defaultValue={value}
        />
    );
}

export default Input;