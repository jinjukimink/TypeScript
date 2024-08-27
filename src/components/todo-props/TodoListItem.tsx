import { TTodo } from "../../types/todo";
import Button from "../html/Button";
import CheckBox from "../html/CheckBox";
import { twMerge } from "tailwind-merge";

const TodoListItem = ({todo,toggleTodo}:
    {todo:TTodo, 
    toggleTodo:(id: number) => void
}) => {//아이템 하나
  console.log("Item rendering")
  return ( 
    <>
     <li key={todo.id} className="flex items-center justify-between border border-[#4F4F4F] h-[44px] px-[15px] rounded-lg bg-[rgba(53,56,62,0.05)] select-none shrink-0">
              <CheckBox  type="checkbox"
              onChange={()=>toggleTodo(todo.id)} >
                <span 
                className={twMerge(`text-[#35383E]`,todo.isComplete &&"line-through")}>
                {todo.text}
                </span>
              </CheckBox>
              <Button className="border border-[#4f4f4f] rounded w-[23px] h-[23px] flex justify-center items-center">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                    fill="#4F4F4F"
                  />
                  <path
                    d="M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                    fill="#4F4F4F"
                  />
                </svg>
              </Button>
            </li>

    </>
  );
}
export default TodoListItem