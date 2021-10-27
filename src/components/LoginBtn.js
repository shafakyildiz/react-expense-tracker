import React from "react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginBtn">
      <Button variant="contained" endIcon={<LoginIcon />}>
        <Link to="/balance">Login</Link>
      </Button>
    </div>
  );
}

export default Login;
