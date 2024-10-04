import "../styles/Tuner.css";
import Keys from "./Keys";
import Scale from "./Scale";
import React, { useState, useEffect } from "react";
import useAudioBuffer from "../hooks/useAudioBuffer";
import harmonicProductSpectrum from "../modules/HPS";
import { keyDifference, diffNormalizer } from "../modules/notes";
import Canvas from "./canvas";

function Tuner() {
  const [selectedKey, setSelectedKey] = useState(null);
  const [scaleMargin, setScaleMargin] = useState(0);
  const [scaleStatus, setScaleStatus] = useState(false);
  const [scaleColor, setScaleColor] = useState("white");
  const audioBuffer = useAudioBuffer();

  useEffect(() => {
    if (audioBuffer && selectedKey) {
      const frequency = harmonicProductSpectrum(audioBuffer, 5);
      const difference = keyDifference(selectedKey, frequency);
      const norm = diffNormalizer(difference);
      setScaleMargin(norm.diff);
      setScaleStatus(norm.status);
      setScaleColor(norm.diff <= 10 && norm.diff >= -10 && !norm.status ? "#5AD082" : "#D43636");
    }
  }, [audioBuffer, selectedKey]);

  return (
    <>
      <section className="tuner">
        <div id="line"></div>
        <section id="key-signatures">
          <span id="key">♭</span>
          <span id="key">♯</span>
        </section>
        <Scale color={scaleColor} margin={scaleMargin} status={scaleStatus}/>
        <div id="bottom"></div>
        <Canvas />
      </section>
      <section id="keys">
        <Keys keys={["DN3", "AN2", "EN2"]} setSelectedKey={setSelectedKey} />
        <Keys keys={["GN3", "BN3", "EN4"]} setSelectedKey={setSelectedKey} />
      </section>
    </>
  );
}

export default Tuner;
