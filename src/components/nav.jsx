"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/images/logo.svg";
import { useEffect, useState } from "react";

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
        <div className={`flex justify-between items-center py-5 px-20 z-40 fixed top-0 w-full ${fixedNav ? 'bg-white' : ''}`}>
            <div>
                <Link href="/">
                    <Image src={Logo} alt="logo" />
                </Link>
            </div>
            <div>
                <ul className="flex gap-14">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/events">Events</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link className="text-accent border-2 border-solid border-accent px-8 py-3 rounded-xl" href="">Join Now</Link>
            </div>
        </div>
    )
}

export default Navigation;