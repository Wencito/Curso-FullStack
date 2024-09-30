import React from 'react'; 


function ModalFooter({cambiarModal= ()=>{}, crearEntidad= ()=>{}}) {  
    return (
        <div className="modal-footer"> 
        <button
        onClick={cambiarModal}
         type="button"
          className="btn btn-secondary"
           data-dismiss="modal"
           >
          Cerrar
          </button> 

          <button 
            onClick={crearEntidad}
            type="button"
            data-dismiss="modal"
            className="btn btn-primary"
            id='btn-guardar'
          >
    Crear
</button>

    </div> 
  ); 
} 

export default ModalFooter;