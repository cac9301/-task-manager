import { GET_TASK, ADD_TASK, DELETE_TASK,EDIT_TASK,
  UPDATE_TASK} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskproyect: [...state.taskproyect, action.payload]
      };
      case GET_TASK:
        return {
          ...state,
          taskproyect:action.payload,
        };
    case DELETE_TASK:
      return {
        ...state,
        taskproyect:state.taskproyect.filter(task=>task._id !== action.payload),
      };
      case EDIT_TASK:
      return {
        ...state,
        taskedit:state.taskproyect.filter(
          (taskproyect) => taskproyect._id === action.payload)
      };
      case UPDATE_TASK:
      return {
        ...state,
        taskproyect:state.taskproyect.map((task) => task.idtask === action.payload.idtask?action.payload:task),
        taskedit: null

      };
    default:
      return state;
  }
};
