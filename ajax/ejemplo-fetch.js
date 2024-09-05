const listaUsuarios=document.getElementById("body-usuarios");
const boton=document.getElementById("boton");
const limpiar=document.getElementById("limpiar");
const nombre=document.getElementById("nombre");
const apellido=document.getElementById("apellido");
const pais=document.getElementById("pais");
const indice=document.getElementById("indice");
let usuarios=[];
let botonesEliminar = null;
let botonesEditar = null;


function render() {
    const usuariosRender = usuarios
    .map((usuario, indice) => {
        let usuarioNombre=usuario.nombre ? usuario.nombre:'vacio';
        let usuarioApellido=usuario.apellido ? usuario.apellido:'vacio';
        let usuarioPais=usuario.pais ? usuario.pais:'vacio';
       return `<tr>
            <td>${usuarioNombre} </td>
            <td>${usuarioApellido}</td>
            <td>${usuarioPais}</td>
             <td><a class="ver"href="/ajax/index2.html?usuario=${indice}" >Ver</></td>
             <td><button class="editar" data-indice=${indice} >Editar</></td>
             <td><button class="eliminar" data-indice=${indice} >Eliminar</></td>

                      </tr>`
                    })
    .join("");
    console.log(usuariosRender);
    listaUsuarios.innerHTML = usuariosRender;
    botonesEliminar = document.getElementsByClassName('eliminar');
    botonesEditar = document.getElementsByClassName('editar');
    Array.from( botonesEliminar).forEach(botonEliminar => {
    botonEliminar.onclick=eliminarUnUsuario;
    });
    Array.from( botonesEditar).forEach(botonEditar => {
        botonEditar.onclick=editarUnUsuario;
        
    });
}

function enviarDatos(e){
    e.preventDefault();
    let accion = e.target.innerText;
    console.log('accion',accion);
    const datos= {
            nombre: nombre.value,
            apellido: apellido.value,
            pais: pais.value
        };
        let url = null;
        let method= null;
        if(accion==='Crear'){
            url = 'https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios'
            method='POST';
        }else if(accion==='Editar'){
            if(indice.value){
                url = `https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios/${indice.value}`
                method= 'PUT';
            } else {
                return;
            }
        }else{
            return;
        }
    fetch(url,{
        method: method, 
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then((response)=>response.json())
    .then(respuestaJson=>{
        console.log('respuestaJson',respuestaJson)
        refrescar();
        render();
    })   

}
function eliminarUnUsuario(e){
    e.preventDefault();
    console.log('Eliminar usuario', e)
    const datos= {
            nombre: nombre.value,
            apellido: apellido.value,
            pais: pais.value
        };
    fetch(`https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios/${e.target.dataset.indice}`,{
        method: 'DELETE', 
       
    })
    .then((response)=>response.json())
    .then(respuestaJson=>{
        console.log('respuestaJson',respuestaJson)
        refrescar();
        restaurarBoton();
    }).catch((razon)=>{
        console.log(razon);
        restaurarBoton();
    })
}
function editarUnUsuario(e){
    e.preventDefault();
    console.log('Editar usuario', e)
    if(e.target.dataset.indice){
    const usuario=usuarios[e.target.dataset.indice];
    nombre.value = usuario.nombre ? usuario.nombre :'';
    apellido.value = usuario.apellido ? usuario.apellido :'';
    pais.value = usuario.pais ? usuario.pais :'';
    indice.value = e.target.dataset.indice;
    boton.innerText= 'Editar'
    } else{
        boton.innerText='Crear';
    }
}

function refrescar(){
    fetch('https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios')
    .then(response=>response.json())
    .then(respuestaUsuarios=>{ 
        console.log('respuestaUsuarios',respuestaUsuarios)
        usuarios=respuestaUsuarios
        render();
    }) 
}

function restaurarBoton(){
  boton.innerText='Crear';  
  nombre.value='';
  apellido.value='';
  pais.value='';
}

refrescar();

boton.onclick=enviarDatos;
limpiar.onclick=restaurarBoton
