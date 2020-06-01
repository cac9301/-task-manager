import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import NewAccount from "./components/login/NewAccount";
import Dashboard from "./components/dashboard/Dashboard";

//provaiders
import tokenAuth from "./config/tokenAuth";
import ProyectState from "./context/proyects/ProyectState";
import TaskState from "./context/task/TaskState";
import AuthState from "./context/authcontext/Authstate";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  //console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <ProyectState>
      <TaskState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/new-account" component={NewAccount} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </AuthState>
      </TaskState>
    </ProyectState>
  );
}

export default App;
