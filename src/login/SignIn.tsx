import { useRef, useState } from "react";
import Button from "../components/html/Button";
import CheckBox from "../components/html/CheckBox";
import Input from "../components/html/Input";

interface IForm{
    name:string;
    email:string;
    password?:string
    checkbox:boolean
}
const SignIn = () => {
    const elsN=useRef<HTMLInputElement>(null);
    const elsP=useRef<HTMLInputElement>(null);
    const elsE=useRef<HTMLInputElement>(null);
    const [type,setType]=useState("Login");

    const [formState,setFormState]=useState<IForm>({
        name:"",
        email:"",
        //password:"",
        checkbox:false
    })
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const { name,type,value ,checked } = e.target;
        setFormState(prev=>({...prev, [name]: type ==="checkbox" ? checked : value}))
        console.log(formState)
    }

    const resetForm=()=>{
        setFormState({
            name:"",
            email:"",
            password:"",
            checkbox:false,
        })
    }
    const onClickLogin=()=>{
        if(formState.name === ""|| formState.email==="" || formState?.password ==="" || formState.checkbox ===false){
            console.log(formState)
            alert("Please fill all the fields")
        }else{
            if(formState.password!==undefined && formState.password.length<=4){
                alert("비밀번호는 5자리이상 이어야 합니다.")
                elsP.current?.focus()
                console.log(elsP.current)
            }
            else{
                alert("Login Sucessfully")
                resetForm()
            }
        }
        
    }

    const onClickSign=(e:any)=>{
        console.log(e);
        setType((type==="Sign"? "Login": "Sign"));//현제 싱테가 Sign임.
        resetForm()
    }
  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen bg-[black]">
            <div className="w-[375px] h-[497px] flex items-center justify-center rounded-md border border-black bg-[#FFFFFF]">
                <div className="w-[325px]">
                    <div>
                        <h1 className="inter font-bold  w-[325px] text-xl text-[#4f4f4f] mb-2">{type} Into App</h1>
                        <p className="inter text-[14px] text-[#4f4f4f] mar mb-3">Please enter your detail to continue.</p>
                    </div>
                    <div>
                        <form className="flex flex-col gap-[16px]">
                            {/* <input ref={els} className="inter h-[44px] text-sm border border-[#4F4F4F] py-[13.5px] px-[16px] rounded-lg placeholder-[#ACACAC]" />{" "} */}

                            <Input ref={elsN} type="text" name="name" value={formState.name} onChange={onChange} className="bg-[#FFFFFF] w-[325px] h-[45px]" placeholder="Enter Your Name"/>
                            <Input ref={elsE} type="text" name="email" value={formState.email} onChange={onChange} className="bg-[#FFFFFF] w-[325px] h-[45px]" placeholder="someone@example.com"/>
                            {type==="Sign" && <Input ref={elsP} type="text" name="password" value={formState.password} onChange={onChange} className="bg-[#FFFFFF] w-[325px] h-[45px]" placeholder="Enter Password"/>}
                            <CheckBox type="checkbox" name="checkbox" onChange={onChange} checked={formState.checkbox}>I agree with <strong>terms</strong> and <strong>policies.</strong></CheckBox>
                        </form>
                    </div>
                    <div className="flex flex-col gap-[16px] mt-5">
                        <Button className="bg-[#4F4F4F] text-[14px] w-[325px] h-[45px] border border-black"
                        onClick={onClickLogin}
                        >{type==="Sign" ? "Login":"Sign"}</Button>
                        
                        <Button className="w-[325px] h-[45px] text-[14px] border border-black text-[#4f4f4f]"
                        onClick={onClickSign}
                        >Go To {type==="Sign" ? "Log":"Sign "}in</Button>
                    </div>
                </div>
        </div>
        </div>
    </>
  );
}
export default SignIn