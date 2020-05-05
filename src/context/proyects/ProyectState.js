import React, { useReducer } from "react";
import proyectReducer from "./ProyectReducer";
import proyectoContext from "./ProyectoContext";
import { FORM_PROYECT } from "../../types";
import { HIDE_PROYECT } from "../../types";
import { GET_PROYECTS } from "../../types";
import { ADD_PROYECTS,
  GET_ACTUAL_PROYECT,DELETE_PROYECT} from "../../types";


const ProyectState = (props) => {
  
  const proyects = [
    { id: 1, name: "tienda virtual", tipo: "sistmeas" },
    { id: 2, name: "Desarrollo de Tienda virtual" },
    { id: 3, name: "hacer cafe" },
  ];

  const initialState = {
    form: false,
    proyects: [],
    proyect: null,
    flag:false,
  };

  // dispatch para ejecutar la acciones
  const [state, dispatch] = useReducer(proyectReducer, initialState);
  //operaciones tipo crud

  const showForm = () => {
    dispatch({type: FORM_PROYECT});
  };
  const hideForm = () => {
    dispatch({type: HIDE_PROYECT});
  };

  //Get Proyects
  const getProyetcs = () =>{
    dispatch(
      {type: GET_PROYECTS,
      payload:proyects
      });
  }
// Add proyects
const addProyect = proyect =>{
  var aleatorio = Math.round(Math.random()*1000);
  proyect.id=aleatorio; 
  dispatch(
    {type: ADD_PROYECTS,
    payload:proyect});
}

// Select Proyect
const selectProyect = proyectId =>{
  dispatch(
    {type: GET_ACTUAL_PROYECT,payload:proyectId});
}

//Delete a proyect from the state 

const deletaProyect = proyectId =>{
  dispatch({
    type:DELETE_PROYECT,
    payload:proyectId
  })
}

  return (
    <proyectoContext.Provider
      value={{
        form: state.form,
        proyects: state.proyects,
        proyect: state.proyect,
        flag: state.flag,
        showForm,
        hideForm,
        getProyetcs,
        addProyect,
        selectProyect,
        deletaProyect
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectState;
