import React, { useState, useCallback } from "react";

type ChildProps = {
  onIncrement: () => void;
  count: number;
};
const Child = React.memo(({ onIncrement, count }: ChildProps) => {
  console.log("Render Child");
  return (
    <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200">
      <p className="text-sm text-gray-400 font-medium">Child компонент</p>
      <div className="text-5xl font-medium tabular-nums">{count}</div>
      <button
        onClick={onIncrement}
        className="px-6 py-2 rounded-lg border border-green-400 text-green-700 hover:bg-green-50 transition"
      >
        +
      </button>
    </div>
  );
});
const ReactMemoExample = () => {
  const [count, setCount] = useState(0);
  const [parentState, setParentState] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <div className="flex flex-col items-center gap-2 p-6 rounded-xl border border-gray-200 w-full max-w-sm">
        <p className="text-sm text-gray-400 font-medium">Parent компонент</p>
        <div className="text-2xl font-medium">{parentState}</div>
        <button
          onClick={() => setParentState((p) => p + 1)}
          className="px-6 py-2 rounded-lg border border-blue-400 text-blue-700 hover:bg-blue-50 transition">
          Parent-ро тағйир деҳ
        </button>
        <p className="text-xs text-gray-400 text-center">
          Parent тағйир ёбад — Child re-render <strong>намешавад</strong>
        </p>
      </div>
      <Child onIncrement={handleIncrement} count={count} />
    </div>
  );
};
export default ReactMemoExample;