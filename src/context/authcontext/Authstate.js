import React, { useReducer } from "react";
import AuthReducer from "./AuthReducer";
import auntContext from "./Authcontext";
import tokenAuth from "../../config/tokenAuth";
import { REGISTER_SUCCESSFUL,REGISTER_ERROR,
    GET_USER,LOGIN_SUCCESSFUL,LOGIN_ERROR } from "../../types";
import clientAxios from "../../config/axios";



const AuthState = (props) => {

    const initialState = {
        token:localStorage.getItem('token'),
        autenticado: null,
        user:null,
        flag_error:false,
        error:null
      };
    

  // dispatch para ejecutar la acciones
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  //operaciones tipo crud
  
  const registerUser = async user =>{
    try {
      const answer = await clientAxios.post('/api/user',user)
      console.log(answer.data);
      dispatch({
        type:REGISTER_SUCCESSFUL,
        payload:answer.data 
      })
      getUser();
    } catch (error) {
      console.log(error.response.data.msg);
      const error_=error.response.data.msg
      dispatch({
        type:REGISTER_ERROR,
        payload:error_
      })
    }
  }
  //funtion that get the user
  const getUser = async ()=>{
    const token= localStorage.getItem('token')
    if(token){
      tokenAuth(token);
      //funcion para enviar el token por header
    }
    try {
      const answer = await clientAxios.get('/api/auth')
      dispatch({
        type:GET_USER,
        payload:answer.data
      })

    } catch (error) {
      console.log(error.response);
      dispatch({
        type:LOGIN_ERROR
      })
      
    }
  }

  const loginSucessfull = async dataUser =>{
    try {
      const answer = await clientAxios.post('/api/auth',dataUser)
      dispatch({
        type:LOGIN_SUCCESSFUL,
        payload:answer.data
      })
      getUser();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type:LOGIN_ERROR,
        payload:error.response.data.msg
        
      })
    }

  }

  return (
    <auntContext.Provider
      value={{
        token:state.token,
        autenticado:state.autenticado,
        user:state.user,
        error:state.error,
        flag_error:state.flag_error,
        registerUser,
        loginSucessfull,
        getUser
      }}
    >
      {props.children}
    </auntContext.Provider>
  );
};

export default AuthState;
