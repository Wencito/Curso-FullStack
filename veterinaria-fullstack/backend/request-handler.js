const url=require('url');
const  StringDecoder = require('string_decoder').StringDecoder;
const enrtutador = require("./enrutador");


module.exports  = (req, res) =>{
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual, true);
    const ruta = urlParseada.pathname;
   const metodo = req.method.toLowerCase();
   const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '');
   const {query = {}}= urlParseada;

   const {headers = {}}= req;

   const decoder = new StringDecoder('utf-8');
   let buffer='';
   req.on('data', (data)=>{
    buffer += decoder.write(data);
   });
   req.on('end',()=>{
    buffer += decoder.end();

    if (headers["content-type"]==='application/json') {
        buffer = JSON.parse(buffer);
    }

    if(rutaLimpia.indexOf("/")>=-1){
        var [rutaPrincipal, indice] = rutaLimpia.split("/");
    }

    const data={
        indice,
        ruta:rutaPrincipal || rutaLimpia,
        query,
        metodo,
        headers,
        paylod: buffer
    };


    console.log({data});

    let handler;
   if(
        data.ruta && 
        enrtutador[data.ruta] && 
        enrtutador[data.ruta][metodo]
    ){
        handler= enrtutador[data.ruta][metodo];
    }else{
        handler=enrtutador.noEncontrado;
    }
 
    if(typeof handler==="function"){
        handler(data, (statusCode=200, mensaje)=>{
            const respuesta=JSON.stringify(mensaje);
            res.setHeader("Content-Type", "aplication/json");
            res.writeHead(statusCode);
            res.end(respuesta);
        });
    }


   });
 
};
