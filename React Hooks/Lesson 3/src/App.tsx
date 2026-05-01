import Counter from "./Counter"
import { CounterProvider } from "./context/CounterContext"
import { initState } from "./context/CounterContext"

const App = () => {
  return (
    <CounterProvider count={initState.count} text={initState.text}>
      <Counter>{(count)=> <h1>Count is {count}</h1>}</Counter>
    </CounterProvider>
  )
}

export default App