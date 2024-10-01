import "../styles/Tuner.css";
import Keys from "./Keys";
import Scale from "./Scale";
import React, { useState, useEffect } from "react";

function Tuner() {
  //     const [position, setPosition] = useState(0);

  //   useEffect(() => {
  //     const handlePosition = () => setPosition(5);
  //     return;
  //   }, []);

  return (
    <>
      <section className="tuner">
        <div id='line'></div>
        <section id="key-signatures">
          <span id="key">♭</span>
          <span id="key">♯</span>
        </section>
        <section id="scale-path">
          <Scale color="white" />
        </section>
        <div id="bottom"></div>
      </section>
      <section id="keys">
        <Keys keys={["E", "A", "D"]} />
        <Keys keys={["G", "B", "E"]} />
      </section>
    </>
  );
}

export default Tuner;
