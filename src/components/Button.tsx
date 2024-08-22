//변할 수 있는것 width,height,backgroundColor,글자,글자색
import {twMerge} from "tailwind-merge"

type TButton = React.ComponentPropsWithoutRef<"button">//버튼 태그에서 가지고 올 수 있는 속성 싸그리 가져온다는 뜻

const Button = (props:TButton) => {
    const {children, className, ...rest}=props
  return (
    <>
      <button className={twMerge(`inter text-sm w-[77px] h-[44px] text-white font-medium rounded-lg`
    ,className)} {...rest}>{children}</button>
    </>
  );
}
export default Button