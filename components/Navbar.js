"use client"
import { React, useState } from 'react'
import { Menu, X } from "lucide-react"; // icons
import Link from 'next/link';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=' relative '>
      <div className=" flex items-center  justify-between px-5 md:container md:mx-auto py-3">

        <div className="md:text-3xl text-xl font-bold">
          FitLinks
        </div>
        <ul className='hidden md:flex gap-5 text-lg font-semibold '>
          <li>
            <Link href="/">
              <button className="cursor-pointer">Home</button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <button className="cursor-pointer">About Us</button>
            </Link>
          </li>
          <li>
            <Link target='_blank' href="https://github.com/razaahmad0192/link-shortener">
            <button className="cursor-pointer">GitHub</button>
            </Link>
          </li>
        </ul>
        <button className="md:hidden" onClick={() => { setIsOpen(!isOpen) }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="flex  justify-center ">

          <div className="md:hidden rounded-lg bg-gray-800 text-gray-300 z-20 font-semibold  border-t border-gray-200 absolute top-13.5  w-[80vw]  ">
            <ul className="flex gap-5 flex-col space-y-2 p-4 items-center justify-center">
              <li>
            <Link href="/">
              <button className="cursor-pointer">Home</button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <button className="cursor-pointer">About Us</button>
            </Link>
          </li>
          <li>
            <Link target='_blank' href="https://github.com/razaahmad0192/link-shortener">
            <button className="cursor-pointer">GitHub</button>
            </Link>
          </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
