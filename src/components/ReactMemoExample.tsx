import React, { useState } from "react";

const ReactMemoExample = React.memo(() => {
  console.log("Render Child");

  const [state, setState] = useState(0)
  return (
    <div>
      <p onClick={() => setState(state + 1)}>+</p>
      <p>{state}</p>
    </div>
  );
});

export default ReactMemoExample;