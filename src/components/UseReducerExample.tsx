import { useReducer } from "react";

type Action = "increment" | "decrement" | "reset";

const reducer = (state: number, action: Action): number => {
  switch (action) {
    case "increment": return state + 1;
    case "decrement": return state - 1;
    case "reset": return 0;
  }
};

const UseReducerExample = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <div className="text-7xl font-medium tabular-nums">{count}</div>
      <div className="flex gap-3">
        <button
          onClick={() => dispatch("decrement")}
          className="px-6 py-2 rounded-lg border border-red-400 text-red-700 hover:bg-red-50 transition"
        >
          −
        </button>
        <button
          onClick={() => dispatch("reset")}
          className="px-6 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 transition">
          Reset
        </button>
        <button
          onClick={() => dispatch("increment")}
          className="px-6 py-2 rounded-lg border border-green-400 text-green-700 hover:bg-green-50 transition">
          +
        </button>
      </div>
    </div>
  );
};

export default UseReducerExample;