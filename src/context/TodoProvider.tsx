import { createContext, useMemo } from "react";
import { useState } from "react";

export type TTodo={
    id:number
    text:string;
    isComplete:boolean
}
type TTodoContext={
    todos:TTodo[];
}
type TTodoContextFn={
    addTodo:(text:string)=>void;
    toggleTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;
} 

export const TodoContext = createContext<TTodoContext|null>(null)
export const TodoContextFn=createContext<TTodoContextFn|null>(null)

const TodoProvider = ({children}:{
    children:React.ReactNode
}) => {
    
    const [todos,setTodos]=useState<TTodo[]>([]);

    const addTodo=(text:string)=>{
        setTodos(todos=>[...todos,{id:Math.random(),text,isComplete:false}])
        console.log(todos)
    }//첫 등록

    const toggleTodo=(id:number)=>{
        //객체 병합
        setTodos(todos=>todos.map(todo=> todo.id===id?
            {...todo,isComplete: !todo.isComplete}:todo
        ))
    }

    const deleteTodo=(id:number)=>{
        setTodos((todos)=>todos.filter(todo=>todo.id !==id))
    }
    //const memo=useMemo(()=>{{todos,addTodo,toggleTodo,deleteTodo}})
    const memoFn = useMemo(() => ({addTodo, toggleTodo, deleteTodo }), []);

  return (
    <>
        <TodoContextFn.Provider value={memoFn}>
            <TodoContext.Provider value={{todos}}>  
                {children}
            </TodoContext.Provider>
        </TodoContextFn.Provider>
    </>
  );
}
export default TodoProvider