import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid({proyect,deletaProyect}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
        <Button
              type="submit"
              size="medium"
              variant="contained"
              color="primary"
              fullWidth
              className={classes.submit}
              onClick={()=>deletaProyect(proyect)}
            >
              Delete proyect
            </Button>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
}