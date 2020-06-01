import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = event => {
    setUsername(event.target.value);
  };

  const handleChange2 = event => {
    setPassword(event.target.value);
  };

  const submitUserDetails = e => {
    e.preventDefault();
    // console.log("formValue from button", formValues);
    setIsLoading(true);
    axios
      .post("http://localhost:3300/api/auth/login", { username, password })
      .then(res => {
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/jokes");
        setIsLoading(false);
      })
      .catch(err => {
        console.log("error from the server", err.message);
        alert("error from server", err.message);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitUserDetails}>
        <label>Username</label>
        <input value={username} onChange={handleChange} type="text" />

        <label>Password</label>
        <input value={password} onChange={handleChange2} type="password" />
        <button disabled={isLoading}>Submit</button>
      </form>
    </div>
  );
}
