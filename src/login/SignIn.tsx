
import Button from "../components/html/Button";
import CheckBox from "../components/html/CheckBox";
import Input from "../components/html/Input";

const SignIn = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen bg-[black]">
            <div className="w-[375px] h-[497px] flex items-center justify-center rounded-md border border-black bg-[#FFFFFF]">
                <div className="w-[325px]">
                    <div>
                        <h1 className="inter font-bold  w-[325px] text-xl text-[#4f4f4f] mb-2">Sign Into App</h1>
                        <p className="inter text-[14px] text-[#4f4f4f] mar mb-3">Please enter your detail to continue.</p>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <Input type="text" className="bg-[#FFFFFF] w-[325px] h-[45px]" placeholder="Enter Your Name"/>
                        <Input type="text" className="bg-[#FFFFFF] w-[325px] h-[45px]" placeholder="someone@example.com"/>
                        <Input type="text" className="bg-[#FFFFFF] w-[325px] h-[45px]" placeholder="Enter Password"/>
                        <CheckBox type="checkbox">I agree with <strong>terms</strong> and <strong>policies.</strong></CheckBox>
                    </div>
                    <div className="flex flex-col gap-[16px] mt-5">
                        <Button className="bg-[#4F4F4F] text-[14px] w-[325px] h-[45px] border border-black">Log In</Button>
                        <Button className="w-[325px] h-[45px] text-[14px] border border-black text-[#4f4f4f]">Go To Log In</Button>
                    </div>
                </div>
        </div>
        </div>


    </>
  );
}
export default SignIn