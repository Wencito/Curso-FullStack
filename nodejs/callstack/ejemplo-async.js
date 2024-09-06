const fabricaDePromesas = (indice)=> 
    new Promise((resolve, reject) => {
    const tiempoReject = Math.floor(Math.random() * 10000) + 1000;
    const tiempoResolved = Math.floor(Math.random() * 10000) + 1000;
/*setTimeout(()=>{
    reject(`La promesa ${indice} fallo`);
    },tiempoReject);*/
    
    setTimeout(()=>{
        resolve(`La promesa ${indice} funco`);
        }, tiempoResolved);
    });
    
   
       /* Promise.race(misPromesas)
        .then((respuesta)=>console.log(respuesta))
        .catch(razon=>console.log(razon)); */

        async function miAFuncion(){
            let misPromesas=[];
            for(let i = 0; i<10;i++){
                 misPromesas = [...misPromesas,await fabricaDePromesas(i)];}
                  try { 
                    const miPromesa1 = await fabricaDePromesas(1);
                } catch (error){
                    throw error;
                }
    }

        function miNFuncion(){
           return fabricaDePromesas(2);

        }

        //


        

    