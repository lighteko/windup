import React from "react";
import KeyButton from "../components/KeyButton.jsx";
import "../styles/Keys.css";

function Keys({ keys, setSelectedKey, setAudioBuffer }) {
  return (
    <section className="keys">
      {keys.map((key, index) => (
        <KeyButton index={index} keyName={key} setSelected={setSelectedKey} setAudioBuffer={setAudioBuffer}/>
      ))}
    </section>
  );
}

export default Keys;
