import Header from "./components/Header";
import Tuner from "./components/Tuner";
import "./styles/App.css";
import useTunes from "./hooks/useTunes";

function App() {
  const { tunes, tune, setTune } = useTunes();
  return (
    <>
      <Header tunes={tunes} setTune={setTune} />
      <Tuner tune={tune} />
    </>
  );
}

export default App;
