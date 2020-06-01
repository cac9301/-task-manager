import React, { useReducer } from "react";
import TaskReducer from "./TaskReducer";
import TaskContext from "./TaskContext";
import {
  GET_TASK,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  EDIT_TASK,
} from "../../types";
import clientAxios from "../../config/axios";

const TaskState = (props) => {
  const initialState = {
    proyects: [],
    taskproyect: [],
    taskedit: null,
  };

  // dispatch para ejecutar la acciones
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  //operaciones
  const getTaskForId = async (proyect_) => {
    try {
      const answer = await clientAxios.get("/api/tasks", {
        params: { proyect_ },
      });
      const datos = answer.data.task;

      dispatch({
        type: GET_TASK,
        payload: datos,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  //Deleta task

  const deleteTaskForId = async (_id, proyect_) => {
    try {
      await clientAxios.delete(`/api/tasks/${_id}`, { params: { proyect_ } });
      dispatch({
        type: DELETE_TASK,
        payload: _id,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  //funtion add a task
  const addNewTask = async (task) => {
    try {
      const answer = await clientAxios.post("/api/tasks", task);
      //eslint-disable-next-line
      {
        console.log(answer);
      }

      dispatch({
        type: ADD_TASK,
        payload: task,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  //funtion edit a task
  const selectEditTask = (idtask) => {
    dispatch({
      type: EDIT_TASK,
      payload: idtask,
    });
  };

  const uppdateTask = async (task) => {
    try {
      const answer = await clientAxios.put(`/api/tasks/${task._id}`, task);
      console.log(answer);

      dispatch({
        type: UPDATE_TASK,
        payload: task,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        taskproyect: state.taskproyect,
        taskedit: state.taskedit,
        addNewTask,
        deleteTaskForId,
        getTaskForId,
        selectEditTask,
        uppdateTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
