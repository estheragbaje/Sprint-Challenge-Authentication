import React, { useState, useEffect } from "react";
import axios from "axios";
import JokesCard from "./JokesCard";

export default function JokesList(props) {
  const [jokesData, setJokesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3300/api/jokes")
      .then(res => {
        console.log(res.data);
        setJokesData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {jokesData.map(joke => (
        <JokesCard key={joke.id} joke={joke} />
      ))}
    </div>
  );
}
