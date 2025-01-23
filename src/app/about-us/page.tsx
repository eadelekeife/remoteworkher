'use client';

import DisplayLayout from "@/components/layout";

import WomanLarge from "@/assets/images/about/big_one.png";
import WomanSmallOne from "@/assets/images/about/small_one.png";
import WomanSmallTwo from "@/assets/images/about/small_two.png";

import GridOne from "@/assets/images/about/grid_1.svg";
import GridTwo from "@/assets/images/about/grid_2.svg";
import GridThree from "@/assets/images/about/grid_3.svg";

import TeamOne from "@/assets/images/about/team_1.png";
import TeamTwo from "@/assets/images/about/team_1.png";
import TeamThree from "@/assets/images/about/team_1.png";

import TestimonialOne from "@/assets/images/about/kate.svg";
import TestimonialTwo from "@/assets/images/about/rhami.svg";
import TestimonialThree from "@/assets/images/about/sarah.svg";

import Hero from "@/assets/images/about/hero.svg";
import VectorImg from "@/assets/images/vector-bg.png";


import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";

import { gsap } from 'gsap';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const AboutUsPage = () => {
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
                    <div className="px-5 md:px-24 bg-cover bg-center" ref={addToRefs} style={{backgroundImage:`url(${VectorImg.src})`}}>
                        {/* <Image src={VectorImg} alt="vector background" className="vector-bg z-10" /> */}
                        <div className="md:min-h-[100vh] job-hero pt-24 pb-16 md:pb-24">
                            <div className="md:w-[70%] px-5 md:px-0 mx-auto text-center">
                                <div ref={addToRefs}>
                                    <div className="text-[#F963AB] pt-14">
                                        <h4 className="font-600 text-lg font-dmsans">About us</h4>
                                    </div>
                                    <h2 style={{ display: 'block' }} className="font-600 mx-auto text-3xl md:text-5xl pt-6 leading-tight text-[#101828]">Thrive in a World Without Borders</h2>
                                </div>
                                <div ref={addToRefs} className="mt-3 md:mt-8 md:w-[70%] mx-auto">
                                    <p style={{ display: 'block' }} className="text-sm md:text-lg mleading-[14px] md:leading-normal mb-10 md:mb-14 text-[#475467]">We&apos;re a community dedicated  to promoting and sustaining remote work worldwide.</p>
                                </div>
                            </div>
                            <Image src={Hero} alt="woman posing for picture" className="h-full rounded-xl w-full" />
                        </div>
                        {/* <div className="about-hero flex items-center justify-center">
                            <div>
                                <h3 className="font-jakarta text-3xl text-center md:text-left md:text-5xl text-white font-bold mt-5 mb-5">
                                    Thrive in a World Without Borders
                                </h3>
                                <p className="font-medium text-base text-white text-center">About Us</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="px-5 md:px-24 mx-auto" ref={addToRefs}>
                        <div className="text-center">
                            {/* <div className="w-max px-6 rounded-full py-3 border-[#F963AB] border-2 border-solid mx-auto text-[#F963AB]">
                                <h4 className="font-jost font-[500]">About Us</h4>
                            </div> */}
                            <h3 className="font-jakarta text-3xl md:text-5xl font-bold mt-5">
                                The story behind RemoteWorkHer
                            </h3>
                        </div>
                        <div className="mt-10 md:mt-20">
                            <div className="flex flex-col-reverse gap-10 md:gap-24 md:grid grid-cols-2">
                                <div>
                                    <div className="mx-auto">
                                        <Image src={WomanLarge} alt="woman posing for picture" className="h-full rounded-xl w-full" />
                                        <div className="mt-12">
                                            <div className="grid grid-cols-1/1.5 gap-12">
                                                <Image src={WomanSmallOne} alt="women posing for picture" className="h-full rounded-xl w-full" />
                                                <Image src={WomanSmallTwo} alt="woman posing for picture" className="h-full rounded-xl w-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-10">
                                        <h4 className="font-bold mb-3 text-xl md:text-2xl font-jakarta">Our Mission</h4>
                                        <p className="text-base md:text-lg text-[#666666] leading-relaxed">
                                            At Remote WorkHER, our mission is to empower women to achieve professional success and personal fulfillment
                                            through remote work opportunities. We strive to provide the resources, support, and community needed for
                                            women to thrive in the evolving digital workspace.</p>
                                    </div>
                                    <div className="mb-10">
                                        <h4 className="font-bold mb-3 text-xl md:text-2xl font-jakarta">Our Vision</h4>
                                        <p className="text-base md:text-lg text-[#666666] leading-relaxed">
                                            We envision a world where women have equal access to remote work opportunities, enabling them to
                                            balance their careers and personal lives effectively. By fostering a supportive community and offering
                                            tailored resources, we aim to bridge the gender gap in remote employment and inspire women to pursue
                                            their professional aspirations without geographical limitations.
                                        </p>
                                    </div>
                                    <div className="">
                                        <h4 className="font-bold mb-3 text-xl md:text-2xl font-jakarta">Our Story</h4>
                                        <p className="text-base md:text-lg text-[#666666] leading-relaxed">
                                            Remote WorkHER was founded with the goal of supporting women in their remote work journeys. Our
                                            founder, who also runs Penpalms, a content creation agency, recognized the growing need for guidance
                                            in building personal brands, securing remote jobs, and achieving online business success. This
                                            realization led to the creation of Remote WorkHER, a community dedicated to empowering women in the
                                            digital workspace.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24 md:mt-36 px-5 md:px-24 md:w-[90%] mx-auto">
                        <div className="text-center" ref={addToRefs}>
                            <div className="w-max mx-auto text-[#F963AB]">
                                <h4 className="font-jost font-[500] text-lg">Testimonial</h4>
                            </div>
                            <h3 className="font-jakarta text-3xl md:text-5xl text-[#0D0D0D] font-medium mt-5">
                                What our users say about us
                            </h3>
                        </div>
                        <div className="mt-12">
                            <div className="flex flex-col md:grid grid-cols-1/1.5 gap-8">
                                <div ref={addToRefs}>
                                    <div className="bg-[#F9F9FB] py-10 md:py-0 rounded-xl h-full flex items-center">
                                        <div className="w-[75%] mx-auto text-center h-max">
                                            <div>
                                                <Image src={TestimonialOne} alt="woman posing for picture" className="rounded-xl mx-auto w-auto h-[8rem] mb-5" />
                                            </div>
                                            <p className="font-jakarta text-[#667085] text-lg leading-relaxed mb-5">
                                                Within 90 days of mentoring, I landed my first client and exceeded my income goals. The guidance
                                                I received was invaluable."
                                            </p>
                                            <div>
                                                <h4 className="font-jakarta text-base font-600 mb-1">Kate Smith</h4>
                                                <p className="font-jakarta text-base text-[#808080] leading-relaxed">Marketing Specialist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={addToRefs} className="flex flex-col gap-8">
                                    <div className="bg-[#F9F9FB] py-10 rounded-2xl">
                                        <div className="px-10 mx-auto text-center md:text-left flex flex-col md:flex-row items-center md:gap-10">
                                            <div>
                                                <Image src={TestimonialTwo} alt="woman posing for picture" className="rounded-xl mx-auto w-full h-auto mb-5 md:mb-0" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="">
                                                    <p className="font-jakarta text-[#667085] text-lg leading-relaxed mb-5">
                                                        Remote WorkHER was a life-changing experience. It gave me the push I needed to quit my 9-5 job and go remote.
                                                    </p>
                                                    <div>
                                                        <h4 className="font-jakarta font-600 mb-1 text-base">Kate Smith</h4>
                                                        <p className="font-jakarta text-base text-[#808080] leading-relaxed">Marketing Specialist</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#F9F9FB] py-10 rounded-2xl">
                                        <div className="px-10 mx-auto text-center md:text-left flex flex-col md:flex-row items-center md:gap-10">
                                            <div>
                                                <Image src={TestimonialThree} alt="woman posing for picture" className="rounded-xl mx-auto w-full h-auto mb-5 md:mb-0" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="">
                                                    <p className="font-jakarta text-[#667085] text-lg leading-relaxed mb-5">
                                                        After the training, I successfully started a remote career and even moved to Bali!
                                                    </p>
                                                    <div>
                                                        <h4 className="font-jakarta font-600 mb-1 text-base">Kate Smith</h4>
                                                        <p className="font-jakarta text-base text-[#808080] leading-relaxed">Marketing Specialist</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24 md:mt-36 px-5 md:px-0 mx-auto">
                        <div className="text-center" ref={addToRefs}>
                            <h3 className="font-jakarta text-3xl md:text-5xl font-bold mt-5">
                                Services we Offer
                            </h3>
                            <div className="md:w-[60%] mt-3 md:mt-5 mx-auto">
                                <p className="text-base md:text-lg font-jakarta text-[#475467]">
                                    Explore the groundbreaking branding, freelancing/remote work, and beginner guidance. Additionally, I conduct a
                                    LinkedIn masterclass and a 2-day masterclass designed specifically for content writers and social media managers
                                    to help them make their first $1k online.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 md:px-24" ref={addToRefs}>
                            <div className="text-center md:text-left flex flex-col md:grid grid-cols-4 gap-8">
                                <div ref={addToRefs}>
                                    <Image src={GridThree} alt="woman posing for picture" className="rounded-xl mx-auto md:mx-0" />
                                    <div className="mt-4">
                                        <h3 className="font-jakarta text-2xl font-600 text-[#0D0D0D] mt-5">
                                            Community Access
                                        </h3>
                                        <div className="mt-2 mx-auto">
                                            <p className="text-lg leading-relaxed font-jakarta text-[#475467]">
                                                Journey to the highest reaches of the earth and discover the unparalleled.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div ref={addToRefs}>
                                    <Image src={GridThree} alt="woman posing for picture" className="rounded-xl mx-auto md:mx-0" />
                                    <div className="mt-4">
                                        <h3 className="font-jakarta text-2xl font-600 text-[#0D0D0D] mt-5">
                                            Resources
                                        </h3>
                                        <div className="mt-2 mx-auto">
                                            <p className="text-lg leading-relaxed font-jakarta text-[#475467]">
                                                Journey to the highest reaches of the earth and discover the unparalleled.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div ref={addToRefs}>
                                    <Image src={GridOne} alt="woman posing for picture" className="rounded-xl mx-auto md:mx-0" />
                                    <div className="mt-4">
                                        <h3 className="font-jakarta text-2xl font-600 text-[#0D0D0D] mt-5">
                                            Events and Workshop
                                        </h3>
                                        <div className="mt-2 mx-auto">
                                            <p className="text-lg leading-relaxed font-jakarta text-[#475467]">
                                                Journey to the highest reaches of the earth and discover the unparalleled.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div ref={addToRefs}>
                                    <Image src={GridTwo} alt="woman posing for picture" className="rounded-xl mx-auto md:mx-0" />
                                    <div className="mt-4">
                                        <h3 className="font-jakarta text-2xl font-600 text-[#0D0D0D] mt-5">
                                            Mentorship
                                        </h3>
                                        <div className="mt-2 mx-auto">
                                            <p className="text-lg leading-relaxed font-jakarta text-[#475467]">
                                                Journey to the highest reaches of the earth and discover the unparalleled.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24 md:mt-36 mx-auto">
                        <div className="" ref={addToRefs}>
                            <div className="mt-7 px-5 md:px-24 text-center">
                                <h3 className="font-jakarta text-3xl md:text-5xl font-medium text-[#0D0D0D] mt-4">
                                    Meet our team.
                                </h3>
                                <div className="md:w-[50%] mx-auto mt-3 md:mt-5">
                                    <p className="text-base md:text-lg font-jakarta text-[#808080]">
                                        Empowers users to create, customize, collaborate, and track seamlessly, streamlining project tasks for optimal efficiency.
                                    </p>
                                </div>
                                <div className="flex flex-col md:grid grid-cols-3 gap-10 mt-5 md:mt-12">
                                    <div>
                                        <Image src={TeamOne} alt="woman posing for picture" className="rounded-xl w-full" />
                                    </div>
                                    <div>
                                        <Image src={TeamTwo} alt="woman posing for picture" className="rounded-xl w-full" />
                                    </div>
                                    <div>
                                        <Image src={TeamThree} alt="woman posing for picture" className="rounded-xl w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    )
}

export default AboutUsPage;