import { useState } from "react";
import bulbOn from "../../images/b_on.png";
import bulbOff from "../../images/b_off.png"

const Bulb = () => {
    const [isOn,setIsOn]=useState(false)
    const onClick=()=>{
        setIsOn(prev=>!prev)
    }
    return (
        <>
        <img src={isOn? bulbOn:bulbOff}
        onClick={onClick}/>
        </>
    );
}
export default Bulb