import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <>
            <h1>Count is {count}</h1>
            <button onClick={()=>setCount(prev => prev + 1)}>Add</button>
            <button onClick={()=>setCount(prev => prev - 1)}>Subtract</button>
        </>
    )
}

export default Counter