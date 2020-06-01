import { REGISTER_SUCCESSFUL,REGISTER_ERROR,
  LOGIN_SUCCESSFUL,LOGIN_ERROR,GET_USER } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESSFUL:
      localStorage.setItem('token',action.payload.token)
      return{
          ...state,
          autenticado:true,
      }
      //get user
      case GET_USER:
        return{
          ...state,
          user:action.payload
        }
      case LOGIN_SUCCESSFUL:
        localStorage.setItem('token',action.payload.token)
        return{
          ...state,
          autenticado:true,
          error:null,
          flag_error:false
        }
      
      //error from server  
      case LOGIN_ERROR:
      case REGISTER_ERROR:
        localStorage.removeItem('token')
      return{
          ...state,
          autenticado:false,
          token:null,
          error:action.payload,
          flag_error:true
      }
    default:
      return state;
  }
};
