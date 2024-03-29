import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Keypad from "./Keypad";
import "./App.scss";

const SOUND_GROUP_ONE = [
  {
    keyCode: 81,
    key: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    color: "orange",
  },
  {
    keyCode: 87,
    key: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    color: "orange",
  },
  {
    keyCode: 69,
    key: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    color: "orange",
  },
  {
    keyCode: 65,
    key: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    color: "blue",
  },
  {
    keyCode: 83,
    key: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    color: "blue",
  },
  {
    keyCode: 68,
    key: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    color: "green",
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    color: "green",
  },
  {
    keyCode: 88,
    key: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    color: "green",
  },
  {
    keyCode: 67,
    key: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    color: "blue",
  },
];

function App() {
  const [soundGroup, setSoundGroup] = useState(SOUND_GROUP_ONE);
  const [power, setPower] = useState(true);
  const [inputText, setInputText] = useState("");
  const [volume, setVolume] = useState(0.5);

  return (
    <div id="drum-machine" className="drum-machine">
      <div className="drum-machine__container">
        <Header
          power={power}
          setPower={setPower}
          inputText={inputText}
          setInputText={setInputText}
        />
        <Sidebar
          volume={volume}
          setVolume={setVolume}
          setInputText={setInputText}
        />
        <div className="drum-machine__keypads">
          {soundGroup.map((sound) => (
            <Keypad
              sound={sound}
              key={sound.id}
              power={power}
              setInputText={setInputText}
              volume={volume}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
