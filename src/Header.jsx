const Header = ({ power, setPower, inputText, setInputText }) => {
  return (
    <div className="drum-machine__header">
      <button
        className={`drum-machine__power-wrapper pushable`}
        onClick={() => {
          setPower(!power);
          setInputText("");
        }}
      >
        <p className="drum-machine__power-text front">Power</p>

        <span className={power ? "on" : "off"}></span>
      </button>

      <p className="drum-machine__display" type="text" id="display">
        {power && inputText}
      </p>
    </div>
  );
};

export default Header;
