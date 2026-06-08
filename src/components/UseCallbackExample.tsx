import { useState, useCallback } from "react";

function App() {
  const [name, setName] = useState("");

  const showName = useCallback(() => {
    alert(name);
  }, [name]);
  console.log("name");
  return (
    <div className="flex justify-center">
      <div className="w-100 shadow-2xl h-30">
        <input className="w-[90%] ml-5 h-10 border pl-2 border-blue-700 rounded-[7px] outline-none placeholder:pl-2" placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />


        <button className="bg-blue-800 w-[90%] ml-5 mt-5 h-10 rounded-[7px]" onClick={showName}>
          save
        </button>
      </div>
    </div>
  );
}

export default App;