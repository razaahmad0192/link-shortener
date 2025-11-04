import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <section className='bg-black'>
    <div className='lg:px-10 md:container  md:mx-auto  py-15 text-white'>
        <div className='all  flex md:flex-row flex-col md:items-start items-center md:gap-0 gap-10  justify-between'>
            <button className="cursor-pointer hover:text-gray-400 logo text-3xl font-bold">
            FitLinks
            </button>
            <div className='flex md:flex-row flex-col gap-10 md:items-start items-center md:gap-40'>

           
            <div className='flex md:flex-row flex-col  gap-10 md:gap-20 '>
                <ul className='flex flex-col md:items-start items-center  gap-3 '>
                    <li><button className='cursor-pointer hover:text-gray-200 text-white  font-bold '>Features</button></li>
                    <li><button className='cursor-pointer hover:text-gray-200 text-gray-400'>Link Shortening</button></li>
                    <li><button className='cursor-pointer hover:text-gray-200 text-gray-400'>Branded Links</button></li>
                    <li><button className='cursor-pointer hover:text-gray-200 text-gray-400'>Analytics</button></li>
                </ul>
                <ul className='flex flex-col md:items-start items-center  gap-3 '>
                    <li><button className='cursor-pointer hover:text-gray-200 text-white font-bold '>Resources</button></li>
                    <li><button className='cursor-pointer hover:text-gray-200 text-gray-400'>Blog</button></li>
                    <li><button className='cursor-pointer hover:text-gray-200 text-gray-400'>Developers</button></li>
                    <li><button className='cursor-pointer hover:text-gray-200 text-gray-400'>Support</button></li>
                </ul>
                <ul className='flex flex-col md:items-start items-center gap-3 '>
                    <li><button className='cursor-pointer hover:text-gray-200 text-white font-bold '>Company</button></li>
                    <li><button className='cursor-pointer hover:text-gray-200 text-gray-400'>About </button></li>
                    <li><button className='cursor-pointer hover:text-gray-200 text-gray-400'>Our Team</button></li>
                    <li><button className='cursor-pointer hover:text-gray-200 text-gray-400'> Careers</button></li>
                    <li><button className='cursor-pointer hover:text-gray-200 text-gray-400'>Contact</button></li>
                </ul>
               
            </div>
            <div className="social flex gap-5">
                <FaFacebookSquare className=' cursor-pointer hover:text-gray-400 w-9 h-9'/>
                <FaTwitter className=' cursor-pointer hover:text-gray-400 w-9 h-9'/>
                <FaPinterest className=' cursor-pointer hover:text-gray-400 w-9 h-9'/>
               <FaInstagram className=' cursor-pointer hover:text-gray-400 w-9 h-9'/>
               
                
            </div>
        </div>
             </div>
    </div>
    </section>
  )
}

export default Footer
