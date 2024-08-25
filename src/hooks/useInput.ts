import { useState } from "react"
type UseInputReturn=[
    string,
    (e:React.ChangeEvent<HTMLInputElement>)=>void,
    ()=>void
]

function useInput(initialValue:string):UseInputReturn{
    const [value,setValue]=useState(initialValue)
    const onChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    const resetForm = ()=>{
        setValue("")
    }
    return [value,onChangeEmail,resetForm]
}

export default useInput