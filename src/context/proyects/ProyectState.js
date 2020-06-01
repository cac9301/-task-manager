import React, { useReducer } from "react";
import proyectReducer from "./ProyectReducer";
import proyectoContext from "./ProyectoContext";
import clientAxios from "../../config/axios";
import { FORM_PROYECT } from "../../types";
import { HIDE_PROYECT } from "../../types";
import { GET_PROYECTS } from "../../types";
import {
  ADD_PROYECTS,
  GET_ACTUAL_PROYECT,
  DELETE_PROYECT,
  ERROR_SERVER,
} from "../../types";

const ProyectState = (props) => {
  const initialState = {
    form: false,
    proyects: [],
    proyect: null,
    flag: false,
    errormeseg: false,
    mesejes: "",
  };

  // dispatch para ejecutar la acciones
  const [state, dispatch] = useReducer(proyectReducer, initialState);
  //operaciones tipo crud

  const showForm = () => {
    dispatch({ type: FORM_PROYECT });
  };
  const hideForm = () => {
    dispatch({ type: HIDE_PROYECT });
  };

  //Get Proyects
  const getProyetcs = async () => {
    try {
      const answer = await clientAxios.get("/api/proyects");
      const proyects = answer.data.proyects;

      dispatch({ type: GET_PROYECTS, payload: proyects });
    } catch (error) {}
  };
  // Add proyects
  const addProyect = async (proyect) => {
    try {
      const answer = await clientAxios.post("/api/proyects", proyect);
      const data = answer.data;
      dispatch({
        type: ADD_PROYECTS,
        payload: data,
      });
    } catch (error) {}
  };

  // Select Proyect
  const selectProyect = (proyectId) => {
    dispatch({ type: GET_ACTUAL_PROYECT, payload: proyectId });
  };

  //Delete a proyect from the state

  const deletaProyect = async (proyectId) => {
    try {
      const answer = await clientAxios.delete(`/api/proyects/${proyectId}`);
      //eslint-disable-next-line
      {
        console.log(answer);
      }

      dispatch({
        type: DELETE_PROYECT,
        payload: proyectId,
      });
    } catch (error) {
      const errors = error.response.data;
      dispatch({
        type: ERROR_SERVER,
        payload: errors,
      });
    }
  };

  return (
    <proyectoContext.Provider
      value={{
        form: state.form,
        proyects: state.proyects,
        proyect: state.proyect,
        flag: state.flag,
        errormeseg: state.errormeseg,
        mesejes: state.mesejes,
        showForm,
        hideForm,
        getProyetcs,
        addProyect,
        selectProyect,
        deletaProyect,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectState;
