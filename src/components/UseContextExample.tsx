import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const UseContextExample = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-900 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div
        className={`w-100 p-8 rounded-2xl shadow-xl text-center ${
          theme === "dark" ? "bg-slate-800" : "bg-white"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">Theme Switcher</h1>

        <p className="text-lg mb-6">
          Current Theme:
          <span className="font-bold ml-2">{theme}</span>
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setTheme("dark")}
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-950 text-white hover:scale-105 transition-all duration-300">
            <FaMoon />
            Dark
          </button>
          <button
            onClick={() => setTheme("light")}
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-yellow-400 text-black hover:scale-105 transition-all duration-300">
            <FaSun />
            Light
          </button>
        </div>
      </div>
    </div>
  );
};
export default UseContextExample;