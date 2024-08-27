import { TTodo } from "../../types/todo";
import TodoListItem from "./TodoListItem";

const TodoList = ({todos,toggleTodo,deleteTodo}:
    {todos:TTodo[],
        toggleTodo:(id: number) => void,
        deleteTodo:(id: number) => void,
    }) => {//리스트 렌더링
      
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
            {todos.map(todo=><TodoListItem todo={todo} toggleTodo={toggleTodo}/>)}
    </ul>
    </>
  );
}
export default TodoList