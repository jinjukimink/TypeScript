import {useId} from "react"
type TCheckBoxProps = Omit<React.ComponentPropsWithoutRef<"input">,"type"|"id"> &{
    type:"checkbox"
}
const CheckBox = (props:TCheckBoxProps) => {
    const userId=useId();
    const{children,checked,...rest}=props
  return (
    <>
    <div className="flex items-center gap-3 relative">
      <input id={userId} checked={checked} className="appearance-none w-[20px] h-[20px] border border-[#4f4f4f] rounded-[5px]
     checked:bg-[#4f4f4f] checked:bg-[url('/icons.svg')] 
     checked:bg-no-repeat checked:bg-center" {...rest}/>
      <label htmlFor={userId} className="inter text-[14px] text-[#4f4f4f]">
        {children}
      </label>
      </div>
    </>
  );
}
export default CheckBox