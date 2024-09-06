const listaMascotas = document.getElementById('lista-Mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar')




let mascotas = [
    {
        tipo: "Gato",
        nombre: "Oreo",
        dueno: "Felipe"
    },
    {
        tipo: "Perro",
        nombre: "Lula",
        dueno: "Jhon"
    },
];


function listarMascotas(){
    const htmlMascotas= mascotas.map((mascota,index)=>`<tr>
                <th scope="row">${index}</th>
                <td>${mascota.tipo}</td>
                <td>${mascota.nombre}</td>
                <td>${mascota.dueno}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-info editar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></svg></button>
                    <button type="button" class="btn btn-danger eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg></i></button>
                  </div>
                </td>
              </tr>`).join("");
              listaMascotas.innerHTML=  htmlMascotas;
             Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick=editar(index))
             Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=>botonEliminar.onclick=eliminar(index))

}

function enviarDatos(evento){
    evento.preventDefault();
    const datos ={
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    const accion = btnGuardar.innerHTML;
    switch(accion) {
        case 'Editar':
        mascotas[indice.value] = datos;
        break;
        default:
            mascotas.push(datos);
            break;
    }
    listarMascotas();
    resetModal();

}

function editar(index){
    return function cuandoCliqueo(){
            btnGuardar.innerHTML='Editar'
        $('#exampleModalCenter').modal('toggle');
        const  mascota = mascotas[index]; 
        nombre.value=  mascota.nombre;
        dueno.value=  mascota.dueno;   
        tipo.value=  mascota.tipo;
        indice.value = index;
    }
}

function resetModal(){
    nombre.value=  '';
        dueno.value= 'Dueño';
        tipo.value=  'Tipo de animal';
        indice.value = '';
        btnGuardar.innerHTML='Crear';
}

function eliminar(index){
    return function clickEnEliminar(){
    mascotas=mascotas.filter((mascota, indiceMascota)=> indiceMascota!==index);
    listarMascotas();
    }
}

listarMascotas();

form.onsubmit=enviarDatos;
btnGuardar.onclick = enviarDatos;