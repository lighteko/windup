import Header from "./components/Header";
import Keys from "./components/Keys";
import Tuner from "./components/Tuner";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Tuner />
      <Keys keys={["E", "A", "D", "G", "B", "E4"]} />
    </>
  );
}

export default App;
