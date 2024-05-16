import { useState } from "react";

export default function useModes(initialMode = "cover") {
  const modes = ["cover", "contain", "stretch", "center"];
  const [indexModes, setIndexModes] = useState(modes.indexOf(initialMode));
  const [currentMode, setCurrentMode] = useState(initialMode);

  const pressedModes = () => {
    const nbMode = (indexModes + 1) % 4;
    setIndexModes(nbMode);
    setCurrentMode(modes[nbMode]);
  };

  return { currentMode, pressedModes };
}
