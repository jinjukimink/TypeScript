import { useState } from "react";
import { TTodo } from "../../types/todo";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

const Todo = () => {
    
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


    return (
        <>
        <div className="item-middle bg-black">
            <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
            <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
            <p className="text-sm mb-5">Please enter your details to continue.</p>
            <TodoEditor addTodo={addTodo}/>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            </div>
        </div>
        </>
    )
    };
export default Todo;
