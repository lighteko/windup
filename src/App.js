import Header from "./components/Header";
import Tuner from "./components/Tuner";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [currentTune, setTune] = useState({
    left: ["DN3", "AN2", "EN2"],
    right: ["GN3", "BN3", "EN4"],
  });
  const TUNES = {
    Standard: ["EN2", "AN2", "DN3", "GN3", "BN3", "EN4"],
    DropD: ["DN2", "AN2", "DN3", "GN3", "BN3", "EN4"],
    DADGAD: ["DN2", "AN2", "DN3", "GN3", "AN3", "DN4"],
    OpenD: ["DN2", "AN2", "DN3", "FS3", "AN3", "DN4"],
    OpenG: ["DN2", "GN2", "DN3", "GN3", "BN3", "DN4"],
    OpenC: ["CN2", "GN2", "CN3", "GN3", "CN4", "EN4"],
    OpenE: ["EN2", "BN2", "EN3", "GS3", "BN3", "EN4"],
    OpenA: ["EN2", "AN2", "EN3", "AN3", "CS4", "EN4"],
    HalfStepDown: ["DS2", "GS2", "CS3", "FS3", "AS3", "DS4"],
    FullStepDown: ["DN2", "GN2", "CN3", "FN3", "AN3", "DN4"],
    HalfStepUp: ["DS2", "GS2", "CS3", "FS3", "AS3", "DS4"],
    FullStepUp: ["DN2", "GN2", "CN3", "FN3", "AN3", "DN4"],
    DropC: ["CN2", "GN2", "CN3", "FN3", "AN3", "DN4"],
  };

  return (
    <>
      <Header tunes={Object.keys(TUNES)} tune="Standard" setTune={setTune} />
      <Tuner tune={currentTune} />
    </>
  );
}

export default App;
