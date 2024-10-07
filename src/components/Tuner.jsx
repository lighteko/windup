import "../styles/Tuner.css";
import Keys from "./Keys";
import Scale from "./Scale";
import React, { useState, useEffect } from "react";
import usePitch from "../hooks/usePitch";
import { keyDifference, diffNormalizer } from "../modules/notes";

function Tuner({ tune }) {
  const [selectedKey, setSelectedKey] = useState(null);
  const pitch = usePitch();
  const [scaleState, setScaleState] = useState({
    color: "white",
    diff: 0,
    isIdle: true,
  });

  useEffect(() => {
    if (selectedKey) {
      if (!pitch || pitch === 0) {
        setScaleState({ color: "white", diff: 0, isIdle: true });
        return;
      }
      const difference = keyDifference(selectedKey, pitch);
      const norm = diffNormalizer(difference);
      const color =
        norm.diff <= 1 && norm.diff >= -1 && !norm.isIdle
          ? "#5AD082"
          : "#D43636";
      setScaleState({ color, diff: norm.diff, isIdle: norm.isIdle });
    }
  }, [pitch, selectedKey]);

  return (
    <>
      <section className="tuner">
        <div id="line"></div>
        <section id="key-signatures">
          <span id="key">♭</span>
          <span id="key">♯</span>
        </section>
        <Scale state={scaleState} />
        <div id="bottom"></div>
      </section>
      <section id="keys">
        <Keys keys={tune.left} setSelectedKey={setSelectedKey} />
        <Keys keys={tune.right} setSelectedKey={setSelectedKey} />
      </section>
    </>
  );
}

export default Tuner;
