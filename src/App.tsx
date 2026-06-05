import { Routes, Route, NavLink, Link } from "react-router-dom";

import UseStateExample from "./components/UseStateExample";
import UseEffectExample from "./components/UseEffectExample";
import UseRefExample from "./components/UseRefExample";
import UseCallbackExample from "./components/UseCallbackExample";
import UseMemoExample from "./components/UseMemoExample";
import ReactMemoExample from "./components/ReactMemoExample";
import UseReducerExample from "./components/UseReducerExample";
import UseContextExample from "./components/UseContextExample";
import UseLocalStorange from "./components/UseLocalStorange";
import Timer from "./components/Timer";
function App() {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 border whitespace-nowrap ${
      isActive
        ? "bg-white text-black border-white shadow-lg shadow-white/5"
        : "bg-slate-900 text-slate-400 border-slate-800/80 hover:text-white hover:border-slate-700 hover:bg-slate-800/50"
    }`;
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-white/10 overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
            React Hooks <span className="text-slate-500 font-normal">Lab</span>
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-7xl p-6">
        <nav className="mb-8 flex flex-nowrap gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x mask-gradient">
          <NavLink to="/use-state" className={navLinkStyle}>
            useState
          </NavLink>
          <NavLink to="/use-effect" className={navLinkStyle}>
            useEffect
          </NavLink>
          <NavLink to="/use-ref" className={navLinkStyle}>
            useRef
          </NavLink>
          <NavLink to="/use-callback" className={navLinkStyle}>
            useCallback
          </NavLink>
          <NavLink to="/use-memo" className={navLinkStyle}>
            useMemo
          </NavLink>
          <NavLink to="/react-memo" className={navLinkStyle}>
            React.memo
          </NavLink>
          <NavLink to="/use-reducer" className={navLinkStyle}>
            useReducer
          </NavLink>
          <NavLink to="/use-context" className={navLinkStyle}>
            useContext
          </NavLink>
          <NavLink to="/use-local-storage" className={navLinkStyle}>
            useLocalStorage
          </NavLink>
          <NavLink to="/timer" className={navLinkStyle}>
            Timer
          </NavLink>
        </nav>
        <main className="relative rounded-2xl border border-slate-900 bg-slate-900/30 p-8 backdrop-blur-sm shadow-2xl">
          <div className="absolute -top-40 -right-40 -z-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-2xl py-8">
                  <h1 className="text-4xl font-bold mb-4">
                    React Hooks Lab
                  </h1>
                  <p className="text-slate-400">
                    Лоиҳа барои омӯзиши React Hooks.
                  </p>
                </div>
              }
            />
            <Route path="/use-state" element={<UseStateExample />} />
            <Route path="/use-effect" element={<UseEffectExample />} />
            <Route path="/use-ref" element={<UseRefExample />} />
            <Route path="/use-callback" element={<UseCallbackExample />} />
            <Route path="/use-memo" element={<UseMemoExample />} />
            <Route path="/react-memo" element={<ReactMemoExample />} />
            <Route path="/use-reducer" element={<UseReducerExample />} />
            <Route path="/use-context" element={<UseContextExample />} />
            <Route
              path="/use-local-storage"
              element={<UseLocalStorange />}
            />
            <Route path="/timer" element={<Timer />} />
            <Route
              path="*"
              element={
                <div className="text-center py-10">
                  <h1 className="text-4xl font-bold">404</h1>
                  <p className="text-slate-400 mt-2">
                    Саҳифа ёфт нашуд
                  </p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;