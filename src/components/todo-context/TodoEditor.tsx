import Input from "../html/Input";
import Button from "../html/Button";
import { useContext, useState } from "react";
import { TodoContext, TodoContextFn } from "../../context/TodoProvider";

const TodoEditor = () => {
  const {addTodo}=useContext(TodoContextFn)!
  const [text,setText]=useState("")
  const onSumit=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      addTodo(text);
      setText("")
  }
  return (
    <>
    <form action="" className="grid gap-4" onSubmit={onSumit}>
        <div className="flex gap-2">
            <Input onChange={(e)=>setText(e.target.value)} value={text} type="text" placeholder="Enter Todo List" />
            <Button
            type="submit"
            className="bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg"
            >
            Add
            </Button>
        </div>
        </form>
    </>
  );
}
export default TodoEditor