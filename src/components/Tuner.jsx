import "../styles/Tuner.css";
import Scale from "./Scale";
import React, { useState, useEffect } from "react";

function Tuner() {
//     const [position, setPosition] = useState(0);

//   useEffect(() => {
//     const handlePosition = () => setPosition(5);
//     return;
//   }, []);

  return (
    <section className="tuner">
      <section id="key-signatures">
        <span id="key">♭</span>
        <span id="key">♯</span>
      </section>
      <section id="scale-path">
        <Scale color="white" />
      </section>
    </section>
  );
}

export default Tuner;
