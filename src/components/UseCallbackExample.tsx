import { useCallback, useState } from "react"

const UseCallbackExample = () => {
  const [state, setState] = useState(1)

  const loop = useCallback((limit: number) => {
    let result = ""
    for (let i = 1; i <= limit; i++) {
      result += i * i + " "
    }
    return result
  }, [])

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <p className="text-lg text-blue-400">{loop(state)}</p>
      <button
        onClick={() => setState(prev => prev + 1)}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        +1
      </button>
    </div>
  )
}

export default UseCallbackExample