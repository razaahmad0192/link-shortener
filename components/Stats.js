import React from 'react'
import { BarChart3, Clock, Wand2 } from "lucide-react";
import Link from 'next/link';
function Stats() {
    return (
        <section className='bg-gray-200 min-h-[80vh] '>
            <div className=' lg:px-10 md:container  md:mx-auto md:py-30 py-10 flex flex-col md:gap-0 gap-20 '>
                <div className=' flex flex-col items-center gap-3'>

                    <h2 className=' text-2xl md:text-4xl text-center font-bold md:text-black text-gray-600 '>
                        Advanced Statistics
                    </h2>
                    <p className='md:text-lg xl:px-122  text-base  text-center  font-medium text-gray-400  '>
                        Track how your links are performing across the web with  our advanced statistics dashboard.
                    </p>
                </div>
                <div className="relative flex flex-col md:flex-row justify-center items-center gap-10   ">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute w-3/4 top-1/2 left-30 right-0 h-2 bg-cyan-400 z-0"></div>

                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-md p-8 relative max-w-sm text-left">
                        <div className="bg-cyan-700 p-4 rounded-full w-16 h-16 flex items-center justify-center absolute -top-8 left-8 md:left-15 md:-translate-x-1/2">
                            <BarChart3 className="text-white w-8 h-8" />
                        </div>
                        <h3 className="mt-10 text-xl font-bold text-gray-800">
                            Brand Recognition
                        </h3>
                        <p className="text-gray-500 mt-2">
                            Boost your brand recognition with each click. Generic links don’t
                            mean a thing. Branded links help instil confidence in your
                            content.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-md p-8 relative max-w-sm text-left md:mt-20">
                        <div className="bg-cyan-700 p-4 rounded-full w-16 h-16 flex items-center justify-center absolute -top-8 left-8 md:left-15 md:-translate-x-1/2">
                            <Clock className="text-white w-8 h-8" />
                        </div>
                        <h3 className="mt-10 text-xl font-bold text-gray-800">
                            Detailed Records
                        </h3>
                        <p className="text-gray-500 mt-2">
                            Gain insights into who is clicking your links. Knowing when and
                            where people engage with your content helps inform them.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-md p-8 relative max-w-sm text-left md:mt-40">
                        <div className="bg-cyan-700 p-4 rounded-full w-16 h-16 flex items-center justify-center absolute -top-8 left-8 md:left-15 md:-translate-x-1/2">
                            <Wand2 className="text-white w-8 h-8" />
                        </div>
                        <h3 className="mt-10 text-xl font-bold text-gray-800">
                            Fully Customizable
                        </h3>
                        <p className="text-gray-500 mt-2">
                            Improve brand awareness and content discoverability through
                            customizable links, supercharging audience engagement.
                        </p>
                    </div>
                </div>


            </div>
            <div className="  bg-gray-900 px-5  md:px-10  py-13 md:py-15   flex flex-col md:flex-row  md:items-center md:justify-center gap-5  bg-[url('/shorten_bg.svg')] bg-cover bg-center ">
                <div className='flex flex-col items-center gap-5'>
                    <h2 className='text-white text-2xl md:text-4xl font-bold '>

                        Boost your links today
                    </h2>
                    <span>

                       <Link href="/">
                       <button className='hover:bg-cyan-500 cursor-pointer px-8 rounded-full text-gray-100 text-lg font-bold   py-3 bg-cyan-400'>
                            Get Started
                        </button>
                       </Link> 
                    </span>
                </div>

            </div>
        </section>
    )
}

export default Stats
