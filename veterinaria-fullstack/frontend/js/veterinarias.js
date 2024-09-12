const listaVeterinarias = document.getElementById("lista-veterinarias");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const documento = document.getElementById("documento");
const form = document.getElementById("form");
const indice = document.getElementById("indice");
const btnguardar = document.getElementById("btn-guardar");
const url = "http://localhost:5000/veterinarias";

let veterinarias = [];

async function listarVeterinarias () {
    try {
        const respuesta = await fetch(url);
        const veterinariasDelServer = await respuesta.json();
        if(Array.isArray(veterinariasDelServer)){
            veterinarias = veterinariasDelServer;
        }
        if(veterinarias.length > 0){
            const htmlVeterinarias = veterinarias.map((veterinaria, index)=> 
            `<tr>
                <th scope="row">${index}</th>
                <td>${veterinaria.documento}</td>
                <td>${veterinaria.nombre}</td>
                <td>${veterinaria.apellido}</td>
                <td>
                  <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-info editar" data-toggle="modal" data-target="#exampleModalCenter"><i class="bi bi-pencil-square"></i></button>
                      <button type="button" class="btn btn-danger eliminar"><i class="bi bi-trash"></i></button>
                  </div>
                </td>
            </tr>`).join("");
           
            listaVeterinarias.innerHTML = htmlVeterinarias;
            Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick = editar(index));
            Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=>botonEliminar.onclick = eliminar(index));
        return;
        }
        listaVeterinarias.innerHTML = `<tr>
                <td class="TabNo" colspan="5">No hay veterinarias</td>
            </tr>`;
    } catch (error) {
        console.log({error});
        $(".alert").show();
    }
    
};

async function enviarDatos(evento){
    evento.preventDefault();
    try {
        const datos = {
            nombre: nombre.value,
            apellido: apellido.value,
            documento: documento.value
        };
        let method = "POST";
        let urlEnvio = url;
        const accion = btnguardar.innerHTML;
        if(accion === 'Editar') {
                //Editar
                method = "PUT";
                veterinarias[indice.value] = datos;
                urlEnvio = `${url}/${indice.value}`;
        };
        const respuesta = await fetch(urlEnvio, /*Toma las url y carga los datos de esa url */ {
            method, 
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        });
        if(respuesta.ok){
            listarVeterinarias();
            resetModal();
        };
    } catch (error) {
        console.log({error});
        $(".alert").show();
    }
    
};

function editar(index) {
    return function cuandoCliqueo(){
       btnguardar.innerHTML = 'Editar';
       $('#exampleModalCenter').modal('toggle')
       const veterinaria = veterinarias[index];
       nombre.value = veterinaria.nombre;
       apellido.value = veterinaria.apellido;
       documento.value = veterinaria.documento;
       indice.value = index;
    }
};

function resetModal (){
    nombre.value = '';
    apellido.value = '';
    documento.value = '';
    indice.value = '';
    btnguardar.innerHTML = 'Crear';
}

function eliminar(index){
    const urlEnvio = `${url}/${index}`
    return async function clickEliminar(){
        try {
            const respuesta = await fetch(urlEnvio, {
                method: "DELETE", 
            });
            if(respuesta.ok){
                listarVeterinarias();
                resetModal();
            };
        } catch (error) {
            console.log({error});
            $(".alert").show();
        }
    };
};

listarVeterinarias();

form.onsubmit=enviarDatos;
btnguardar.onclick = enviarDatos;