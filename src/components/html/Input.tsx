import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type TInput=Omit<React.ComponentPropsWithRef<"input">,"type"> &{
    type:"text"|"password"|"email"|"name"|"number"|"date"}

const Input = forwardRef <HTMLInputElement,TInput>
((props:TInput,ref) => {
    const {className,...rest}=props
  return (
    <>
      <input ref={ref} className={twMerge(`inter text-sm 
      placeholder-[#acacac]
      border border-[#4f4f4f]
      rounded-lg p-3`,className)} {...rest}></input>
    </>
  );
})

Input.displayName="Input";

export default Input