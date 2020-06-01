import React, { useEffect, useState } from "react";
import axiosWithAuth from "../axios/axiosWithAuth";
import JokesCard from "./JokesCard";

const JokesList = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:3300/api/jokes")
      .then(res => {
        setJokes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Welcome to Dad Jokes!</h1>
      <JokesCard onSubmit={jokes => setJokes(jokes)} />
      {jokes.map(item => (
        <>
          <h3>{item.joke}</h3>
        </>
      ))}
    </div>
  );
};

export default JokesList;
