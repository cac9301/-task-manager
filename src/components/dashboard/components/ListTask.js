import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TaskContext from "../../../context/task/TaskContext";

const useStyles = makeStyles((theme)=>({
  list: {
    marginBottom:theme.spacing(1),
    marginTop:theme.spacing(1),
  },
  center: {
    textAlign:"center",
  },
}));

export default function SimpleTable({proyect}) {
  const taskContext = useContext(TaskContext);
  const { taskproyect,deleteTaskForId,
    getTaskForId,selectEditTask } = taskContext;
  const classes = useStyles();
  if (taskproyect === null) return;

  const handledelete = (id,idp) =>{
    deleteTaskForId(id,idp);
    getTaskForId(idp);
  }

  return (
    <List component="nav" aria-label="secondary mailbox folders">
      {taskproyect.map((row) => (
        
        <>
          <Grid 
          container spacing={4}
          key={row._id}
          className={classes.list}>
            <Grid  
            item
            xs={4}
            className={classes.center}>
            {row.name}
            </Grid>
            <Grid item xs={4}>
              <Button
                type="submit"
                size="medium"
                variant="contained"
                color="secondary"
                className={classes.submit}
                fullWidth
                startIcon={<DeleteIcon />}
                onClick={()=>handledelete(row._id,row.proyect_)}
              >
                Delete task
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                type="submit"
                size="medium"
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                className={classes.submit}
                fullWidth
                onClick={()=>selectEditTask(row._id)}
              >
                Edit task
              </Button>
            </Grid>
          </Grid>
          <Divider />
        </>
      ))}
    </List>
  );
}
