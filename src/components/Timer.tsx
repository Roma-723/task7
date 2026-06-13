import { useRef, useState } from "react";

const TimerExample = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const pad = (n: number) => (n < 10 ? "0" + n : "" + n);

  const startTimer = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };



  

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  const isRunning = intervalRef.current !== null;

  return (
    <div className="flex flex-col items-center gap-8 p-10">
      <span
        className={`text-xs font-medium px-4 py-1 rounded-full ${
          isRunning
            ? "bg-green-100 text-green-700"
            : "bg-gray-100 text-gray-500"
        }`}
      >
        {isRunning ? "Кор мекунад" : "кор намекунад"}
      </span>
      <div className="text-7xl font-medium tabular-nums">
        {pad(seconds)}
      </div>
      <p className="text-sm text-gray-400 -mt-6">секунд</p>

      <div className="flex gap-3">
        <button
          onClick={startTimer}
          disabled={isRunning}
          className="px-6 py-2 rounded-lg border border-green-400 text-green-700 hover:bg-green-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          ▶ Start
        </button>
        <button
          onClick={stopTimer}
          disabled={!isRunning}
          className="px-6 py-2 rounded-lg border border-red-400 text-red-700 hover:bg-red-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          ⏸ Stop
        </button>
      </div>

      <button
        onClick={resetTimer}
        className="text-sm text-gray-400 underline hover:text-gray-600 transition"
      >
        Аз сар оғоз кун
      </button>
    </div>
  );
};

export default TimerExample;  