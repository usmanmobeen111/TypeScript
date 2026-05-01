import { useState, useEffect, useCallback, useMemo, useRef } from "react"

interface User {
  id: number,
  username: string
}

const App = () => {
  // const [count, seCount] = useState<number | null>(0)
  // const [user, setUser] = useState<User | null>(null)
  // const [user, setUser] = useState<User[] | null>([])
  const [count, seCount] = useState<number>(0)
  const [user, setUser] = useState<User | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)
  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log("Mounting")
    console.log("Users: ", user)


    return () => {
      console.log("Unmounting")
    }
  }, [user])

  const addOne = useCallback(
    () => {
      seCount(prev => prev + 1)
    },
    []
  )

  type fibFunc = (n: number) => number

  const fibonacci: fibFunc = (n) => {
    if (n < 2) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
  }

  const number: number = 12
  const memoizedFib = useMemo<number>(() => fibonacci(number), [number])
  return (
    <>
      <h1>{count}</h1>
      <button onClick={addOne}>Add</button>
      <button onClick={() => seCount(prev => prev - 1)}>Subtract</button>
      <span>{memoizedFib}</span>
      <input ref={inputRef} type="text" />
    </>
  )
}

export default App