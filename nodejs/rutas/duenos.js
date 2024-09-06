module.exports= function duenosHandler(duenos){
    return {
        get:(data,callback) =>{
            if(typeof data.indice !=='undefined'){
                if (duenos[data.indice]){
                    return callback(200,duenos[data.indice]);
                } 
                return callback(404,{
                    mensaje:`dueno con indice ${data.indice} no encontrado`});
            }
            callback(200,duenos);    
            }, 
           post: (data,callback) =>{
            duenos.push(data.paylod);
            callback(201,data.paylod);
           },
           put:(data,callback) =>{
            if(typeof data.indice !=='undefined'){
                if (duenos[data.indice]){
                    duenos[data.indice]=data.paylod;
                    return callback(200,duenos[data.indice]);
                } 
                return callback(404,{
                    mensaje:`dueno con indice ${data.indice} no encontrado`});
            }
            callback(400, {mensaje: "indice no enviado"});    
            }, 
            delete: (data,callback) =>{
                if(typeof data.indice !=='undefined'){
                    if (duenos[data.indice]){
                        duenos=duenos.filter
                        ((_dueno, indice)=>indice!= data.indice)
                        return callback(204
                            ,{mensaje:`Elemento con indice ${data.indice} eliminado`,
                        });
                    } 
                    return callback(404,{
                        mensaje:`dueno con indice ${data.indice} no encontrado`});
                }
                callback(400, {mensaje: "indice no enviado"});    
                },
        }
    }
    
    
    
    