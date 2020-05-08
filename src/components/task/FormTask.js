import React, { useContext,useEffect,useState } from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import useStyles from "../login/styles/stylesLogin";
import { Formik } from "formik";
import * as Yup from "yup";
import ProyectoContext from "../../context/proyects/ProyectoContext";
import TaskContext from "../../context/task/TaskContext";

const FormTask = ({setselecttask}) => {
  const classes = useStyles();

  // context proyects:
  const ProyectsContext = useContext(ProyectoContext);
  const { proyect } = ProyectsContext;

  //context task:
  const taskContext = useContext(TaskContext);
  const { addNewTask, getTaskForId,taskedit,uppdateTask } = taskContext;
  const [name, setname] = useState("");
  const [objet, setobjet] = useState({});
  var id = proyect[0].id;
// state local

  
  useEffect(() => {
    if(taskedit!==null) {
      setselecttask(taskedit[0].name)
      setname(taskedit[0].name);
      setobjet(taskedit[0]);
    }else{
      setname("");
    }
  }, [taskedit])
  console.log(objet.idtask);
 

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Formik
          initialValues={
            { name: name, idtask: null }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(30, "Must be 30 characters or less")
              .required("task its Required"),
          })}
          onSubmit={(values, { resetForm }) => {
            //tarea nueva
            if(taskedit===null){
              values.id = id;
              console.log(values);
              addNewTask(values);
            //editandato  
            }else{
              values.id = id;
              values.idtask = objet.idtask;
              uppdateTask(values)
              console.log("los valores editados son :",values);
              
            }
            getTaskForId(id);
              resetForm({
                values: { name: "", idtask: null },
              });
            
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <TextField
                id="outlined-secondary"
                label="Wriete Your New Taskt"
                fullWidth
                value={formik.values.name}
                variant="outlined"
                error={!!(formik.touched.name && formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                {...formik.getFieldProps("name")}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {taskedit?"edit your task":"create a new task"}
              </Button>
            </form>
          )}
        </Formik>
      </Container>
    </React.Fragment>
  );
};

export default FormTask;
