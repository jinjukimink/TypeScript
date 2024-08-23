import { twMerge } from "tailwind-merge";

type TInput=Omit<React.ComponentPropsWithoutRef<"input">,"type"> &{
    type:"text"|"password"|"email"|"name"|"number"|"date"}

const Input = (props:TInput) => {
    const {className,...rest}=props
  return (
    <>
      <input className={twMerge(`inter text-sm 
      placeholder-[#acacac]
      border border-[#4f4f4f]
      rounded-lg p-3`,className)} {...rest}></input>
    </>
  );
}
export default Input