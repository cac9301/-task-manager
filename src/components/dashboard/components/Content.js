import React, { useContext,useState } from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Copyright from "../components/Footer";
import useStyles from "../styles/stylesDashboard";
import Typography from "@material-ui/core/Typography";
import FormTask from "../../task/FormTask";
import ProyectoContext from "../../../context/proyects/ProyectoContext";
import ListTask from "../components/ListTask";

import ButtonDelete from "../components/ButtonDelete";

const Content = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [selecttask, setselecttask] = useState("")

  //contexto
  const ProyectsContext = useContext(ProyectoContext);
  const { flag, proyect,deletaProyect } = ProyectsContext;

  if (proyect === null) return null;
 
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={1}>
          {flag ? (
            <>
              <Grid item xs={12} md={12} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <Typography
                    component="h2"
                    variant="h6"
                    color="inherit"
                    noWrap
                    align="center"
                  >
                    {selecttask!==""?`edit your task select: ${selecttask}`:"New Task"}
                  </Typography>
                  <FormTask 
                  setselecttask={setselecttask}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography
                    component="h2"
                    variant="h6"
                    color="inherit"
                    noWrap
                    align="center"
                  >
                    Task Lists of Proyect:{proyect[0].name}
                  </Typography>
                  <ListTask />
                  <ButtonDelete
                  proyect={proyect[0].id}
                  deletaProyect={deletaProyect}
                  />
                </Paper>
              </Grid>
            </>
          ) : null}
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  );
};

export default Content;
