import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import useStyles from "../dashboard/styles/stylesDashboard";
import SideBar from "../dashboard/components/SideBar";
import Content from "../dashboard/components/Content";


export default function Dashboard() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <SideBar/>
      <Content />
    </div>
  );
}
