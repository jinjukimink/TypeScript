
import Button from "../components/html/Button";
import CheckBox from "../components/html/CheckBox";
import Input from "../components/html/Input";
import useInput from "../hooks/useInput"
import { useRef, useState } from "react";
import useCheckBox from "../hooks/useCheckbox";

const SignIn2 = () => {
    const ref =useRef<HTMLInputElement>(null)
    const [name,onChangeName,resetName] = useInput("");
    const [email,onChangeEmail,resetEmail] = useInput("")
    const [password,onChangePassword,resetPassword] = useInput("");
    const [checkbox,onChangeCheckBox,resetCheckBox]=useCheckBox(false);
    const [type,setType]=useState("Log In");//현재 지금 타입은 Login 폼인거임
    const onChangeType=()=>{
        setType(type => type ==="Log In"? "Sign In":"Log In")
    }

    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        ref.current?.focus();//제출되면 포커싱되게
        const inValidLoginInput= email.trim()==="" || password.trim()===""||!checkbox
        const inValidSignInput= inValidLoginInput || name.trim()===""

        if(inValidLoginInput && type ==="Log In") {
            console.log(type)
            alert("빈칸을 다 입력하세요") 
            return;
        }

        if(inValidSignInput && type ==="Log In"){
            console.log(type)
            alert("빈 칸을 다 입력하세요");
            return;
        }
        if(type==="Log In"){
            alert("로그인 성공")
        }
        else if(type==="Sign In"){
            alert("회원가입 성공")
        }
        resetName()
        resetEmail()
        resetPassword()
        resetCheckBox()
    }

  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen bg-[black]">
            <div className="w-[375px] h-[497px] flex items-center justify-center rounded-md border border-black bg-[#FFFFFF]">
                <div className="w-[325px]">
                    <div>
                        <h1 className="inter font-bold  w-[325px] text-xl text-[#4f4f4f] mb-2">{type}to App</h1>
                        <p className="inter text-[14px] text-[#4f4f4f] mar mb-3">Please enter your detail to continue.</p>
                    </div>
                    {/* <form onSubmit={type==="Log In"?onSubmitLogin : onSubmitSign}> */}
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-col gap-[16px]">
                            {/* <input ref={ref}/> */}
                            <Input value={name} onChange={onChangeName} type="text" className="bg-[#FFFFFF] w-[325px] h-[45px]" placeholder="Enter Your Name"/>
                            <Input ref={ref} value={email} onChange={onChangeEmail} type="text" className="bg-[#FFFFFF] w-[325px] h-[45px]" placeholder="someone@example.com"/>
                            {type=="Log In" && (<Input value={password}  onChange={onChangePassword}type="text" className="bg-[#FFFFFF] w-[325px] h-[45px]" placeholder="Enter Password"/>)}
                            <CheckBox checked={checkbox} onChange={onChangeCheckBox} type="checkbox">I agree with <strong>terms</strong> and <strong>policies.</strong></CheckBox>
                        </div>
                        <div className="flex flex-col gap-[16px] mt-5">
                            <Button className="bg-[#4F4F4F] text-[14px] w-[325px] h-[45px] border border-black">{type}</Button>
                            {/* <Button onChange={onChangeType} className="w-[325px] h-[45px] text-[14px] border border-black text-[#4f4f4f]">Go To {type==="Sign In"? "Log In":"Sign In"}</Button> */}
                        </div>
                    </form>
                    <Button onClick={onChangeType} className="w-[325px] h-[45px] text-[14px] border border-black text-[#4f4f4f] mt-2">Go To {type==="Sign In"? "Log In":"Sign In"}</Button>
                </div>
        </div>
        </div>
    </>
  );
}
export default SignIn2