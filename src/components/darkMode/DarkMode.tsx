import { useContext } from "react";
import Moon from "../../assets/SVG/Moon";
import "./DarkMode.css";
import { DarkModeContext } from "../../context/Context";
import Sun from "../../assets/SVG/Sun";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className="d-l-mode" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <Sun /> : <Moon />}
    </div>
  );
};

export default DarkMode;
