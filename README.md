async function enviarDatos(evento){
    evento.preventDefault();
    try {
        const datos = {
            tipo: tipo.value,
            nombre: nombre.value,
            dueno: dueno.value
        };
        
        let method = "POST";
        let urlEnvio = url;
        const accion = btnGuardar.innerHTML;
        if (accion === "Editar") {
            method = "PUT";
            mascotas[indice.value] = datos;
            urlEnvio = `${url}/${indice.value}`;
        }

        const respuesta = await fetch(urlEnvio, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
            mode: "cors",
        });

        if (respuesta.ok) {
            listarMascotas();
            resetModal();
        } else {
            console.error("Error en la respuesta del servidor: ", respuesta.status, respuesta.statusText);
        }
    } catch (error) {
        console.error("Error en la solicitud Fetch: ", error);  // Añadimos este log para mayor visibilidad
    }
}