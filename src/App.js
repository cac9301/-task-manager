import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import NewAccount from "./components/login/NewAccount";
import Dashboard from "./components/dashboard/Dashboard";

//provaiders

import ProyectState from "./context/proyects/ProyectState";
import TaskState from "./context/task/TaskState";

function App() {
  return (
    <ProyectState>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/new-account" component={NewAccount} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
        </TaskState>
    </ProyectState>
  );
}

export default App;
