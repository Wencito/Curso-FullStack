const veterinarias = require("./rutas/veterinarias");

module.exports={
    mascotas: [
        {tipo:"perro", nombre:"Trosky0", dueno:"Camilo"},
        {tipo:"Gato", nombre:"Trosky1", dueno:"Camilo"},
        {tipo:"Pajaro", nombre:"Trosky2", dueno:"Camilo"},
        {tipo:"Otro", nombre:"Trosky3", dueno:"Camilo"}
    ],
    veterinarias: [
        {nombre:"Alexandra", apellido:"Perez", docuemnto:"123456789"},
        {nombre:"Alexander", apellido:"Gomez", docuemnto:"987654321"},
        {nombre:"Julian", apellido:"Madrid", docuemnto:"123789456"},
        {nombre:"Naryie", apellido:"Vasquez", docuemnto:"456321789"},
    ],
    duenos: [
        {nombre:"Samuel", apellido:"Ramirez", docuemnto:"46659235"},
        {nombre:"Vito", apellido:"Gastaldi", docuemnto:"46659207"},
        {nombre:"Felipe", apellido:"Leal", docuemnto:"46222987"},
        {nombre:"Benjamin", apellido:"Dardanelli", docuemnto:"47250910"},
    ],
    consultas: [
        {
            mascotas: 0,
            veterinaria: 0, 
             fechaCreacion:new Date(),
             FechaEdicion: new Date(), 
             hitoria:"", 
             diagnostico:""
            },
        
    ],
};
