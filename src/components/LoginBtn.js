import React from "react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Balance from "./Balance";

function Login() {
  return (
    <div className="loginBtn">
      <Button variant="contained" endIcon={<LoginIcon />}>
        <Link to="/balance">Login</Link>
      </Button>
      <Router>
        <Switch>
          <Route exact path="/balance">
            <Balance />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Login;
