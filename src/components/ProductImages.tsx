"use client"
import Image from "next/image"
import { useState } from "react"


const images = [
  {
    id: 1,
    url: "/img1.jpg",
  },
  {
    id: 2,
    url: "/img2.jpg",
  },{
    id: 3,
    url: "/img3.jpg",
  },
  {
    id: 4,
    url: "/img4.jpg",
  }
];



const ProductImages = () => {
    const [index,setIndex] = useState(0)

  return (
    <div className="">
        <div className="h-[500px] relative">
            <Image src={images[index].url} alt="" fill sizes="50vw" className="object-cover rounded-md"/>
        </div>
        
        <div className="flex justify-between gap-4 mt-8">
            {images.map((img , i) =>(
              <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() =>setIndex(i)}>
               <Image src={img.url} alt="" fill sizes="30vw" className="object-cover rounded-md"/>
             </div>
            ))}
        
        </div>
    </div>
  )
}

export default ProductImages

