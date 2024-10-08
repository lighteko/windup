import React from "react";
import "../styles/KeyButton.css";
import { cleanNoteName } from "../modules/notes";
import useAudio from "../hooks/useAudio";

function KeyButton({ keyName, index, setSelected }) {
  const { playNote } = useAudio(`${process.env.PUBLIC_URL}/guitar-c4.wav`);

  return (
    <div id="key-button-container">
      <input
        type="radio"
        name="key"
        id={index + keyName}
        value={keyName}
        className="key-button"
        onClick={() => {
          setSelected(keyName);
          playNote(keyName);
        }}
      />
      <label htmlFor={index + keyName} id="key-button-text">
        {cleanNoteName(keyName)}
      </label>
    </div>
  );
}

export default KeyButton;
