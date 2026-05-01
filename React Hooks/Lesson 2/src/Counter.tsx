import { useReducer,  type ChangeEvent, type ReactNode } from "react"
const initState = {count: 0, text: ''}

const enum ActionType{
    INCREMENT, 
    DECREMENT,
    SET_TEXT
}

type ReducerAction = {
    type: ActionType
    payload?: string
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState =>{
    switch (action.type) {
        case ActionType.INCREMENT:
            return {...state, count: state.count + 1}
        case ActionType.DECREMENT:
            return {...state, count: state.count - 1}
        case ActionType.SET_TEXT:
            return {...state, text: action.payload || ''}
        default:
            throw new Error("Error you sucker")
    }
}

type ChildrenProps = {
    children: (num: number) => ReactNode
}



const Counter = ({children}: ChildrenProps) => {
    // const [count, setCount] = useState<number>(0)
    const [state, dispatch] = useReducer(reducer, initState)

    const increment = () => dispatch({type: ActionType.INCREMENT})
    const decrement = () => dispatch({type: ActionType.DECREMENT})

    const handleTextInput = (e: ChangeEvent<HTMLInputElement>)=>{
        dispatch({type: ActionType.SET_TEXT, payload: e.target.value})
    }
  return (
    <div>
        <h1>{children(state.count)}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <input type="text" onChange={handleTextInput} />
        <h2>{state.text}</h2>
    </div>
  )
}

export default Counter