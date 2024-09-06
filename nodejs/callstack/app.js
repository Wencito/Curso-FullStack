const miBoton = document.getElementById("miBoton");

const ejecutarCuandoHaigaClick = evento=>{
//console.log("Por aca soy un callback");
    // alert('Diste cli en el buton')
};

miBoton.addEventListener("click",ejecutarCuandoHaigaClick);

ejecutarCuandoHaigaClick();
