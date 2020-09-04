import React, { useState } from 'react';
import Link from "next/link";

export default function Nav() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="hidden mt-40 ml-8 md:block md:fixed">
                <ul className="font-thin text-sm flex flex-col space-y-6 text-gray-900 pr-8 border-r">
                    <Link href="/">
                        <li className="cursor-pointer hover:text-black">[Home]</li>
                    </Link>
                    <Link href="/engineering">
                        <li className="cursor-pointer hover:text-black">Engineering</li>
                    </Link>
                    <li>Development</li>
                    <li>Art</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="md:hidden">
                <div className="cursor-pointer w-8 fixed right-0 top-0 mt-6 mr-6 z-20" onClick={() => setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className={`fixed transition duration-300 ${open ? " w-screen h-screen z-10 bg-gray-800 top-0 bg-opacity-50" : "bg-transparent"}`} style={{ backdropFilter: "blur(5px)" }} onClick={() => setOpen(false)}></div>
                <div classname={`fixed top-0 z-20 bg-black w-64 h-screen transition duration-300 transform ${open ? "translate-x-0" : "-translate-x-64"}`}>
                    {/* <ul className="pt-12 ml-8 font-thin text-sm flex flex-col space-y-6 text-gray-900 pr-8">
                        <li className="">[Home]</li>
                        <li>Engineering</li>
                        <li>Development</li>
                        <li>Art</li>
                    </ul> */}
                </div>
            </div>
        </>
    )
}
