import React , {useState} from 'react';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';




function Modal({
  cambiarModal = () => {}, 
  crearEntidad = () => {}, 
  children = [],
  idObjeto = null,
  entidad = null
}) { 
  const [objeto, setObjeto] = useState({});
  useEffect(() => {
    const obtenerOptionsBackend = async () => {
      const mascotasPromise = listarEntidad ({entidad: "mascotas"});
      const veterinariasPromise = listarEntidad ({entidad: "veterinarias"});
      const duenosPromise = listarEntidad ({entidad: "duenos"});
      let [mascota, veterinaria, dueno] = await Promise.all([
        mascotasPromise,
        veterinariasPromise,
        duenosPromise,
      ]);
      console.log("uno", {mascota,veterinaria, dueno});
      mascota = mascota.map((_mascota, index)=>
        ({valor: index
          , etiqueta: `${_mascota.nombre} (${_mascota.tipo})`
        }));
        veterinaria = veterinaria.map((_veterinaria, index)=>
          ({valor: index
            , etiqueta: `${_veterinaria.nombre} ${_veterinaria.tipo}`
          }));
          dueno = dueno.map((_dueno, index)=>
            ({valor: index
              , etiqueta: `${_dueno.nombre} ${_dueno.tipo}`
            }));
            const nuevasOpciones = {...options, mascota, veterinaria, dueno};
            setOptions(nuevasOpciones);
    };
    obtenerOptionsBackend();
  },  []);

    return (
      //220
        <>
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <ModalHeader cambiarModal={cambiarModal} />
              <div className="modal-body m-15">
                <form id="form">
                <div className="form-row">
                  {children}
                 </div>
                  </form> 
                  </div> 
                    <ModalFooter
                        cambiarModal ={cambiarModal}
                        crearEntidad= {crearEntidad} 
                      />
                </div> 
            </div> 
        </div> 
        <div className="modal-backdrop fade show"></div>
        </> 
     
    ); 
} 

export default Modal;


