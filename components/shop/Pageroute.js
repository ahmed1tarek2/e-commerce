import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Pageroute = () => {
  return (
    <div className='w-full pb-4'>
          <Link href="/" className='font-medium'>Home</Link>
          <span className="text-gray-500"><FontAwesomeIcon icon={faAngleRight} />Products</span>
    </div>
  )
}

export default Pageroute
