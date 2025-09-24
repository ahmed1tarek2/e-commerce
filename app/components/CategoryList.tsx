import Link from "next/link"
import Image from "next/image"

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
        <div className=" flex gap-4 md:gap-8">
            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/men.jpg" alt="" fill sizes="20wv" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Men's Wear</h1>
            </Link>


            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/women.jpg" alt="" fill sizes="20wv" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Women's Wear</h1>
            </Link>
            

            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/kids.jpg" alt="" fill sizes="20wv" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Kids' Wear</h1>
            </Link>
            

            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/Accessories.jpg" alt="" fill sizes="20wv" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Accessories</h1>
            </Link>
            

            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/foot.jpg" alt="" fill sizes="20wv" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Foot Wear</h1>
            </Link>
            

            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="/sleep.jpg" alt="" fill sizes="20wv" className="object-cover"/>
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">Undergarments & Essentials</h1>
            </Link>
        
        </div>
    </div>
  )
}

export default CategoryList

