import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import ProyectoContext from "../../../context/proyects/ProyectoContext";
import TaskContext from "../../../context/task/TaskContext";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}



const ProyecList = ({ proyect }) => {
  
  const ProyectsContext = useContext(ProyectoContext);
  const taskContext = useContext(TaskContext);
  const{selectProyect} = ProyectsContext;
  const{getTaskForId} = taskContext;
  const sendIdforReducer = id =>{
    selectProyect(id);
    getTaskForId(id);
  }
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        <Button
        fullWidth
        color="primary"
        onClick={()=>sendIdforReducer(proyect._id)}
        size="small">
        <ListItemLink>
          <ListItemText primary={proyect.name} />
        </ListItemLink>
        </Button>
        <Divider />
      </List>
    </div>
  );
};

export default ProyecList;
