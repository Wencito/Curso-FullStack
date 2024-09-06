module.exports= function veterinariasHandler(veterinarias){
    return {
        get:(data,callback) =>{
            if(typeof data.indice !=='undefined'){
                if (veterinarias[data.indice]){
                    return callback(200,veterinarias[data.indice]);
                } 
                return callback(404,{
                    mensaje:`veterinaria con indice ${data.indice} no encontrado`});
            }
            callback(200,veterinarias);    
            }, 
           post: (data,callback) =>{
            veterinarias.push(data.paylod);
            callback(201,data.paylod);
           },
           put:(data,callback) =>{
            if(typeof data.indice !=='undefined'){
                if (veterinarias[data.indice]){
                    veterinarias[data.indice]=data.paylod;
                    return callback(200,veterinarias[data.indice]);
                } 
                return callback(404,{
                    mensaje:`veterinaria con indice ${data.indice} no encontrado`});
            }
            callback(400, {mensaje: "indice no enviado"});    
            }, 
            delete: (data,callback) =>{
                if(typeof data.indice !=='undefined'){
                    if (veterinarias[data.indice]){
                        veterinarias=veterinarias.filter
                        ((_veterinaria, indice)=>indice!= data.indice)
                        return callback(204
                            ,{mensaje:`Elemento con indice ${data.indice} eliminado`,
                        });
                    } 
                    return callback(404,{
                        mensaje:`veterinaria con indice ${data.indice} no encontrado`});
                }
                callback(400, {mensaje: "indice no enviado"});    
                },
        }
    }
    
    
    
    