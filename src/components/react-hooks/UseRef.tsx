import {useRef, useState} from "react";

const UseRef = () => {
    console.log("UseRef rendering")
    const count = useRef(0);//무조건 .current 으로 참조해야 한다.
    const [numberArr,setNumberArr] = useState<number[]>([]);
    const [count2,setCount2]=useState(0);
  return (
    <>
      <h1>UseRef:{count.current}</h1>
      <h1>UseState:{count2}</h1>
      {numberArr}
      <button onClick={()=>{
        count.current+=1;
        console.log(count.current);
        //setNumberArr((numberArr)=>[...numberArr,count.current]);
      }}>UseRef 증가</button>

      <button onClick={()=>{setCount2((count2)=>count2+1)}}>UseState 증가
      </button>
    </>
  );
}
export default UseRef