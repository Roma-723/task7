import { useState, useCallback } from "react";

function App() {
  const [name, setName] = useState("");

  const showName = useCallback(() => {
    alert(name);
  }, [name]);
  console.log("name");

  return (
    <div>
      <input placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> 
      <button onClick={showName}>
        Nishon dodani nom
      </button>
    </div>
  );
}

export default App;