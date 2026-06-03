import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const UseContextExample = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"} >
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
    </div>
  );
};
export default UseContextExample;