import React, { useState, useContext } from "react";
import { isDarkContext } from "../../helper/Context";
// import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { isDark, setIsDark } = useContext(isDarkContext);
  // const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  // const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          isDark ? setIsDark(false) : setIsDark(true);
          isDark
            ? localStorage.setItem("isDark", false)
            : localStorage.setItem("isDark", true);
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};
export default ToggleSwitch;
