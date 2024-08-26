import { useState } from "react";

function useCity(initialValue:boolean){
    const [city,setCity]=useState("seoul");
    const onClickCity=(e:any)=>{
        console.log(e);
    }
    return [city,onClickCity];
}
export default useCity