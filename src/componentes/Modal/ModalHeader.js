import React from 'react'; 

function ModalHeader({cambiarModal= ()=>{}}) { 
    return (
        <div className="modal-header"> 
        <h5 className="modal-title" id="exampleModalLongTitle">
            Nueva Mascota
            </h5> 
        <button
         type="button"
          className="close"
           data-dismiss="modal"
            aria-label="Close"
            onClick={cambiarModal}
            >

            <span aria-hidden="true">&times;</span> 
        </button> 
    </div> 
  ); 
} 

export default ModalHeader;
