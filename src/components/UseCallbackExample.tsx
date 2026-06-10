import { useState, useCallback } from "react";

function App() {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState("");

  const showName = useCallback(() => {
    alert(name);
  }, [name]);

  const saveName = () => {
    setSaved(name);
  };

  const resetName = useCallback(() => {
    setName("");
    setSaved("");
  }, []);
  
  console.log("fistname");

  return (
    <div className="flex justify-center mt-10">
      <div className="w-80 shadow-2xl p-5 rounded-xl">
        <input
          className="w-full h-10 border pl-2 border-blue-700 rounded-[7px] outline-none placeholder:pl-2"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="bg-blue-800 text-white w-full mt-3 h-10 rounded-[7px]"
          onClick={showName}
        >
          Show
        </button>

        <button
          className="bg-green-700 text-white w-full mt-3 h-10 rounded-[7px]"
          onClick={saveName}
        >
          Save
        </button>

        <button
          className="bg-red-600 text-white w-full mt-3 h-10 rounded-[7px]"
          onClick={resetName}
        >
          Reset
        </button>

        {saved && (
          <p className="mt-4 text-center text-gray-700">
            Saved: <strong>{saved}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;