import React from "react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Expenses from "./Expenses";

function Login() {
  return (
    <div className="loginBtn">
      <Button variant="contained" endIcon={<LoginIcon />}>
        <Link to="/expenses">Login</Link>
      </Button>
      <Router>
        <Switch>
          <Route exact path="/expenses">
            <Expenses />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Login;
