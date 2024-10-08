import React from "react";
import KeyButton from "../components/KeyButton.jsx";

function Keys({ keys, setSelectedKey }) {
  return (
    <section className="keys">
      {keys.map((key, index) => (
        <KeyButton key={index} keyName={key} setSelected={setSelectedKey} />
      ))}
    </section>
  );
}

export default Keys;
