import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
//import Drawer from "@material-ui/core/Drawer";
//import AppBar from "@material-ui/core/AppBar";
import useStyles from "../dashboard/styles/stylesDashboard";
import SideBar from "../dashboard/components/SideBar";
import Content from "../dashboard/components/Content";
import Authcontext from "../../context/authcontext/Authcontext"

export default function Dashboard() {

  const classes = useStyles();
  const authcontext =React.useContext(Authcontext)
  const {getUser,user}=authcontext
  useEffect(() => {
    getUser()
    //eslint-disable-next-line
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SideBar
        user={user}
      />
      <Content />
    </div>
  );
}
