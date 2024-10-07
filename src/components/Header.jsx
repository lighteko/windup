import "../styles/Header.css";

function Header({ tunes, setTune }) {
  return (
    <>
      <header>
        <h1>WIND UP Beta</h1>
        <select onChange={(e) => setTune(e.target.value)}>
          {Object.keys(tunes).map((tuneName) => (
            <option key={tuneName} value={tuneName}>
              {tuneName}
            </option>
          ))}
        </select>
      </header>
    </>
  );
}

export default Header;
