import React, {Component} from "react"; 
import Nav from "./componentes/Nav/Nav"; 
import ActionsMenu from "./componentes/ActionsMenu/Index"; 
import Tabla from "./componentes/Tabla/Index"; 
import Head from "./componentes/Head";
import Modal from "./componentes/Modal";
import ComponenteCampo from "./componentes/ComponeneteCampo";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { listarEntidad, crearEditarEntidad, eliminarEntidad } from  "./servicio"; 

import "./css/styles.css";





class Pagina extends Component {
        constructor(props) {
        super(props);
        this.state = {
        mostrarModal: false,
        entidades: [],
        objeto: {},
        idObjeto: null,
        method: "post",
        columnas: [],
      };
    }
    
    cambiarModal = (_evento, method = "POST") => {
        this.setState({mostrarModal: !this.state.mostrarModal});
    };

    listar = async () => {
    const { entidad } = this.props;
    const entidades = await listarEntidad({ entidad });
    let columnas = [];
    if (Array.isArray(entidades) && entidades.length > 0) {
      columnas = Object.keys(entidades[0]) || [];
    }
    this.setState({ entidades, columnas });
  };

    manejarInput  =  (evento) => {
      const 
      { target: {value, name},
    } = evento;
      let {objeto} = this.state;
      objeto = {...objeto, [name]: value};
      this.setState({ objeto });
    };

    crearEntidad = async () => {
      const { entidad } = this.props;
      let { objeto, method, idObjeto } = this.state;
      await crearEditarEntidad({ entidad, objeto, method, idObjeto });
      this.cambiarModal();
      this.listar();
    }

    editarEntidad =  (_evento, index) => {
      const objeto = {...this.state.entidades[index]};
      this.setState({objeto, idObjeto: index},() => {
        this.cambiarModal(null, "PUT");
      });
    };

    eliminarEntidad = async (_evento, index) => {
      const {entidad} = this.props;
      const respuesta = await eliminarEntidad({entidad, idObjeto: index});
      console.log({respuesta});
      this.listar();
      
    }
    componentDidMount () {
      this.listar();
    };
    render() {
      const {titulo = "Pagina sin titulo", entidad} = this.props;
      const { columnas, idObjeto } = this.state;
        return (
          <>
          <div className="container">
            <Head />
            <Nav />
            <ActionsMenu  
              cambiarModal={this.cambiarModal} 
              titulo={titulo}/>
            <Tabla 
            entidades={this.state.entidades}
            editarEntidad={this.editarEntidad}
            eliminarEntidad={this.eliminarEntidad}
            columnas={columnas}
            />
            {this.state.mostrarModal && ( 
            <Modal
            cambiarModal={this.cambiarModal}
            manejarInput={this.manejarInput} 
            crearEntidad={this.crearEntidad} 
            entidad={entidad}
            idObjeto={idObjeto}
        > 
            {columnas.map((columna, index)=>(
                <ComponenteCampo

                    key={index}                     
                    manejarInput={this.manejarInput} 
                    objeto={this.state.objeto}
                    nombreCampo={columna}
                    
                />
            ))}
        </Modal>
        )}
        </div>
          </>
        );
      }

} 

export default Pagina;


