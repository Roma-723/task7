import { useState } from "react";

const UseStateExample = () => {
  const [state, setState] = useState(0);

  return (
    <div className="flex min-h-[300px] items-center justify-center p-6 rounded-2xl  border border-[#111927] max-w-2xl mx-auto my-8 shadow-2xl">
      <div className="flex items-center gap-8 bg-[#09111f]/50 px-8 py-4 rounded-full border border-[#162235] shadow-inner">
        <button 
          onClick={() => setState(state - 1)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fff5f5] text-[#e53e3e] text-2xl font-bold transition-all hover:bg-red-100 active:scale-90 shadow-md">
          –
        </button>
        <span className="text-3xl font-semibold text-[#4a5568] min-w-[50px] text-center select-none tracking-wider">
          {state}
        </span>
        <button 
          onClick={() => setState(state + 1)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f0fff4] text-[#38a169] text-2xl font-bold transition-all hover:bg-green-100 active:scale-90 shadow-md">
          +
        </button>
      </div>
    </div>
  );
};

export default UseStateExample;