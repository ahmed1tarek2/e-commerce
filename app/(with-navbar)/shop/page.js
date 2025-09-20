import React from 'react'
import Pageroute from "@/components/shop/Pageroute";
import Sideshop from '@/components/shop/Sideshop';
import Itemsshop from '@/components/shop/Itemsshop';


const page = () => {
  return (
    <div className=' px-48 mx-auto'>
      <Pageroute />
      <div className="flex">
        <Sideshop />
      <Itemsshop />
      </div>
    </div>
  )
}

export default page;