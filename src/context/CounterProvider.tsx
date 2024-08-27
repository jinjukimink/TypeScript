import { createContext, memo, useCallback, useMemo } from "react"
import React from "react"
import { useState } from "react"
type TCounterContext={
    count: number; 
}

type TCounterContextFn={
   increment: () => void; 
   decrement: () => void;
}
//공급자 분리//
export const CounterContext = createContext<TCounterContext|null>(null)//count
export const CounterContextfn=createContext<TCounterContextFn|null>(null)//공굽자 하나더//incrment,decre


export const CounterProvider=({
    children,
}:{
    children:React.ReactNode;
})=>{
    //자식에게 줄 것들
    const [count,setCount]=useState(0)
    const increment = useCallback(()=>setCount(count=>count+1),[])
    const decrement = useCallback(()=>setCount(count=>count-1),[])
    const memoFn = useMemo(()=>({increment,decrement}),[])
        
    return (
        <CounterContextfn.Provider value={memoFn}>
            <CounterContext.Provider value={{count}}>
            {children}
            </CounterContext.Provider>
        </CounterContextfn.Provider>
    )
}