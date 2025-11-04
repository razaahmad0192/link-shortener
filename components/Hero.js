"use client"
import { React, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Hero() {
    const [url, setUrl] = useState("")
    const [alias, setAlias] = useState("")
    const [generated, setGenerated] = useState("")
    const generate = () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "alias": alias
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${alias}`)
                setUrl("")
                setAlias("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }


    return (
        <section className='min-h-[80vh]'>

            <div className='py-10 lg:px-10 md:container md:mx-auto flex md:flex-row justify-end  flex-col-reverse  md:items-center md:justify-between  min-h-[80vh]  overflow-hidden'>
                <div className='flex flex-col gap-3  md:w-1/2'>
                    <h1 className='xl:text-8xl  md:text-6xl  text-4xl md:text-start text-center font-extrabold md:text-black text-gray-600 '>
                        More than just shorter links
                    </h1>
                    <div className=' flex flex-col gap-8'>

                        <p className='md:text-2xl text-md md:text-start text-center  font-semibold text-gray-400'>
                            Build your brand's recognition and get detailed insights on how your links performing.
                        </p>
                        <span className=' md:text-start text-center '>

                            <button className='hover:bg-cyan-500 cursor-pointer px-8 rounded-full text-gray-100 text-lg font-bold   py-3 bg-cyan-400'>
                                Get Started
                            </button>
                        </span>
                    </div>
                </div>
                <div>
                    <Image className='relative left-5 md:left-20 ' height={700} width={700} src="hero_img.svg" alt="Hero" />
                </div>
            </div>
            <div className=' md:container md:mx-auto   '>
                <div className="md:relative -bottom-13 rounded-xl bg-gray-900 px-2  md:px-10 md:py-8 md:mx-20 mx-4  flex flex-col   md:items-center md:justify-center gap-5  bg-[url('/shorten_bg.svg')] bg-cover bg-center py-3 ">

                    <div className='flex w-full gap-5 flex-col '>

                        <div>
                            <label className="text-white font-bold" htmlFor="url">Enter Your URL</label>
                            <input
                                id="url"
                                onChange={e => { setUrl(e.target.value) }}
                                value={url}
                                className='py-3 rounded-md px-5 w-full bg-white ' placeholder='Shorten a link here...'
                                type="url" />
                        </div>
                        <div>

                            <label className="text-white font-bold" htmlFor="alias">Enter an Alias</label>
                            <input
                            id="alias"
                                onChange={e => { setAlias(e.target.value) }}
                                value={alias}
                                className='py-3 rounded-md px-5 w-full bg-white '
                                type="text"
                                placeholder='Enter an alias...' />
                        </div>
                    </div>

                    <button
                        onClick={generate}
                        className=' hover:bg-cyan-500 cursor-pointer px-8 md:w-40 w-full rounded-lg text-gray-100 text-lg font-semibold   py-2.5 bg-cyan-400'>
                        Shorten It
                    </button>
                    {generated && <div className="text-white flex flex-col gap-5 items-center  ">
                        <span className="font-bold text-lg"> Your Link</span>
                        <code >
                            <Link target="_blank" href={generated}>
                                {generated}
                            </Link>

                        </code>
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default Hero
