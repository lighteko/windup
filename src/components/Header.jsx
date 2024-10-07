import "../styles/Header.css";

function Header({ tunes, setTune, tune }) {
  return (
    <>
      <header>
        <h1>WIND UP</h1>
        <span>{tune}</span>
      </header>
    </>
  );
}

export default Header;
