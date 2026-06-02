import { Routes, Route, Link } from "react-router-dom";

import UseStateExample from "./components/UseStateExample";
import UseEffectExample from "./components/UseEffectExample";
import UseRefExample from "./components/UseRefExample";
import UseCallbackExample from "./components/UseCallbackExample";
import UseMemoExample from "./components/UseMemoExample";
import ReactMemoExample from "./components/ReactMemoExample";
import UseReducerExample from "./components/UseReducerExample";
import UseContextExample from "./components/UseContextExample";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <h1 className="text-3xl font-bold">
            React Hooks Learning Project
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-7xl p-6">
        <nav className="mb-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-slate-700"
          >
            Home
          </Link>

          <Link
            to="/use-state"
            className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-500"
          >
            useState
          </Link>

          <Link
            to="/use-effect"
            className="rounded-lg bg-green-600 px-4 py-2 hover:bg-green-500"
          >
            useEffect
          </Link>

          <Link
            to="/use-ref"
            className="rounded-lg bg-purple-600 px-4 py-2 hover:bg-purple-500"
          >
            useRef
          </Link>

          <Link
            to="/use-callback"
            className="rounded-lg bg-pink-600 px-4 py-2 hover:bg-pink-500"
          >
            useCallback
          </Link>

          <Link
            to="/use-memo"
            className="rounded-lg bg-orange-600 px-4 py-2 hover:bg-orange-500"
          >
            useMemo
          </Link>

          <Link
            to="/react-memo"
            className="rounded-lg bg-cyan-600 px-4 py-2 hover:bg-cyan-500"
          >
            React.memo
          </Link>

          <Link
            to="/use-reducer"
            className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-500"
          >
            useReducer
          </Link>

          <Link
            to="/use-context"
            className="rounded-lg bg-yellow-600 px-4 py-2 hover:bg-yellow-500"
          >
            useContext
          </Link>

          <Link
            to="/timer"
            className="rounded-lg bg-emerald-600 px-4 py-2 hover:bg-emerald-500"
          >
            Timer
          </Link>
        </nav>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2 className="mb-3 text-2xl font-bold">
                    React Hooks
                  </h2>

                  <p className="text-slate-400">
                    Выберите раздел сверху.
                  </p>
                </div>
              }
            />

            <Route
              path="/use-state"
              element={<UseStateExample />}
            />

            <Route
              path="/use-effect"
              element={<UseEffectExample />}
            />

            <Route
              path="/use-ref"
              element={<UseRefExample />}
            />

            <Route
              path="/use-callback"
              element={<UseCallbackExample />}
            />

            <Route
              path="/use-memo"
              element={<UseMemoExample />}
            />

            <Route
              path="/react-memo"
              element={<ReactMemoExample />}
            />

            <Route
              path="/use-reducer"
              element={<UseReducerExample />}
            />

            <Route
              path="/use-context"
              element={<UseContextExample />}
            />

            <Route
              path="/timer"
              element={<Timer />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;