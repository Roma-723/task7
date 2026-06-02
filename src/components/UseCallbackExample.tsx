import { useCallback, useState } from "react"

const UseCallbackExample = () => {
  const [state, setState] = useState(0)

  const increament = useCallback(() => {
    setState(state + 1)
  }, [state])
  const decreament = useCallback(() => {
    setState(state - 1)
  }, [state])
  return (
    <div className="flex justify-center">
      <div className="flex gap-10 ">
        <p className="text-2xl cursor-pointer w-10 h-10 border items-center text-center rounded-[50%] " onClick={() => increament()}>+</p>
        <p className="text-3xl font-bold">{state}</p>
        <p className="text-2xl border w-10 h-10 items-center text-center rounded-[50%] cursor-pointer" onClick={() => decreament()}>-</p>
      </div>
    </div>
  )
}

export default UseCallbackExample
