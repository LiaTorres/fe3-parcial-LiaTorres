/* eslint-disable react/prop-types */
import React from "react";

function Card({ name, song }) {
  return (
    <div className="card">
      <h3>{`Hola ${name}!`}</h3>
      <p>Sabemos que tu canción favorita es:</p>
      <p className="songTitle">{song}</p>
    </div>
  );
}

export default Card;
