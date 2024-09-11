const listaConsultas = document.getElementById("lista-consultas")

let  consultas = [];
const url = "http://localhost:5000/consultas";

/* {
            mascotas: 0,
            veterinaria: 0, 
             :new Date(),
             FechaEdicion: new Date(), 
             hitoria:"", 
             diagnostico:""
            },
         */

            async function listarConsultas(){
                try {
                    const respuesta = await fetch(url);
                    const consultasDelServer = await respuesta.json();
                    if (Array.isArray(consultasDelServer)){
                        consultas = consultasDelServer;
                    }
                    if(consultas.length>0){
                        const htmlConsultas= consultas.map((consulta, index)=>
                            `<tr>
                            <th scope="row">${index}</th>
                            <td>${consulta.mascotas}</td>
                            <td>${consulta.veterinaria}</td>
                            <td>${consulta.diagnostico}</td>
                            <td>${consulta.fechaCreacion}</td>
                            <td>${consulta.FechaEdicion}</td>
                            <td>                 
                    <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-info editar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></svg></button>
                    
                  </div>
                </td>
              </tr>`
            )
            .join("");
            listaConsultas.innerHTML = htmlConsultas;
        }
    } catch (error) {
        throw error;
    }
}


listarConsultas();
