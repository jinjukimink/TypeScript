import { Action } from "../../reducer/todoReducer";
import { TTodo } from "../../types/todo";
import TodoListItem from "./TodoListItem";

const TodoList = ({todos,dispatch}:
    {todos:TTodo[],
    dispatch:React.Dispatch<Action>
    }) => {//리스트 렌더링     
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
            {todos.map(todo=><TodoListItem todo={todo} dispatch={dispatch}/>)}
    </ul>
    </>
  );
}
export default TodoList