const pais = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const identificacion = document.getElementById('identificacion');
const apellido = document.getElementById('apellido');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar')
const listaDuenos = document.getElementById('lista-duenos');





let Duenos = [
    {
        nombre: "Felipe",
        apellido: "Leal",
        pais: "Argentina",
        identificacion: "1234567"
    },
    {
        nombre: "Fernando",
        apellido: "Vasquez",
        pais: "Uruguay",
        identificacion: "1234567"
    },
];


function listarDuenos(){
    const htmlDuenos= Duenos.map((Dueno,index)=>`<tr>
                <th scope="row">${index}</th>
                <td>${Dueno.identificacion}</td>
                <td>${Dueno.pais}</td>
                <td>${Dueno.nombre}</td>
                <td>${Dueno.apellido}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-info editar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></svg></button>
                    <button type="button" class="btn btn-danger eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg></i></button>
                  </div>
                </td>
              </tr>`).join("");
              listaDuenos.innerHTML=  htmlDuenos;
             Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick=editar(index))
             Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=>botonEliminar.onclick=eliminar(index))

}

function enviarDatos(evento){
    evento.preventDefault();
    const datos ={
        identificacion: identificacion.value,
        pais:pais.value,
        nombre: nombre.value,
        apellido: apellido.value
    };
    const accion = btnGuardar.innerHTML;
    switch(accion) {
        case 'Editar':
        Duenos[indice.value] = datos;
        break;
        default:
            Duenos.push(datos);
            break;
    }
    listarDuenos();
    resetModal();

}

function editar(index){
    return function cuandoCliqueo(){
            btnGuardar.innerHTML='Editar'
        $('#exampleModalCenter').modal('toggle');
        const  Dueno = Duenos[index]; 
        identificacion.value = Dueno.identificacion;
        pais.value=  Dueno.pais;
        nombre.value=  Dueno.nombre;   
        apellido.value=  Dueno.apellido;
        indice.value = index;
    }
}

function resetModal(){
    identificacion.value='';
    pais.value='';
    nombre.value=  '';
    apellido.value='';
    indice.value = '';
    btnGuardar.innerHTML='Crear';
}

function eliminar(index){
    return function clickEnEliminar(){
    Duenos=Duenos.filter((Dueno, indiceDuenos)=> indiceDuenos!==index);
    listarDuenos();
    }
}

listarDuenos();
form.onsubmit=enviarDatos;
btnGuardar.onclick = enviarDatos;