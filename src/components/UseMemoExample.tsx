import { useMemo, useState } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const square = useMemo(() => {
    console.log("Calculated!");
    return count * count;
  }, [count]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-sm border border-slate-100">
        <h1 className="text-2xl font-black text-center text-slate-800 mb-8 tracking-tight">
          useMemo Example
        </h1>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Count
            </p>
            <p className="text-4xl font-extrabold text-slate-700">{count}</p>
          </div>

          <div className="bg-blue-50/50 p-4 rounded-2xl text-center border border-blue-50">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
              Square
            </p>
            <p className="text-4xl font-extrabold text-blue-600">{square}</p>
          </div>
        </div>
        <button
          onClick={() => setCount(count + 1)}
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all duration-200"
        >
          Increment +
        </button>
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-slate-400 font-medium">
              Text
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-slate-200 rounded-2xl p-4 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-700"
          />
          {text && (
            <div className="bg-emerald-50 text-emerald-700 p-4 rounded-2xl text-center font-medium border border-emerald-100">
              {text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default UseMemoExample;