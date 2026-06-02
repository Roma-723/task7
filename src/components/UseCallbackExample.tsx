import { useCallback, useState } from "react"

const UseCallbackExample = () => {
  const [state, setState] = useState(0)

  const increament = useCallback(() => {
    setState(state + 1)
  }, [])
  return (
    <div>
     <p>+</p>
     <p>{state}</p>
     <p>-</p>
    </div>
  )
}

export default UseCallbackExample
