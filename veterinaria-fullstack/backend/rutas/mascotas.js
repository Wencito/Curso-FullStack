module.exports= function mascotasHandler(mascotas){
return {
    get:(data,callback) =>{
        if(typeof data.indice !=='undefined'){
            if (mascotas[data.indice]){
                return callback(200,mascotas[data.indice]);
            } 
            return callback(404,{
                mensaje:`mascota con indice ${data.indice} no encontrado`});
        }
        callback(200,mascotas);    
        }, 
       post: (data,callback) =>{
        mascotas.push(data.paylod);
        callback(201,data.paylod);
       },
       put:(data,callback) =>{
        if(typeof data.indice !=='undefined'){
            if (mascotas[data.indice]){
                mascotas[data.indice]=data.paylod;
                return callback(200,mascotas[data.indice]);
            } 
            return callback(404,{
                mensaje:`mascota con indice ${data.indice} no encontrado`});
        }
        callback(400, {mensaje: "indice no enviado"});    
        }, 
        delete: (data,callback) =>{
            if(typeof data.indice !=='undefined'){
                if (mascotas[data.indice]){
                    mascotas=mascotas.filter
                    ((_mascota, indice)=>indice!= data.indice)
                    return callback(204
                        ,{mensaje:`Elemento con indice ${data.indice} eliminado`,
                    });
                } 
                return callback(404,{
                    mensaje:`mascota con indice ${data.indice} no encontrado`});
            }
            callback(400, {mensaje: "indice no enviado"});    
            },
    }
}



