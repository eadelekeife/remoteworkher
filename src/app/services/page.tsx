'use client';

import DisplayLayout from "@/components/layout";

import HeroImg from "@/assets/images/services/hero.png";
import Consultation from "@/assets/images/services/consultation.png";
import PartnershipImg from "@/assets/images/services/partnership.png";
import JobImg from "@/assets/images/services/postings.png";
import SpeakingImg from "@/assets/images/services/speaking.png";

import TalentOne from "@/assets/images/services/talent_1.png";
import TalentTwo from "@/assets/images/services/talent_2.png";
import TalentThree from "@/assets/images/services/talent_3.png";

import QuoteImg from "@/assets/images/services/quote.png";
import { MdOutlineMail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import Map from "@/assets/images/services/map.png";
import { FaArrowLeft } from "react-icons/fa6";

import ProgressOne from "@/assets/images/services/progress_1.png";
import ProgressTwo from "@/assets/images/services/progress_2.png";
import ProgressThree from "@/assets/images/services/progress_3.png";


import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import { gsap } from 'gsap';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const ServicesPage = () => {
    const textRefs = useRef<HTMLDivElement[]>([]);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        // Animate each text element
        textRefs.current.forEach((el) => {
            if (el) {
                gsap.fromTo(
                    el,
                    { y: 100, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.2,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 80%', // When the top of the element is 80% down the viewport
                            toggleActions: 'play none none none', // Play animation when triggered
                        },
                    }
                );
            }
        });
    }, []);
    const addToRefs = (el: HTMLDivElement) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };
    return (
        <div>
            <DisplayLayout>
                <>
                    <div className="px-5 md:px-20 mt-36">
                        <div className="flex flex-col md:grid grid-cols-2 gap-5 md:gap-20" ref={addToRefs}>
                            <div>
                                <h3 className="font-jakarta leading-tight text-3xl md:text-5xl font-bold mt-5 mb-5">
                                    Empowering Employers and Talents to Thrive in Remote Work
                                </h3>
                                <div></div>
                            </div>
                            <div>
                                <Image src={HeroImg} alt="woman posing for picture" className="rounded-xl w-full" />
                            </div>
                        </div>
                        <div className="mt-5 md:mt-20" ref={addToRefs}>
                            <div className="flex flex-col-reverse md:grid grid-cols-2 md:items-center gap-10 md:gap-20">
                                <div className="">
                                    <div className="flex gap-2">
                                        <Link href="/" className="border rounded-lg py-4 px-5 border-solid border-[#D6D6D6] bg-[#1018280D] flex gap-1 items-center">
                                            <FaArrowLeft />
                                            Back to Home</Link>
                                        <button className="bg-accent text-white text-base py-4 px-8 rounded-lg">Service</button>
                                    </div>
                                </div>
                                <div>
                                    <div className="">
                                        <p className="text-lg text-[#475467] font-jakarta">
                                            Explore our tailored services designed to transform how businesses and
                                            professionals succeed in the remote work era.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-36 px-5 md:px-20">
                        <div className="text-center" ref={addToRefs}>
                            <div className="w-max mx-auto text-[#F963AB]">
                                <h4 className="font-jost font-[500] text-accent">Services</h4>
                            </div>
                            <h3 className="font-jakarta text-3xl md:text-5xl font-bold mt-5 mb-5">
                                For Remote Workers and Talents
                            </h3>
                            <p className="text-base md:w-[65%] leading-relaxed mx-auto text-[#808080] font-jakarta">
                                Define ambitious service benchmarks that challenge your team to strive for excellence. These benchmarks should be
                                both aspirational and achievable, inspiring everyone to aim higher and constantly improve.
                            </p>
                        </div>
                        <div className="flex flex-col md:grid grid-cols-2 gap-10 md:w-[90%] mx-auto mt-16">
                            <div ref={addToRefs} className="border rounded-xl border-solid border-[#D6D6D6] md:grid grid-cols-1/3 items-center p-4 gap-10">
                                <div>
                                    <Image src={Consultation} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                </div>
                                <div className="py-4">
                                    <h4 className="font-600 mb-2 text-xl font-jakarta">Consultation Services</h4>
                                    <p className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                        Tailored advice and strategies to help you integrate remote work into your business successfully.
                                    </p>
                                </div>
                            </div>
                            <div ref={addToRefs} className="border rounded-xl border-solid border-[#D6D6D6] md:grid grid-cols-1/3 items-center p-4 gap-10">
                                <div>
                                    <Image src={JobImg} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                </div>
                                <div className="py-4">
                                    <h4 className="font-600 mb-2 text-xl font-jakarta">Remote Work Resources</h4>
                                    <p className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                        Easily post job opportunities and connect with skilled remote professionals in our community.
                                    </p>
                                </div>
                            </div>
                            <div ref={addToRefs} className="border rounded-xl border-solid border-[#D6D6D6] md:grid grid-cols-1/3 items-center p-4 gap-10">
                                <div>
                                    <Image src={SpeakingImg} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                </div>
                                <div className="py-4">
                                    <h4 className="font-600 mb-2 text-xl font-jakarta">Events and Workshops</h4>
                                    <p className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                        Book us for events and workshops to inspire and educate your team about remote work best practices.
                                    </p>
                                </div>
                            </div>
                            <div ref={addToRefs} className="border rounded-xl border-solid border-[#D6D6D6] md:grid grid-cols-1/3 items-center p-4 gap-10">
                                <div>
                                    <Image src={PartnershipImg} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                </div>
                                <div className="py-4">
                                    <h4 className="font-600 mb-2 text-xl font-jakarta">Private Community</h4>
                                    <p className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                        Collaborate with Remote WorkHers to foster innovation and inclusivity in the remote workspace.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div ref={addToRefs} className="mt-36 md:px-20">
                            <div className="text-center">
                                <div className="w-max mx-auto text-[#F963AB]">
                                    <h4 className="font-jost font-[500]">Services</h4>
                                </div>
                                <h3 className="font-jakarta text-3xl md:text-5xl font-bold mt-5 mb-5">
                                    For Businesses
                                </h3>
                            </div>
                            <div className="mt-10 md:mt-16">
                                <div className="flex flex-col md:grid grid-cols-3 gap-7">
                                    <div className="border rounded-3xl border-solid border-[#D6D6D6] p-5">
                                        <Image src={TalentOne} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                        <div className="mt-4">
                                            <h3 className="font-jakarta text-2xl font-bold mt-5">
                                                Partnership
                                            </h3>
                                            <div className="mt-2 mx-auto">
                                                <p className="text-base leading-relaxed font-jakarta text-[#475467] mb-4">
                                                    Learn everything about remote work, from beginner skills to professional-level expertise.
                                                </p>
                                                <Link href="" className="text-accent text-base font-jost font-600 flex gap-3 items-center">Read More <FaArrowRight /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border rounded-3xl border-solid border-[#D6D6D6] p-5">
                                        <div className="mt-4">
                                            <h3 className="font-jakarta text-2xl font-bold">
                                                Partnership
                                            </h3>
                                            <div className="mt-2 mx-auto">
                                                <p className="text-base leading-relaxed font-jakarta text-[#475467] mb-4">
                                                    Advanced sessions led by experts to level up your remote work skills.
                                                </p>
                                                <Link href="" className="text-accent text-base font-jost font-600 flex gap-3 items-center">Read More <FaArrowRight /></Link>
                                            </div>
                                        </div>
                                        <Image src={TalentTwo} alt="women posing for picture" className="rounded-xl w-full object-cover mt-10" />
                                    </div>
                                    <div className="border rounded-3xl border-solid border-[#D6D6D6] p-5">
                                        <Image src={TalentThree} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                        <div className="mt-4">
                                            <h3 className="font-jakarta text-2xl font-bold mt-5">
                                                Partnership
                                            </h3>
                                            <div className="mt-2 mx-auto">
                                                <p className="text-base leading-relaxed font-jakarta text-[#475467] mb-4">
                                                    Personalized one-on-one guidance to help you excel in your remote career.
                                                </p>
                                                <Link href="" className="text-accent text-base font-jost font-600 flex gap-3 items-center">Read More <FaArrowRight /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={addToRefs} className="mt-36 md:px-20">
                            <div className="text-center">
                                <h3 className="font-jakarta text-3xl md:text-5xl font-bold mt-5 mb-16">
                                    Why Choose Us
                                </h3>
                            </div>
                            <div className="flex flex-col md:grid grid-cols-3 text-center gap-5 md:gap-20">
                                <div>
                                    <div className="mx-auto border-2 mb-5 border-solid border-accent size-16 rounded-full flex items-center justify-center">
                                        <h4 className="text-accent text-2xl">1</h4>
                                    </div>
                                    <h4 className="font-jakarta font-medium text-2xl mb-3">How do consultations work?</h4>
                                    <p className="font-jakarta text-base text-[#808080] leading-relaxed mb-5">These issues can
                                        range from minor illnesses and injuries to chronic.</p>
                                </div>
                                <div>
                                    <div className="mx-auto border-2 mb-5 border-solid border-accent size-16 rounded-full flex items-center justify-center">
                                        <h4 className="text-accent text-2xl">2</h4>
                                    </div>
                                    <h4 className="font-jakarta font-medium text-2xl mb-3">How do consultations work?</h4>
                                    <p className="font-jakarta text-base text-[#808080] leading-relaxed mb-5">These issues can
                                        range from minor illnesses and injuries to chronic.</p>
                                </div>
                                <div>
                                    <div className="mx-auto border-2 mb-5 border-solid border-accent size-16 rounded-full flex items-center justify-center">
                                        <h4 className="text-accent text-2xl">3</h4>
                                    </div>
                                    <h4 className="font-jakarta font-medium text-2xl mb-3">How do consultations work?</h4>
                                    <p className="font-jakarta text-base text-[#808080] leading-relaxed mb-5">These issues can
                                        range from minor illnesses and injuries to chronic.</p>
                                </div>
                            </div>

                            <div className="mt-32">
                                <div className="grid relative grid-cols-3/1 gap-3 md:gap-10">
                                    <div>
                                        <Image src={ProgressOne} alt="woman posing for picture" className="rounded-xl h-full w-full" />
                                    </div>
                                    <div className="flex flex-col gap-3 md:gap-10">
                                        <Image src={ProgressTwo} alt="woman posing for picture" className="rounded-xl h-full w-full" />
                                        <Image src={ProgressThree} alt="woman posing for picture" className="rounded-xl h-full w-full" />
                                    </div>
                                    <div className="bg-white absolute rounded-xl -bottom-24 md:-bottom-10 w-[70%] md:w-[30%] right-14 md:right-32 py-5 shadow-2xl px-5">
                                        <div>
                                            <h3 className="font-jakarta font-medium text-xl md:text-3xl mb-5">Our Progress and <br /> Milestones</h3>
                                            <p className="text-xs md:text-sm font-jakarta font-medium text-[#808080]">
                                                Effective progress tracking and milestone setting are critical components...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-32 md:mt-24 grid-cols-2 gap-10 md:gap-0 md:grid-cols-4 grid">
                                    <div className="text-center py-5 md:border-solid md:border-[#F963AB] md:border-r px-10">
                                        <h2 className="text-4xl font-jakarta font-medium mb-3">2+</h2>
                                        <p className="text-base font-jakarta font-medium text-[#808080]">Years of Experience</p>
                                    </div>
                                    <div className="text-center py-5 md:border-solid md:border-[#F963AB] md:border-r px-10">
                                        <h2 className="text-4xl font-jakarta font-medium mb-3">70+</h2>
                                        <p className="text-base font-jakarta font-medium text-[#808080]">Total Courses</p>
                                    </div>
                                    <div className="text-center py-5 md:border-solid md:border-[#F963AB] md:border-r px-10">
                                        <h2 className="text-4xl font-jakarta font-medium mb-3">1K+</h2>
                                        <p className="text-base font-jakarta font-medium text-[#808080]">Satisfied Partnerships</p>
                                    </div>
                                    <div className="text-center py-5 px-10">
                                        <h2 className="text-4xl font-jakarta font-medium mb-3">20+</h2>
                                        <p className="text-base font-jakarta font-medium text-[#808080]">Certificates and Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={addToRefs} className="mt-36 md:px-20">
                            <div className="text-center">
                                <h3 className="font-jakarta text-3xl md:text-5xl font-bold mt-5 mb-16">
                                    What Our Community Says
                                </h3>
                            </div>
                            <div className="my-10">
                                <Image src={QuoteImg} alt="woman posing for picture" className="rounded-xl mx-auto" />
                            </div>
                            <div className="mt-10 md:w-[70%] mx-auto text-center border rounded-xl border-solid border-[#D6D6D6] py-5 px-5 md:px-14">
                                <h4 className="font-jakarta text-base md:text-lg font-medium leading-loose">
                                    Working with Remote WorkHers was a game-changer for our company. Their consultation services helped us
                                    streamline our remote work policies and hire top talent with ease. Highly recommend!
                                </h4>
                                <div className="mt-7">
                                    <h4 className="text-accent font-medium font-jakarta">Samantha T., HR Manager at TechSpark Inc.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={addToRefs} className="mt-36 px-5 md:px-20">
                        <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-32 md:items-center">
                            <div>
                                <h4 className="font-jost font-[500] text-accent">Contact Us</h4>
                                <h3 className="font-jakarta text-3xl md:text-5xl font-bold mt-5 mb-10 md:mb-16">
                                    Reach Our Service Team
                                </h3>
                                <div className="mt-3">
                                    <div className="border-solid border-t border-[#D6D6D6] py-7">
                                        <div className="flex gap-5">
                                            <div>
                                                <FiMapPin className="font-bold text-accent text-2xl" />
                                            </div>
                                            <div className="">
                                                <h4 className="font-500 mb-2 text-xl font-jakarta">Address</h4>
                                                <a href="mailTo:info@+1800-525-54-589" className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                                    403, Port Washington Road, Canada.
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-8 md:gap-0 md:grid grid-cols-2 border-solid border-y border-[#D6D6D6] py-7">
                                        <div className="flex gap-5">
                                            <div>
                                                <MdOutlineMail className="font-bold text-accent text-2xl" />
                                            </div>
                                            <div className="">
                                                <h4 className="font-500 mb-2 text-xl font-jakarta">Contact Details</h4>
                                                <a href="mailTo:info@+1800-525-54-589" className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                                    +1 800-525-54-589
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex gap-5">
                                            <div>
                                                <MdOutlineMail className="font-bold text-accent text-2xl" />
                                            </div>
                                            <div className="">
                                                <h4 className="font-500 mb-2 text-xl font-jakarta">Email Us</h4>
                                                <a href="mailTo:info@remoteworkher.com" className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                                    info@remoteworkher.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image src={Map} alt="women posing for picture" className="rounded-xl object-cover" />
                            </div>
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    )
}

export default ServicesPage;