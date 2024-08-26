import { useState } from "react";

const ColorBox = () => {
    const [bgColor,setBgColor]=useState("white");
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setBgColor(e.target.value);
        console.log(bgColor);
    }
  return (
    <>
      <div className="item-middle">
        <div className="flex flex-col">
          <div className={`w-40 h-40 border border-slate-500 ${`bg-[#${bgColor}]`}`}
          style={{ backgroundColor: bgColor }}
          ></div>
          <input type="text" value={bgColor} onChange={onChange} className="border border-slate-500 w-40 mt-2" />
        </div>
      </div>
    </>
  );
};
export default ColorBox;