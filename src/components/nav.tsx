"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/images/logo.svg";
import { useEffect, useState } from "react";

import { MdOutlineSegment } from "react-icons/md";
import { Drawer } from "antd";

import { FaTimes } from "react-icons/fa";

interface NavigationPropsInterface {
    textColor?: string
    logoColor?: string
}

const Navigation = (props: NavigationPropsInterface) => {

    const [fixedNav, setFixed] = useState(false);
    const [displayNavDrawer, setDisplayNavDrawer] = useState(false);

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
    }, []);

    const toggleNavDrawer = () => setDisplayNavDrawer(!displayNavDrawer);

    return (
        <div className={`flex justify-between items-center py-7 px-5 md:px-20 z-50 fixed top-0 w-full ${fixedNav ? 'bg-white' : ''}`}>
            <div>
                <Link href="/">
                    <h2 className={`font-jakarta font-bold text-3xl ${props.logoColor ? props.logoColor : "text-black"}`}>Remote WorkHer</h2>
                    {/* <Image src={Logo} className="w-[80%] md:w-full" alt="logo" /> */}
                </Link>
            </div>
            <div className="hidden md:block">
                <ul className={`flex gap-14 ${props.textColor ? props.textColor : "text-black"}`}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    {/* <li>
                        <Link href="/job">Job Board</Link>
                    </li> */}
                    <li>
                        <Link href="/about-us">About</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/events">Events</Link>
                    </li>
                    {/* <li>
                        <Link href="/blog">Blog</Link>
                    </li> */}
                </ul>
            </div>
            <div className="hidden md:block">
                <Link className="text-accent border-2 border-solid border-accent px-8 py-3 rounded-xl" href="">Join Now</Link>
            </div>
            <div onClick={toggleNavDrawer} className="block md:hidden">
                <MdOutlineSegment className="text-3xl" />
            </div>
            <Drawer open={displayNavDrawer} onClose={toggleNavDrawer}>
                <div>
                    <div className="border-b-2 border-solid border-[#F2F4F7] flex justify-between items-center p-5">
                        <div>
                            <Link href="/">
                                <Image src={Logo} className="w-[80%] md:w-full" alt="logo" />
                            </Link>
                        </div>
                        <div onClick={toggleNavDrawer}>
                            <FaTimes className="text-xl" />
                        </div>
                    </div>
                    <ul className="flex flex-col gap-5 py-10">
                        <li className="border-b border-solid border-[#F2F4F7] px-5 pb-2">
                            <Link className="text-sm font-dmsans" href="/">Home</Link>
                        </li>
                        <li className="border-b border-solid border-[#F2F4F7] px-5 pb-2">
                            <Link className="text-sm font-dmsans" href="/blog">Blog</Link>
                        </li>
                        {/* <li className="border-b border-solid border-[#F2F4F7] px-5 pb-2">
                            <Link className="text-sm font-dmsans" href="/job">Job Board</Link>
                        </li> */}
                        <li className="border-b border-solid border-[#F2F4F7] px-5 pb-2">
                            <Link className="text-sm font-dmsans" href="/about-us">About</Link>
                        </li>
                        <li className="border-b border-solid border-[#F2F4F7] px-5 pb-2">
                            <Link className="text-sm font-dmsans" href="/services">Services</Link>
                        </li>
                        <li className="border-b border-solid border-[#F2F4F7] px-5 pb-2">
                            <Link className="text-sm font-dmsans" href="/events">Events</Link>
                        </li>
                        <li className="border-b border-solid border-[#F2F4F7] px-5 pb-2">
                            <Link className="text-sm font-dmsans" href="/">Join Now</Link>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </div>
    )
}

export default Navigation;