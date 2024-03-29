import { useState, useEffect, useRef } from "react";

const Keypad = ({ sound, power, setInputText, volume }) => {
  const [drumHit, setDrumHit] = useState(false);
  const audioEl = useRef();

  const playSound = (text) => {
    setDrumHit(true);
    setTimeout(() => setDrumHit(false), 100);

    const audio = audioEl.current;
    if (audio && power) {
      audio.currentTime = 0;

      audio.volume = volume;
      audio.play();
      setInputText(text);
    }
  };

  const handleClick = () => {
    playSound(sound.id);
  };

  const handleKeyDown = (ev) => {
    if (ev.keyCode === sound.keyCode) {
      playSound(sound.id);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return function cleanUp() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [power, volume]);

  let btnClass = "drum-pad";
  if (drumHit) btnClass += " drum-pad--hit";
  if (power) btnClass += " drum-pad--on";

  return (
    <>
      <button
        onClick={handleClick}
        id={sound.id}
        className={btnClass}
        data-color={sound.color}
      >
        <span> {sound.key}</span>

        <audio
          ref={audioEl}
          className="clip"
          id={sound.key}
          src={sound.url}
        ></audio>
      </button>
    </>
  );
};

export default Keypad;
