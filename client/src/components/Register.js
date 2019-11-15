import React, { useState } from "react";
import uuid from "uuid";
import axiosWithAuth from "../axios/axiosWithAuth";

export default function AddFriendForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleChange2 = event => {
    setAge(event.target.value);
  };

  const handleChange3 = event => {
    setEmail(event.target.value);
  };

  const submitUserDetails = e => {
    e.preventDefault();
    // console.log("formValue from button", formValues);

    axiosWithAuth()
      .post("http://localhost:5001/api/friends", {
        name,
        age,
        email,
        id: uuid()
      })
      .then(res => {
        props.onSubmit(res.data);
        setName("");
        setEmail("");
        setAge("");
      })
      .catch(err => {
        console.log("error from the server", err.message);
        alert("error from server", err.message);
      });
  };
  return (
    <div>
      <form onSubmit={submitUserDetails}>
        <label>Name</label>
        <input value={name} onChange={handleChange} type="text" />

        <label>Age</label>
        <input value={age} onChange={handleChange2} type="number" />

        <label>Email</label>
        <input value={email} onChange={handleChange3} type="email" />
        <button>Submit</button>
      </form>
    </div>
  );
}
