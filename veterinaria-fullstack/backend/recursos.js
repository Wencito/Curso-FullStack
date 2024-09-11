const veterinarias = require("./rutas/veterinarias");

module.exports={
    mascotas: [
        {tipo:"Perro", nombre:"Trosky0", dueno:"Camilo"},
        {tipo:"Gato", nombre:"Trosky1", dueno:"Camilo"},
        {tipo:"Pajaro", nombre:"Trosky2", dueno:"Camilo"},
        {tipo:"Otro", nombre:"Trosky3", dueno:"Camilo"}
    ],
    veterinarias: [
        {nombre:"Alexandra", apellido:"Perez", documento:"123456789"},
        {nombre:"Alexander", apellido:"Gomez", documento:"987654321"},
        {nombre:"Julian", apellido:"Madrid", documento:"123789456"},
        {nombre:"Naryie", apellido:"Vasquez", documento:"456321789"},
    ],
    duenos: [
        {nombre:"Samuel", apellido:"Ramirez", documento:"46659235"},
        {nombre:"Vito", apellido:"Gastaldi", documento:"46659207"},
        {nombre:"Felipe", apellido:"Leal", documento:"46222987"},
        {nombre:"Benjamin", apellido:"Dardanelli", documento:"47250910"},
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
