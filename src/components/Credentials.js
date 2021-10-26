import React from "react";

function Credentials() {
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
    </div>
  );
}

export default Credentials;
