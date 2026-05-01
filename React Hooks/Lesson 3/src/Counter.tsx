import {    type ReactNode } from "react"
import { useCounter } from "./context/CounterContext"
import { useCounterText } from "./context/CounterContext"

type ChildrenProps = {
    children: (num: number) => ReactNode
}



const Counter = ({children}: ChildrenProps) => {
    // const [count, setCount] = useState<number>(0)
    const {increment, decrement, count} = useCounter()
    const {text, handleTextInput} = useCounterText()

  return (
    <div>
        <h1>{children(count)}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <input type="text" onChange={handleTextInput} />
        <h2>{text}</h2>
    </div>
  )
}

export default Counter