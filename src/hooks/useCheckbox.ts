import { useState } from "react";
type useCheckBoxReturn=[
    boolean,
    ()=>void,
    ()=>void,
]

function useCheckBox(initialValue:boolean):useCheckBoxReturn{
    const [checkbox,setCheckBox]=useState(false);
    const onChange=()=>{
        setCheckBox(prev=>!prev)
    }
    const resetCheck=()=>{
        setCheckBox(false);
    }

    return [checkbox,onChange,resetCheck]
}

export default useCheckBox