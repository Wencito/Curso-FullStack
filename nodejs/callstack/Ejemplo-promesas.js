const fabricaDePromesas = (indice)=> 
new Promise((resolve, reject) => {
const tiempoReject = Math.floor(Math.random() * 10000) + 1000;
const tiempoResolved = Math.floor(Math.random() * 10000) + 1000;
console.log("TiempoRejected",tiempoReject);
console.log("TiempoResolved",tiempoResolved);
setTimeout(()=>{
reject(`La promesa ${indice} fallo`);
},tiempoReject);

setTimeout(()=>{
    resolve(`La promesa ${indice} funco`);
    }, tiempoResolved);
});

let misPromesas=[];
for(let i = 0; i<10;i++){
    misPromesas = [...misPromesas,fabricaDePromesas(i)];}

    Promise.race(misPromesas)
    .then((respuesta)=>console.log(respuesta))
    .catch(()=>console.log(razon));

