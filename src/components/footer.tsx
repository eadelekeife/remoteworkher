import Logo from "@/assets/images/logo-colored.svg";
import Image from "next/image";
import Link from "next/link";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import Blog1 from "@/assets/images/blog/footer-blog-1.png";
import Blog2 from "@/assets/images/blog/footer-blog-2.png";


interface FooterInterface {
    footerMargin?: string
}

const Footer = (props: FooterInterface) => {
    return (
        <div className={`footer ${props.footerMargin ? props.footerMargin : "mt-16 md:mt-28"}`}>
            <div className="flex flex-col md:grid grid-cols-3/1 pt-16 md:pt-24 px-5 md:px-20 gap-10 md:gap-32 pb-10">
                <div className="flex flex-col md:grid grid-cols-1/1.5 gap-10 md:gap-10">
                    <div>
                        <Link href="/">
                            <Image src={Logo} alt="logo" className="w-[60%] md:w-auto mb-5 mt-2" />
                        </Link>
                        <p className="md:w-[80%]">We help you connect, learn, and grow in your remote career, regardless of where you are.</p>
                        <div className="flex gap-4 mt-5">
                            <div className="bg-[#242527] size-8 flex items-center rounded-full justify-center">
                                <FaXTwitter className="text-white text-xl" />
                            </div>
                            <FaFacebook className="text-[#242527] text-3xl" />
                            <FaLinkedin className="text-[#242527] text-3xl" />
                            <FaInstagram className="text-[#242527] text-3xl" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
                        <div>
                            <h5 className="font-dmsans font-black text-bold mb-5">Explore</h5>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <Link href="/">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/">Partnerships</Link>
                                </li>
                                <li>
                                    <Link href="/">Services</Link>
                                </li>
                                <li>
                                    <Link href="/">Events</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-dmsans font-black text-bold mb-5">More</h5>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <Link href="/">Volunteering</Link>
                                </li>
                                <li>
                                    <Link href="/">Job Board</Link>
                                </li>
                                <li>
                                    <Link href="/">Newsletter</Link>
                                </li>
                                <li>
                                    <Link href="/">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-dmsans font-black text-bold mb-5">Services</h5>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <Link href="/">Post a Job</Link>
                                </li>
                                <li>
                                    <Link href="/">For Employers</Link>
                                </li>
                                <li>
                                    <Link href="/">For Talents</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="font-dmsans font-black text-bold mb-5">Blog</h5>
                    <ul className="flex flex-col gap-5">
                        <li className="flex items-center gap-6">
                            <Image src={Blog1} alt="logo" className="" />
                            <p>
                                Good price and compromises on design.
                            </p>
                        </li>
                        <li className="flex items-center gap-6">
                            <Image src={Blog2} alt="logo" className="" />
                            <p>
                                Never again waste your time as a remote freelancer.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pb-10 pt-8 md:pb-14 md:pt-24">
                <p className="text-center text-sm md:text-base">Copyright © Remote WorkHer 2024. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;