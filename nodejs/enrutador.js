module.exports = {
    ruta:(data,callback) =>{
        callback(200,{mensaje: 'esta es /ruta'})
    },
    mascotas:{
    get:(data,callback) =>{
        if(typeof data.indice !=='undefined'){
            if (global.recursos.mascotas[data.indice]){
                return callback(200,global.recursos.mascotas[data.indice]);
            } 
            return callback(404,{
                mensaje:`mascota con indice ${data.indice} no encontrado`});
        }
        callback(200,global.recursos.mascotas);    
        }, 
       post: (data,callback) =>{
        global.recursos.mascotas.push(data.paylod);
        callback(201,data.paylod);
       },
       put:(data,callback) =>{
        if(typeof data.indice !=='undefined'){
            if (global.recursos.mascotas[data.indice]){
                return callback(200,global.recursos.mascotas[data.indice]);
            } 
            return callback(404,{
                mensaje:`mascota con indice ${data.indice} no encontrado`});
        }
        callback(400, {mensaje: "indice no enciado"});    
        }, 
    },
    noEncontrado: (data, callback) => {
        callback(404,{mensaje: 'no encontrado'})
    },
};