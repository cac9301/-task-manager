import { FORM_PROYECT } from "../../types";
import { HIDE_PROYECT } from "../../types";
import { GET_PROYECTS } from "../../types";
import {
  ADD_PROYECTS,
  GET_ACTUAL_PROYECT,
  DELETE_PROYECT,
  ERROR_SERVER,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case DELETE_PROYECT:
      return {
        ...state,
        proyects: state.proyects.filter(
          (proyect) => proyect._id !== action.payload
        ),
        flag: false,
      };
    case FORM_PROYECT:
      return {
        ...state,
        form: true,
      };
    case HIDE_PROYECT:
      return {
        ...state,
        form: false,
      };
    case GET_PROYECTS:
      return {
        ...state,
        proyects: action.payload,
      };
    case ADD_PROYECTS:
      return {
        ...state,
        proyects: [...state.proyects, action.payload],
      };
    case GET_ACTUAL_PROYECT:
      return {
        ...state,
        proyect: state.proyects.filter(
          (proyect) => proyect._id === action.payload
        ),
        flag: true,
      };
    case ERROR_SERVER:
      return {
        ...state,
        errormeseg: true,
        mesejes: action.payload,
      };
    default:
      return state;
  }
};
