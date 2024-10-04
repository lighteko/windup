import React from "react";
import "../styles/KeyButton.css";
import { loadAudioFile, playAudioWithFrequency } from "../modules/audio";
import { note2Freq, cleanNoteName } from "../modules/notes";

function KeyButton({ keyName, index, setSelected }) {
  const audio = loadAudioFile(`${process.env.PUBLIC_URL}/guitar-c4.wav`);

  const playNote = (note) => {
    setSelected(note);
    const freq = note2Freq(note);
    audio.then((audioBuffer) => {
      playAudioWithFrequency(audioBuffer, freq);
    });
  };

  return (
    <div id="key-button-container">
      <input
        type="radio"
        name="key"
        id={index + keyName}
        value={keyName}
        className="key-button"
        onClick={() => playNote(keyName)}
      />
      <label htmlFor={index + keyName} id="key-button-text">
        {cleanNoteName(keyName)}
      </label>
    </div>
  );
}

export default KeyButton;
