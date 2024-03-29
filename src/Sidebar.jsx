const debounce = (fn, delay) => {
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), delay);
  };
};

let clearText = (setInputText) => {
  setInputText("");
};

clearText = debounce(clearText, 700);
const Sidebar = ({ volume, setVolume, setInputText }) => {
  return (
    <div className="drum-machine__sidebar">
      <input
        type="range"
        min="0"
        max="100"
        onChange={(e) => {
          const volumeValue = Number(e.target.value / 100);
          setVolume(volumeValue);
          setInputText(`volume: ${e.target.value}%`);
          clearText(setInputText);
        }}
      ></input>
    </div>
  );
};

export default Sidebar;
