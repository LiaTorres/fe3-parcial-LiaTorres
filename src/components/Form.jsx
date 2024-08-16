import React from "react";
import { useState } from "react";
import Card from "./Card";

function Form() {
  const [name, setName] = useState("");
  const [song, setSong] = useState("");

  const [flag, setFlag] = useState(false);

  const validateName = (name) => {
    const withoutSpaces = name.trim();
    return withoutSpaces.length >= 3 ? true : false;
  };

  const validateSong = (song) => {
    const withoutSpaces = song.trim();
    return withoutSpaces.length >= 6 ? true : false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName(name);
    const isSongValid = validateSong(song);

    if (!isNameValid || !isSongValid) {
      alert("Por favor chequea que la información sea correcta");
    } else {
      setFlag(true);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="formContainer">
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="formInput"
          />

          <input
            type="text"
            placeholder="Ingresa tu canción favorita"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            className="formInput"
          />

          <button type="submit" className="formButton">
            Enviar
          </button>
        </form>
      </div>
      {flag ? <Card name={name} song={song} /> : null}
    </div>
  );
}

export default Form;
