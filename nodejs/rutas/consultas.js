module.exports= function consultasHandler(consultas){
    return {
        get:(data,callback) =>{
            if(typeof data.indice !=='undefined'){
                if (consultas[data.indice]){
                    return callback(200,consultas[data.indice]);
                } 
                return callback(404,{
                    mensaje:`consulta con indice ${data.indice} no encontrado`});
            }
            callback(200,consultas);    
            }, 
           post: (data,callback) =>{
            let nuevaConsulta = data.paylod;
            nuevaConsulta.fechaCreacion=new Date();
            nuevaConsulta.fechaEdicion=null;
            nuevaConsulta = [... consultas, nuevaConsulta];
            callback(201,data.paylod);
           },
           put:(data,callback) =>{
            if(typeof data.indice !=='undefined'){
                if (consultas[data.indice]){
                    const { fechaCreacion } =  consultas[data.indice];
                    consultas[data.indice]={
                        ...data.paylod,
                        fechaCreacion,
                        fechaEdicion: new Date(),
                     };
                    return callback(200,consultas[data.indice]);
                } 
                return callback(404,{
                    mensaje:`consulta con indice ${data.indice} no encontrado`});
            }
            callback(400, {mensaje: "indice no enviado"});    
            }, 
            delete: (data,callback) =>{
                if(typeof data.indice !=='undefined'){
                    if (consultas[data.indice]){
                        consultas=consultas.filter
                        ((_consulta, indice)=>indice!= data.indice)
                        return callback(204
                            ,{mensaje:`Elemento con indice ${data.indice} eliminado`,
                        });
                    } 
                    return callback(404,{
                        mensaje:`consulta con indice ${data.indice} no encontrado`});
                }
                callback(400, {mensaje: "indice no enviado"});    
                },
        }
    }
    

