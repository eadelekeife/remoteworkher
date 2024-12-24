"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/images/logo.svg";
import { useEffect, useState } from "react";

import { MdOutlineSegment } from "react-icons/md";

const Navigation = () => {

    const [fixedNav, setFixed] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])

    return (
        <div className={`flex justify-between items-center py-7 px-5 md:px-20 z-50 fixed top-0 w-full ${fixedNav ? 'bg-white' : ''}`}>
            <div>
                <Link href="/">
                    <Image src={Logo} className="w-[80%] md:w-full" alt="logo" />
                </Link>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-14">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">About</Link>
                    </li>
                    <li>
                        <Link href="/job">Services</Link>
                    </li>
                    <li>
                        <Link href="/">Events</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
            <div className="hidden md:block">
                <Link className="text-accent border-2 border-solid border-accent px-8 py-3 rounded-xl" href="">Join Now</Link>
            </div>
            <div className="block md:hidden">
                <MdOutlineSegment className="text-3xl" />
            </div>
        </div>
    )
}

export default Navigation;