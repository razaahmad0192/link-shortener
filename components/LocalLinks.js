"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function LocalLinks() {
    const [links, setLinks] = useState([])

    useEffect(() => {
        // Load links from localStorage on mount
        const storedLinks = JSON.parse(localStorage.getItem("shortenedLinks") || "[]")
        setLinks(storedLinks)
    }, [])

    if (links.length === 0) {
        return (
            <div className="text-center text-gray-400 mt-5">
                No links generated yet.
            </div>
        )
    }

    return (
        <div className="md:container md:mx-auto mt-8 px-4 md:px-10">
            <div className="text-white"> 

            <h2 className=" font-bold text-xl mb-4">Your Generated Links</h2>
            <span className="text-red-400 md:text-base text-sm">Note: This list only stores links locally and does not affect the original URLs or aliases. The links in the database will be automatically cleared weekly by the server.</span>
            </div>
            <ul className="flex mt-4 flex-col gap-3">
                {links.map((link, index) => (
                    <li key={index} className="bg-gray-800 p-3 rounded-md flex justify-between items-center">
                        <Link href={link} target="_blank" className="underline text-sm md:text-base text-cyan-400">
                            {link}
                        </Link>
                        <button
                            
                            className="text-red-500 hover:text-red-700 text-sm md:text-base  font-semibold"
                            onClick={() => {
                                const updated = links.filter(l => l !== link)
                                setLinks(updated)
                                localStorage.setItem("shortenedLinks", JSON.stringify(updated))
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
