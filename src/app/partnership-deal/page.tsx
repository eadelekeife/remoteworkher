"use client";
import DisplayLayout from "@/components/layout";
import Image from "next/image";

import RemoteImg from "@/assets/images/services/business/map.svg";
import IconImg from "@/assets/images/services/business/icon.svg";
import TeamImg from "@/assets/images/services/business/Group 18583.svg";

import VectorImg from "@/assets/images/vector-bg.png";
import HeroImg from "@/assets/images/services/business/hero.svg";

import { FaArrowRight } from "react-icons/fa";

import { gsap } from 'gsap';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import BGMain from "@/assets/images/services/business/BG.svg"
import VectorMain from "@/assets/images/services/business/Vector.svg"

const PartnershipDeal = () => {
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
                    <Image src={VectorImg} alt="vector background" className="vector-bg z-10" />
                    <div className="md:min-h-[100vh] job-hero pt-24">
                        <div className="md:w-[85%] px-5 md:px-0 mx-auto text-center">
                            <div ref={addToRefs}>
                                <h2 className="block font-bold md:w-[80%] mx-auto text-2xl md:text-4xl md:text-3xl md:text-5xl pt-16 leading-tight md:leading-tight">
                                    Become A Partner</h2>
                            </div>
                            <div ref={addToRefs} className="mt-3 md:mt-7 md:w-[65%] mx-auto mb-10">
                                <p style={{ display: 'block' }} className="text-sm md:text-lg leading-loose md:leading-normal">
                                    We are trusted by our partners</p>
                            </div>
                            <button className="bg-black text-white py-4 px-7 rounded-lg flex gap-3 mx-auto items-center">Partner WIth Us <FaArrowRight /></button>
                            <div className="flex gap-8 items-end -mt-4">
                                <Image src={HeroImg} alt="woman posing for picture" className="w-max mx-auto max-[1245px] mt-16" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-32 px-5 md:px-40">
                        <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-32">
                            <div className="mx-auto max-w-[570px]">
                                <div className="flex justify-between flex-col gap-5 md:gap-0 h-full">
                                    <div>
                                        <h3 className="w-[80%] text-3xl md:text-3xl md:text-5xl mb-5 leading-tight font-bold font-jakarta text-2xl">Working with our team</h3>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            Adeife and the team work really hard to ensure that the community is always front of
                                            mind, partnering with us will be the best decision you make
                                        </p>
                                    </div>
                                    <button className="bg-[#F963AB] rounded-lg w-max text-white py-4 px-8 text-sm">Partner Now</button>
                                </div>
                            </div>
                            <div>
                                <Image src={TeamImg} alt="woman posing for picture" className="rounded-xl w-max h-max hidden md:block" />
                            </div>
                        </div>
                        <div className="md:items-center flex flex-col md:grid grid-cols-2 gap-5 md:gap-32 mt-5 md:mt-20 md:mt-40">
                            <div>
                                <Image src={RemoteImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                            </div>
                            <div>
                                <div className="mx-auto max-w-[570px]">
                                    <h3 className="text-3xl md:text-5xl mb-5 leading-normal font-bold font-jakarta text-2xl">Amplify your brand</h3>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose mb-4">
                                        Raise your brand&apos;s visibility and reach by getting your brand closer to thousands of highly engaged
                                        SEO and marketers.
                                    </p>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        Connect with our community of over 10,000+ members, promote your products and services to our 60,000+ social media
                                        followers, and engage our community in person at our 5 international conferences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:items-center flex flex-col-reverse md:grid grid-cols-2 mt-20 md:mt-32 gap-5 md:gap-32">
                            <div>
                                <div className="mx-auto max-w-[570px]">
                                    <h3 className="text-3xl md:text-5xl mb-5 leading-normal font-bold font-jakarta text-2xl">Connect with marketers</h3>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose mb-4">
                                        Build lasting relationships by helping members achieve our collective goals of connection, opportunities, education, and amplification.
                                    </p>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        You can also tap into our community for user testing and feedback, gathering valuable community insights for your products and services.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Image src={RemoteImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                            </div>
                        </div>
                        <div className="md:items-center flex flex-col md:grid grid-cols-2 gap-5 md:gap-32 mt-20 md:mt-40">
                            <div>
                                <Image src={RemoteImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                            </div>
                            <div>
                                <div className="mx-auto max-w-[570px]">
                                    <h3 className="text-3xl md:text-5xl mb-5 leading-normal font-bold font-jakarta text-2xl">Drive sales that stick</h3>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose mb-4">
                                        Engage perfect-fit customers and show off your products and services through value-based touchpoints, exclusive offers, and genuine connections.
                                    </p>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        Partnering with WTS lets you drive meaningful sales and foster long-term loyalty by reaching a community that values authenticity and innovation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:items-center flex flex-col-reverse md:grid grid-cols-2 mt-20 md:mt-32 gap-5 md:gap-32">
                            <div>
                                <div className="mx-auto max-w-[570px]">
                                    <h3 className="text-3xl md:text-5xl mb-5 leading-normal font-bold font-jakarta text-2xl">Invest in and find your people</h3>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose mb-4">
                                        Tap us for motivation, growth and training for your teams - encouraging access to WTS member benefits
                                        like WTSFest, WTSMentorship, our Slack Community, and other empowering initiatives.
                                    </p>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        Benefit from targeted job role amplification and recruit campaigns as you tap into our community to recruit talented marketers.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Image src={RemoteImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                            </div>
                        </div>
                        <div className="mt-32">
                            <div className="text-center mb-10">
                                <div className="w-max mx-auto text-[#F963AB]">
                                    <h4 className="font-jost font-[500]">Services</h4>
                                </div>
                                <h3 className="font-jakarta text-3xl md:text-4xl font-bold mt-5 mb-5">
                                    Our Partnership Packages
                                </h3>
                                <p className="text-sm md:text-base leading-relaxed mx-auto text-[#667085] font-jakarta font-medium">
                                    Simple, transparent pricing that grows with you.
                                </p>
                            </div>
                            <div className="flex flex-col md:grid grid-cols-3 gap-9">
                                <div className="bg-white shadow border border-solid border-[#10182814] rounded-xl">
                                    <div className="p-7 py-10">
                                        <div className="size-12 rounded-lg shadow mb-4 mx-auto border border-solid border-[#EAECF0]"></div>
                                        <div className="text-center">
                                            <h4 className="text-sm md:text-base font-dmsans mb-2 font-[500] text-[#F963AB]">Basic plan</h4>
                                            <h4 className="text-2xl md:text-4xl font-600 mb-3">$10/mth</h4>
                                            <p className="mb-6 text-[#475467] text-sm">Starts From</p>
                                        </div>
                                        <ul className="flex gap-3 flex-col">
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#F9FAFB] py-7 px-7 rounded-b-xl">
                                        <button className="bg-[#F963AB] rounded-lg text-white py-4 w-full text-sm">Get Started</button>
                                    </div>
                                </div>
                                <div className="bg-white shadow border border-solid border-[#10182814] rounded-xl">
                                    <div className="p-7 py-10">
                                        <div className="size-12 rounded-lg shadow mb-4 mx-auto border border-solid border-[#EAECF0]"></div>
                                        <div className="text-center">
                                            <h4 className="text-sm md:text-base font-dmsans mb-2 font-[500] text-[#F963AB]">Basic plan</h4>
                                            <h4 className="text-2xl md:text-4xl font-600 mb-3">$10/mth</h4>
                                            <p className="mb-6 text-[#475467] text-sm">Starts From</p>
                                        </div>
                                        <ul className="flex gap-3 flex-col">
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#F9FAFB] py-7 px-7 rounded-b-xl">
                                        <button className="bg-[#F963AB] rounded-lg text-white py-4 w-full text-sm">Get Started</button>
                                    </div>
                                </div>
                                <div className="bg-white shadow border border-solid border-[#10182814] rounded-xl">
                                    <div className="p-7 py-10">
                                        <div className="size-12 rounded-lg shadow mb-4 mx-auto border border-solid border-[#EAECF0]"></div>
                                        <div className="text-center">
                                            <h4 className="text-sm md:text-base font-dmsans mb-2 font-[500] text-[#F963AB]">Basic plan</h4>
                                            <h4 className="text-2xl md:text-4xl font-600 mb-3">$10/mth</h4>
                                            <p className="mb-6 text-[#475467] text-sm">Starts From</p>
                                        </div>
                                        <ul className="flex gap-3 flex-col">
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                            <li className="text-sm md:text-base flex items-center gap-2">
                                                <span className="rounded-full size-6 bg-[#FFEDED] flex items-center justify-center">
                                                    <Image src={IconImg} alt="woman posing for picture" className="rounded-xl w-max h-max" />
                                                </span>
                                                <p className="text-[#475467]">Access to all basic features</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-[#F9FAFB] py-7 px-7 rounded-b-xl">
                                        <button className="bg-[#F963AB] rounded-lg text-white py-4 w-full text-sm">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-32">
                            <div className="bg-[#F963AB] pt-20 py-32 rounded-xl max-h-[422px] relative">
                                <h2 className="font-jakarta mb-10 text-2xl md:text-6xl max-w-[770px] mx-auto leading-tight font-bold text-center">
                                    Reach Out to Us for Partnership Inquiries
                                </h2>
                                <div className="flex flex-col md:flex-row gap-5 max-w-[651px] mx-auto w-[80%]">
                                    <div className="flex-1">
                                        <input className="w-full py-5 text-sm px-4 rounded-lg text-[#574F4A]" placeholder="Enter your email address" />
                                    </div>
                                    <div>
                                        <button className="bg-black text-white py-5 md:py-0 h-full px-10 rounded-lg">Reach Out</button>
                                    </div>
                                </div>
                                <Image src={BGMain} alt="vector background" className="absolute right-0 bottom-0" />
                                <Image src={VectorMain} alt="vector background" className="absolute left-10 top-5 md:top-20" />
                            </div>
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    )
}

export default PartnershipDeal;