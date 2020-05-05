import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import FormProyect from "./FormProyect";
import ProyectoContext from "../../../context/proyects/ProyectoContext";


const FormNewProyect = () => {
  //importar el contexto
  const ProyectsContext = useContext(ProyectoContext);
  const{form ,showForm,hideForm,addProyect} = ProyectsContext;
  /// style Material ui
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      margin: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className={classes.paper} item xs={12}>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            onClick={showForm}
          >
            Add a New Task
          </Button>
        </Grid>
        {form ? (
          <FormProyect
          hideForm={hideForm}
          addProyect={addProyect}
          />
        ) : null}
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
};

export default FormNewProyect;
