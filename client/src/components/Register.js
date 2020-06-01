import React, { useState } from "react";
import uuid from "uuid";
import axiosWithAuth from "../axios/axiosWithAuth";

export default function Register(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = event => {
    setUserName(event.target.value);
  };

  const handleChange2 = event => {
    setPassword(event.target.value);
  };

  const submitUserDetails = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("http://localhost:3300/api/auth/register", {
        username,
        password,
        id: uuid()
      })
      .then(res => {
        props.onSubmit(res.data);
        setUserName("");
        setPassword("");
      })
      .catch(err => {
        console.log("error from the server", err.message);
        alert("error from server", err.message);
      });
  };
  return (
    <div>
      <form onSubmit={submitUserDetails}>
        <label>Username</label>
        <input value={username} onChange={handleChange} type="text" />

        <label>Password</label>
        <input value={password} onChange={handleChange2} type="password" />

        <button>Submit</button>
      </form>
    </div>
  );
}
