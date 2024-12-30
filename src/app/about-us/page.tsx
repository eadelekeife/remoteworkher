'use client';

import DisplayLayout from "@/components/layout";

import WomanLarge from "@/assets/images/about/big_one.png";
import WomanSmallOne from "@/assets/images/about/small_one.png";
import WomanSmallTwo from "@/assets/images/about/small_two.png";

import GridOne from "@/assets/images/about/grid_1.png";
import GridTwo from "@/assets/images/about/grid_2.png";
import GridThree from "@/assets/images/about/grid_3.png";

import TeamOne from "@/assets/images/about/team_1.png";
import TeamTwo from "@/assets/images/about/team_1.png";
import TeamThree from "@/assets/images/about/team_1.png";

import TestimonialOne from "@/assets/images/about/testimonial_1.png";
import TestimonialTwo from "@/assets/images/about/testimonial_2.png";
import TestimonialThree from "@/assets/images/about/testimonial_3.png";



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
                    <div className="px-5 md:px-14 mt-28" ref={addToRefs}>
                        <div className="about-hero flex items-center justify-center">
                            <div>
                                <h3 className="font-jakarta text-3xl text-center md:text-left md:text-5xl text-white font-bold mt-5 mb-5">
                                    Thrive in a World Without Borders
                                </h3>
                                <p className="font-medium text-base text-white text-center">About Us</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-36 md:w-[90%] mx-auto" ref={addToRefs}>
                        <div className="text-center">
                            <div className="w-max px-6 rounded-full py-3 border-[#F963AB] border-2 border-solid mx-auto text-[#F963AB]">
                                <h4 className="font-jost font-[500]">About Us</h4>
                            </div>
                            <h3 className="font-jakarta text-3xl md:text-5xl font-bold mt-5">
                                The story behind RemoteWorkHer
                            </h3>
                        </div>
                        <div className="mt-16 px-5 md:px-20">
                            <div className="flex flex-col-reverse gap-10 md:gap-0 md:grid grid-cols-2 md:items-center">
                                <div>
                                    <div className="md:w-[65%] mx-auto">
                                        <Image src={WomanLarge} alt="woman posing for picture" className="h-full rounded-xl w-full" />
                                        <div className="mt-5">
                                            <div className="grid grid-cols-1/1.5 gap-6">
                                                <Image src={WomanSmallOne} alt="women posing for picture" className="h-full rounded-xl w-full" />
                                                <Image src={WomanSmallTwo} alt="woman posing for picture" className="h-full rounded-xl w-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-10">
                                        <h4 className="font-600 mb-5 text-2xl md:text-3xl font-jakarta">Our Mission</h4>
                                        <p className="text-lg text-[#667085] leading-relaxed">
                                            At Remote WorkHER, our mission is to empower women to achieve professional success and personal fulfillment
                                            through remote work opportunities. We strive to provide the resources, support, and community needed for
                                            women to thrive in the evolving digital workspace.</p>
                                    </div>
                                    <div className="mb-10">
                                        <h4 className="font-600 mb-5 text-2xl md:text-3xl font-jakarta">Our Vision</h4>
                                        <p className="text-lg text-[#667085] leading-relaxed">
                                            We envision a world where women have equal access to remote work opportunities, enabling them to
                                            balance their careers and personal lives effectively. By fostering a supportive community and offering
                                            tailored resources, we aim to bridge the gender gap in remote employment and inspire women to pursue
                                            their professional aspirations without geographical limitations.
                                        </p>
                                    </div>
                                    <div className="mb-10">
                                        <h4 className="font-600 mb-5 text-2xl md:text-3xl font-jakarta">Our Story</h4>
                                        <p className="text-lg text-[#667085] leading-relaxed">
                                            Remote WorkHER was founded with the goal of supporting women in their remote work journeys. Our
                                            founder, who also runs Penpalms, a content creation agency, recognized the growing need for guidance
                                            in building personal brands, securing remote jobs, and achieving online business success. This
                                            realization led to the creation of Remote WorkHER, a community dedicated to empowering women in the
                                            digital workspace.
                                        </p>
                                    </div>
                                    <button className="px-5 py-3 rounded-lg bg-accent text-white text-sm flex items-center gap-2">Learn more <FaArrowRight className="text-lg text-white" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="mt-36 px-5 md:px-0 md:w-[90%] mx-auto">
                        <div className="text-center" ref={addToRefs}>
                            <h3 className="font-jakarta text-3xl md:text-5xl font-bold mt-5">
                                Services we Offer
                            </h3>
                            <div className="md:w-[60%] mt-3 md:mt-7 mx-auto">
                                <p className="text-base md:text-lg font-jakarta text-[#475467]">
                                    Explore the groundbreaking branding, freelancing/remote work, and beginner guidance. Additionally, I conduct a
                                    LinkedIn masterclass and a 2-day masterclass designed specifically for content writers and social media managers
                                    to help them make their first $1k online.
                                </p>
                            </div>
                        </div>
                        <div className="mt-16 md:px-20" ref={addToRefs}>
                            <div className="flex flex-col md:grid grid-cols-3 gap-10">
                                <div ref={addToRefs}>
                                    <Image src={GridOne} alt="woman posing for picture" className="rounded-xl w-full" />
                                    <div className="mt-4">
                                        <h3 className="font-jakarta text-2xl font-bold mt-5">
                                            Branding
                                        </h3>
                                        <div className="mt-3 mx-auto">
                                            <p className="text-base leading-relaxed font-jakarta text-[#475467]">
                                                Journey to the highest reaches of the earth and discover the unparalleled.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div ref={addToRefs}>
                                    <Image src={GridTwo} alt="woman posing for picture" className="rounded-xl w-full" />
                                    <div className="mt-4">
                                        <h3 className="font-jakarta text-2xl font-bold mt-5">
                                            Freelancing Remote Work
                                        </h3>
                                        <div className="mt-3 mx-auto">
                                            <p className="text-base leading-relaxed font-jakarta text-[#475467]">
                                                Journey to the highest reaches of the earth and discover the unparalleled.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div ref={addToRefs}>
                                    <Image src={GridThree} alt="woman posing for picture" className="rounded-xl w-full" />
                                    <div className="mt-4">
                                        <h3 className="font-jakarta text-2xl font-bold mt-5">
                                            Beginner Guide
                                        </h3>
                                        <div className="mt-3 mx-auto">
                                            <p className="text-base leading-relaxed font-jakarta text-[#475467]">
                                                Journey to the highest reaches of the earth and discover the unparalleled.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="mt-36 px-5 md:px-20 md:w-[90%] mx-auto">
                        <div className="text-center" ref={addToRefs}>
                            <div className="w-max mx-auto text-[#F963AB]">
                                <h4 className="font-jost font-[500]">Testimonial</h4>
                            </div>
                            <h3 className="font-jakarta text-3xl md:text-5xl font-bold mt-5">
                                What our users say about us
                            </h3>
                        </div>
                        <div className="mt-14">
                            <div className="flex flex-col md:grid grid-cols-2 gap-10">
                                <div ref={addToRefs}>
                                    <div className="bg-[#F9F9FB] py-10 md:py-0 rounded-xl h-full flex items-center">
                                        <div className="w-[85%] mx-auto text-center h-max">
                                            <Image src={TestimonialOne} alt="woman posing for picture" className="rounded-xl mx-auto w-max mb-5" />
                                            <p className="font-jakarta text-[#667085] leading-relaxed mb-5">
                                                Within 90 days of mentoring, I landed my first client and exceeded my income goals. The guidance
                                                I received was invaluable."
                                            </p>
                                            <div>
                                                <h4 className="font-jakarta font-600 mb-1">Kate Smith</h4>
                                                <p className="font-jakarta text-sm text-[#808080] leading-relaxed">Marketing Specialist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={addToRefs} className="flex flex-col gap-10">
                                    <div className="bg-[#F9F9FB] py-10 rounded-xl">
                                        <div className="w-[85%] mx-auto text-center md:text-left flex flex-col md:flex-row md:gap-10">
                                            <Image src={TestimonialTwo} alt="woman posing for picture" className="rounded-xl mx-auto w-auto h-max mb-5" />
                                            <div>
                                                <p className="font-jakarta text-[#667085] leading-relaxed mb-5">
                                                    Within 90 days of mentoring, I landed my first client and exceeded my income goals. The guidance
                                                    I received was invaluable."
                                                </p>
                                                <div>
                                                    <h4 className="font-jakarta font-600 mb-1">Kate Smith</h4>
                                                    <p className="font-jakarta text-sm text-[#808080] leading-relaxed">Marketing Specialist</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#F9F9FB] py-10 rounded-xl">
                                        <div className="w-[85%] mx-auto text-center md:text-left flex flex-col md:flex-row md:gap-10">
                                            <Image src={TestimonialTwo} alt="woman posing for picture" className="rounded-xl mx-auto w-auto h-max mb-5" />
                                            <div>
                                                <p className="font-jakarta text-[#667085] leading-relaxed mb-5">
                                                    Within 90 days of mentoring, I landed my first client and exceeded my income goals. The guidance
                                                    I received was invaluable."
                                                </p>
                                                <div>
                                                    <h4 className="font-jakarta font-600 mb-1">Kate Smith</h4>
                                                    <p className="font-jakarta text-sm text-[#808080] leading-relaxed">Marketing Specialist</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-36 md:w-[90%] mx-auto">
                        <div className="" ref={addToRefs}>
                            <div className="mt-7 px-5 md:px-20">
                                <h3 className="font-jakarta text-3xl md:text-5xl font-bold mt-4">
                                    Meet our team.
                                </h3>
                                <div className="md:w-[50%] mt-3 md:mt-7">
                                    <p className="text-lg font-jakarta text-[#475467]">
                                        Empowers users to create, customize, collaborate, and track seamlessly, streamlining project tasks for optimal efficiency.
                                    </p>
                                </div>
                                <div className="flex flex-col md:grid grid-cols-3 gap-10 mt-5 md:mt-14">
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