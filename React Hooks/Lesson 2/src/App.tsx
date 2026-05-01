import Counter from "./Counter"

const App = () => {
  return (
    <div>
      <Counter>{(count)=> <h1>Count is {count}</h1>}</Counter>
    </div>
  )
}

export default App