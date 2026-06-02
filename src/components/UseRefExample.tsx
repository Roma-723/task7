import { useCallback, useRef, useState } from "react";
function UseRefExample() {
  const countRef = useRef(0);
  const [state, setState] = useState(0);
  const increaseRef = () => {
    countRef.current++;
  };
  const increaseState = useCallback(() => {
    setState((prev) => prev + 1);
  }, []);
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
          useRef Example
        </h1>
        <div className="bg-slate-50 rounded-2xl p-6 text-center mb-6">
          <p className="text-slate-500 text-sm mb-2">
            useState Value
          </p>
          <h2 className="text-5xl font-bold text-blue-600">
            {state}
          </h2>
        </div>
        <div className="grid gap-4">
          <button
            onClick={increaseState}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:scale-105 transition">
            Increment State
          </button>
          <button
            onClick={increaseRef}
            className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:scale-105 transition">
            Increment Ref
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseRefExample;