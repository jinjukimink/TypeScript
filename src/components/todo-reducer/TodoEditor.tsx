import Input from "../html/Input";
import Button from "../html/Button";
import { useState } from "react";
import { Action } from "../../reducer/todoReducer";

const TodoEditor = ({dispatch}:{
  dispatch:React.Dispatch<Action>
}) => {
    const [text,setText]=useState("")
    const onSumit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(text)
       // addTodo(text);
       dispatch({type:"ADD",payload:{text}})
        setText("")
        console.log("할일 등록")
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