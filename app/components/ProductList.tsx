import Link from "next/link"
import Image from "next/image"
import { WixClientServer } from "@/lib/wixClientServer";

const PRODUCT_PER_PAGE = 20

const ProductList = async ({categoryId, limit}: {categoryId: string; limit?: number}) => {

  const wixClient = await WixClientServer()

  const res =  wixClient.products.queryProducts().limit(limit || PRODUCT_PER_PAGE).find();

  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80 ">
        <Image src="/PL1.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 ring-1 ring-lama"/>
        <Image src="/PL2.jpg" alt="" fill sizes="25vw" className="rounded-md ring-1 ring-lama"/>
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Cap</span>
            <span className="font-semibold">$29</span>
        </div>
        <div className="text-sm text-gray-500">Classic blue denim cap, perfect for casual everyday wear.</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
        </Link>



        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80 ">
        <Image src="/PL3.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 ring-1 ring-lama"/>
        <Image src="/PL4.jpg" alt="" fill sizes="25vw" className="rounded-md ring-1 ring-lama"/>
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Coat</span>
            <span className="font-semibold">$56</span>
        </div>
        <div className="text-sm text-gray-500">Stylish grey jacket that adds warmth and elegance to any outfit.</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
        </Link>
        


        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80 ">
        <Image src="/PL5.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 ring-1 ring-lama"/>
        <Image src="/PL6.jpg" alt="" fill sizes="25vw" className="rounded-md ring-1 ring-lama"/>
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Shirt</span>
            <span className="font-semibold">$31</span>
        </div>
        <div className="text-sm text-gray-500">Lightweight button-up shirt designed for comfort and a smart casual look.</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
        </Link>
        


        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80 ">
        <Image src="/PL7.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 ring-1 ring-lama"/>
        <Image src="/PL8.jpg" alt="" fill sizes="25vw" className="rounded-md ring-1 ring-lama"/>
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Basic Top</span>
            <span className="font-semibold">$18</span>
        </div>
        <div className="text-sm text-gray-500">Soft navy blue t-shirt, a versatile essential for your daily wardrobe.</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
        </Link>




        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80 ">
        <Image src="/PL9.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 ring-1 ring-lama"/>
        <Image src="/PL10.jpg" alt="" fill sizes="25vw" className="rounded-md ring-1 ring-lama"/>
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Watch</span>
            <span className="font-semibold">$32</span>
        </div>
        <div className="text-sm text-gray-500">Elegant leather-strap watch with a classic dial, perfect for both casual and formal looks.</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
        </Link>



        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80 ">
        <Image src="/PL11.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 ring-1 ring-lama"/>
        <Image src="/PL12.jpg" alt="" fill sizes="25vw" className="rounded-md ring-1 ring-lama"/>
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Sneakers </span>
            <span className="font-semibold">$27</span>
        </div>
        <div className="text-sm text-gray-500">Trendy black-and-white sneakers that combine comfort and style for everyday wear.</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
        </Link>
        


        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80 ">
        <Image src="/PL14.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 ring-1 ring-lama"/>
        <Image src="/PL13.jpg" alt="" fill sizes="25vw" className="rounded-md ring-1 ring-lama"/>
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Sunglasses </span>
            <span className="font-semibold">$16</span>
        </div>
        <div className="text-sm text-gray-500">Modern black sunglasses offering UV protection with a sleek and stylish design.</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
        </Link>
        


        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80 ">
        <Image src="/PL15.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 ring-1 ring-lama"/>
        <Image src="/PL16.jpg" alt="" fill sizes="25vw" className="rounded-md ring-1 ring-lama"/>
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Socks</span>
            <span className="font-semibold">$14</span>
        </div>
        <div className="text-sm text-gray-500">Soft cotton socks in versatile colors, designed for comfort and daily use.</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
        </Link>
    </div>
  )
}

export default ProductList
