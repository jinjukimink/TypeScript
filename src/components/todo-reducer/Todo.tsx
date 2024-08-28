import { useReducer} from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { todoReducer } from "../../reducer/todoReducer";

const Todo = () => {
    const [todos,dispatch]= useReducer(todoReducer,[]);//(리듀서,초기상태)
    return (
        <>
        <div className="item-middle bg-black">
            <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
            <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
            <p className="text-sm mb-5">Please enter your details to continue.</p>
            {/* <TodoEditor addTodo={addTodo}/> */}
            <TodoEditor dispatch={dispatch}/>
            <TodoList todos={todos} dispatch={dispatch}/>
            </div>
        </div>
        </>
    )
    };
export default Todo;
 