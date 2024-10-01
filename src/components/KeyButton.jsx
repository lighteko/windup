import React from "react";
import "../styles/KeyButton.css";

function KeyButton({ keyName }) {
  return (
    <div id="key-button-container">
      <input type="radio" name="key" value={keyName} className="key-button" />
      <label htmlFor={keyName} id="key-button-text">{keyName}</label>
    </div>
  );
}

export default KeyButton;
