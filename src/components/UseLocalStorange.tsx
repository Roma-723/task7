import useLocalStorage from "../hooks/useLocalStorage";

const UseLocalStorange = () => {
  const [name, setName] = useLocalStorage("name", "");
  console.log("firsName");
  
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">useLocalStorage</h1>

      <p className="text-slate-400">
        Ин custom hook state-ро бо localStorage синхрон мекунад.
      </p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Номи худро ворид кунед"
        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-500"
      />

      <div className="rounded-lg border border-slate-700 p-4">
        <h2 className="font-semibold">Қимати захирашуда:</h2>
        <p className="mt-2 text-xl">{name || "Маълумот нест"}</p>
      </div>
    </div>
  );
};

export default UseLocalStorange;