module.exports = {
    mascotas: [
        {tipo: "Perro", nombre: "Trosky0", dueno: "Camilo"},
        {tipo: "Perro", nombre: "Trosky1", dueno: "Camilo"},
        {tipo: "Perro", nombre: "Trosky2", dueno: "Camilo"},
        {tipo: "Perro", nombre: "Trosky3", dueno: "Camilo"},
        {tipo: "Perro", nombre: "Trosky4", dueno: "Camilo"},
    ],

    veterinarias: [
        {nombre: "Alexandra", apellido: "Perez", documento: "1234567890"},
        {nombre: "Alexander", apellido: "Gómez", documento: "3234599999"},
        {nombre: "Julián", apellido: "Madrid", documento: "5234567890"},
        {nombre: "Nryie", apellido: "Vasquez", documento: "1000067890"},
    ],
    duenos: [
        {nombre:"Samuel", apellido:"Ramirez", documento:"46659235"},
        {nombre:"Vito", apellido:"Gastaldi", documento:"46659207"},
        {nombre:"Felipe", apellido:"Leal", documento:"46222987"},
        {nombre:"Benjamin", apellido:"Dardanelli", documento:"47250910"},
    ],
    consultas: [
        {
            mascota: 0, 
            veterinaria: 0,
            diagnostico: "Diagnostco1",
            historia:"historia1",     
            fechaCreacion: new Date(),
            fechaEdicion: new Date(),
        },
    ],
}