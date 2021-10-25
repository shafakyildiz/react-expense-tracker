import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Expenses from "./Expenses";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

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
        <Button variant="contained" endIcon={<LoginIcon />}>
          Login
        </Button>
      </div>
      {/* <Router>
        <Link to="/home">
          <button>Login</button>
          <img src="" alt="" />
        </Link>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/expenses">
            <Expenses />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default Login;
