const bodyUsuario = document.getElementById('body-usuario')
let usuario = {};

function tomarIndiceUsuario(){
   return location.search.replace('?', '').split('=')[1];
}


function obtenerUsuario(){
    fetch(`https://bootcamp-dia-3.camilomontoyau.vercel.app/usuarios/${tomarIndiceUsuario()}`)
    .then(response=>response.json())
    .then(respuestaUsuario=>{ 
        console.log('respuestaUsuarios',respuestaUsuario)
        usuario=respuestaUsuario
        render();
    }) 
}

function render(){
    const usuarioRender = `<tr><td class="Campo-Usuario">Nombre</td><td>${usuario.nombre ? usuario.nombre:'vacio'} </td> </tr>
                           <tr><td class="Campo-Usuario">Apellido</td><td>${usuario.apellido ? usuario.apellido:'vacio'}</td> </tr>
                           <tr><td class="Campo-Usuario">Pais</td><td>${usuario.pais ? usuario.pais:'vacio'}</td> </tr>
                           </tr>`;
        
    console.log(usuarioRender);
    bodyUsuario.innerHTML = usuarioRender;
}
                

obtenerUsuario()