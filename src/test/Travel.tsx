
import seoul from "../../public/travelImages/seoul.jpg";
import london from "../../public/travelImages/london.jpg";
import paris from "../../public/travelImages/paris.jpg";
import newyork from "../../public/travelImages/newyork.jpg";
import { useState } from "react"
import travel from "../../public/travelImages/travel.png"

const Travel = () => {
    const [clickedCity,setClickedCity]=useState("seoul");
    const onClick=(city:string)=>{
        setClickedCity(city)
    }
    const getCity=(clickedCity:string)=>{
        switch(clickedCity){
        case "seoul":
            return seoul
        case "london":
            return london;
        case "paris":
            return paris;
        case "newyork":
            return newyork
        }
    }

    return (
        <>
        <div className="absolute top-10 left-10 text-3xl cursor-pointer">
            <div className="light-icon fa-regular fa-sun"></div>
            <div className="dark-icon fa-regular fa-moon hidden"></div>
        </div>
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center gap-4  max-w-[500px]">
            <img src={travel} alt={"로고"} width={80} />
            <ul className="flex items-center antialiased justify-around w-full">
                <li className=" hover:bg-green-200">
                <a href="#" 
                onClick={()=>onClick("seoul")}>Seoul</a>
                </li>
                <li  className=" hover:bg-green-200">
                <a href="#" onClick={()=>onClick("london")}>London</a>
                </li>
                <li className="hover:bg-green-200">
                <a href="#"   onClick={()=>onClick("paris")}>Paris</a>
                </li>
                <li className="hover:bg-green-200">
                <a href="#" onClick={()=>onClick("newyork")}>NewYork</a>
                </li>
            </ul>
            <div>
                <img src={getCity(clickedCity)} alt={"서울"} />
            </div>
            </div>
        </div>
    </>
  );

}
export default Travel