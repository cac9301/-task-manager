import { GET_TASK, ADD_TASK, DELETE_TASK,EDIT_TASK,
  UPDATE_TASK} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TASK:
      return {
        ...state,
        taskproyect: state.tasks.filter(
          (taskproyect) => taskproyect.id === action.payload
        )
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks:state.tasks.filter(task=>task.idtask !== action.payload),
      };
      case EDIT_TASK:
      return {
        ...state,
        taskedit:state.tasks.filter(
          (taskproyect) => taskproyect.idtask === action.payload)
      };
      case UPDATE_TASK:
      return {
        ...state,
        tasks:state.taskproyect.map((task) => task.idtask === action.payload.idtask?action.payload:task),
        taskedit: null

      };
    default:
      return state;
  }
};
