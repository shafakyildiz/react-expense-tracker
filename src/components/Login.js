import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Balance from "./Balance";

function Login() {
  return (
    <div>
      <div>
        <span>Username</span>
        <input label="username" type="text" />
      </div>
      <div>
        <span>Password</span>
        <input label="password" type="password" />
      </div>
      <div className="loginBtn">
        <Router>
          <Link to="/balance">
            <Button variant="contained" endIcon={<LoginIcon />}>
              Login
            </Button>
          </Link>

          <Switch>
            <Route exact path="/balance">
              <Balance />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Login;
