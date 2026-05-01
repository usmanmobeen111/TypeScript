import { createContext, useContext, useReducer, type ChangeEvent, type ReactElement } from "react";

type StateType = {
    count: number;
    text: string;
}
export const initState: StateType = {count: 0, text: ''}

const enum ActionType{
    INCREMENT, 
    DECREMENT,
    SET_TEXT
}

type ReducerAction = {
    type: ActionType
    payload?: string
}

const reducer = (state: StateType, action: ReducerAction): StateType =>{
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


const useCounterContext = (initState: StateType)=>{
     const [state, dispatch] = useReducer(reducer, initState)

    const increment = () => dispatch({type: ActionType.INCREMENT})
    const decrement = () => dispatch({type: ActionType.DECREMENT})

    const handleTextInput = (e: ChangeEvent<HTMLInputElement>)=>{
        dispatch({type: ActionType.SET_TEXT, payload: e.target.value})
    }
    return {state, increment, decrement, handleTextInput}
}

type useCounterContextType = ReturnType<typeof useCounterContext>

const initContextState: useCounterContextType ={
    state: initState,
    increment: ()=>{},
    decrement: ()=>{},
    handleTextInput: (e:ChangeEvent<HTMLInputElement>)=>{},
}
export const CounterContext = createContext<useCounterContextType>(initContextState)


type ChildrenType ={
    children?: ReactElement | undefined
}
export const CounterProvider = ({children, ...initState}:ChildrenType & StateType): ReactElement=>{
return(
    <CounterContext.Provider value={useCounterContext(initState)}>
{children}
    </CounterContext.Provider>
)
}

type useCounterHookType = {
    count: number
    increment: () => void
    decrement: () => void
}


export const useCounter = (): useCounterHookType =>{
    const {state: {count}, increment, decrement} = useContext(CounterContext)
    return {count, increment, decrement}
}

type useCounterTextHookType ={
text: string
handleTextInput: (e: ChangeEvent<HTMLInputElement>)=> void

}

export const useCounterText = (): useCounterTextHookType =>{
    const {state: {text}, handleTextInput} = useContext(CounterContext)
    return {text, handleTextInput}
}