import React from "react";
import KeyButton from "../components/KeyButton.jsx";
import "../styles/Keys.css";

function Keys({ keys }) {
  return (
    <section className="keys">
        {keys.map((key, index) => (
            <KeyButton key={index} keyName={key} />
        ))}
    </section>
  );
}

export default Keys;
