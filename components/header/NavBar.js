"use client"
import React,{useState} from 'react'
import Top from './Top'
import Nav from './Nav'
import Bottom from './Bottom'

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Top/>
      <Nav open={open} setOpen={setOpen}/>
      {/* <Bottom/> */}
    </div>
  )
}

export default NavBar
