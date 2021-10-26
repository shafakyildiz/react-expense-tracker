import React from "react";
import Credentials from "./Credentials";
import LoginBtn from "./LoginBtn";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <Credentials />
      <LoginBtn />
    </div>
  );
}

export default Home;
