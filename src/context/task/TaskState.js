import React, { useReducer } from "react";
import TaskReducer from "./TaskReducer";
import TaskContext from "./TaskContext";
import { GET_TASK, ADD_TASK, DELETE_TASK,UPDATE_TASK,EDIT_TASK } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { idtask: 12, name: "task 1", estado: false, id: 1 },
      { idtask: 123, name: "task 2", estado: false, id: 1 },
      { idtask: 112, name: "task 3", estado: false, id: 1 },
      { idtask: 11111, name: "task 4", estado: false, id: 1 },
      { idtask: 121212, name: "task 1", estado: false, id: 2 },
      { idtask: 12312, name: "task 10", estado: false, id: 2 },
      { idtask: 122223, name: "task 12", estado: false, id: 2 },
      { idtask: 3333, name: "task withi id : 3", estado: false, id: 3 },
      { idtask: 12321, name: "task 122", estado: false, id: 3 },
      { idtask: 123123123, name: "task 31", estado: false, id: 3 },
      { idtask: 4444, name: "task 32", estado: false, id: 3 },
    ],
    taskproyect: null,
    taskedit: null,
   
  };

  // dispatch para ejecutar la acciones
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  //operaciones
  const getTaskForId = (proyectId) => {
    dispatch({
      type: GET_TASK,
      payload: proyectId,
    });
  };
  //Deleta task

  const deleteTaskForId = (proyectId) => {
    dispatch({
      type: DELETE_TASK,
      payload: proyectId,
    });
  };
  //funtion add a task
  const addNewTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };
  //funtion edit a task
  const selectEditTask = (idtask) => {
    dispatch({
      type: EDIT_TASK,
      payload: idtask,
    });
  };

  const uppdateTask = task => {
    dispatch({
      type: UPDATE_TASK,
      payload: task
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        taskproyect: state.taskproyect,
        taskedit:state.taskedit,
        addNewTask,
        deleteTaskForId,
        getTaskForId,
        selectEditTask,
        uppdateTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
