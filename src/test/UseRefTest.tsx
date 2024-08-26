import { useRef, useState } from "react";

const UseRefTest = () => {
    const count=useRef(0)
    const onClick=()=>{
        count.current+=1;
    }

    const [cnt,setCnt]=useState(0)
    
    const onClick_=()=>{
        setCnt((cnt)=>cnt+1);
    }
  return (
    <>
      <div className="flex flex-col">
      <button onClick={onClick}>useRef_count:{count.current}</button>
      <button onClick={onClick_}>useState_count:{cnt}</button>
    </div>
      
    </>
  );
}
export default UseRefTest