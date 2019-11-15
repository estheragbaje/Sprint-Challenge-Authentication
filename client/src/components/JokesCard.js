import React from "react";

export default function UserCard(props) {
  const { joke, id } = props.jokes;

  return (
    <div>
      <h2>{joke}</h2>
      <p>{id}</p>
    </div>
  );
}
