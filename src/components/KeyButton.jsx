import React from "react";
import "../styles/KeyButton.css";

function KeyButton({ keyName, index }) {
  return (
    <div id="key-button-container">
      <input
        type="radio"
        name="key"
        id={index + keyName}
        value={keyName}
        className="key-button"
      />
      <label htmlFor={index + keyName} id="key-button-text">
        {keyName}
      </label>
    </div>
  );
}

export default KeyButton;
