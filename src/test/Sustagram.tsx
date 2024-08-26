import { useState } from "react";
import arrow from "../.././public/arrow.png"

function Sustragram() {
  
  const [picture,setPicture] = useState([
    "https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/09/23/12/33/building-3697342_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/05/02/12/43/clouds-335969_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/01/08/05/45/mountain-7704584_1280.jpg",
  ]);

  interface IItem{
    url:string;
    index:number;
  }
  
  const [deleteItems,setDeleteItems]=useState<IItem[]>([]);
  const onClick=(index:number)=>{
      setDeleteItems((deleteItems)=>[
        ...deleteItems, 
        {url:picture[index],index}])
      setPicture((picture)=> picture.filter((_,i)=> i !== index))//빼기
  }
  const restore=()=>{
    console.log("delete item : ",deleteItems)
    
    if(picture.length==6||deleteItems.length==0) {
      console.log("더이상 삭제할 게 없음")
      return;
    }

    const lastDeleteItem = deleteItems[deleteItems.length-1];//최근에 삭제된 거
    setPicture((prevPicture)=>{
      const updatePicture = [...prevPicture];
      updatePicture.splice(lastDeleteItem?.index,0,lastDeleteItem.url);//추가
      return updatePicture
    })
    setDeleteItems(prevDeleteItems=> prevDeleteItems.filter((item)=> item.url!== lastDeleteItem.url))//빼기
  }


  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
      </header>
      <img src={arrow} alt="arrow" className="w-[20px] h-[20px] mb-3 hover:bg-sky-500" onClick={()=>restore()}/>
      <div className="grid grid-cols-3 gap-4">
        {picture.map((value, index) => (
          <div className="group relative" key={index}>
            <a className="group" href="#">
              <img
                src={value}
                width="400"
                height="400"
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
              />
            </a>
            <button onClick={()=>onClick(index)} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full">
              <img src="/delete.svg" alt="Delete icon" className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sustragram;