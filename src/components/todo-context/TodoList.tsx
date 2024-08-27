import { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoContext } from "../../context/TodoProvider";

const TodoList = () => {//리스트 렌더링
  const {todos} = useContext(TodoContext)!
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
            {todos.map(todo=><TodoListItem todo={todo}/>)}
    </ul>
    </>
  );
}
export default TodoList