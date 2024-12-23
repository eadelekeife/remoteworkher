"use client";
import DisplayLayout from "@/components/layout";
import Image from "next/image";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import WomenJobBoard from "@/assets/images/job_board_women.svg";
import SingleJobListing from "@/components/job/listing";

import VectorImg from "@/assets/images/vector-bg.png";
import GroupImg from "@/assets/images/group.png";
import { useEffect, useRef } from "react";

export default function JobBoard() {
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
                <div className="">
                    <Image src={VectorImg} alt="vector background" className="vector-bg z-10" />
                    <div className="job-hero relative pt-40 px-5 md:px-0 pb-16 text-center x-20">
                        <div ref={addToRefs} className="md:w-[70%] mx-auto">
                            <h2 className="font-bold text-4xl md:text-6xl">Find Your Next Remote Opportunity</h2>
                            <div className="mt-3 md:mt-7 md:w-[80%] mx-auto">
                                <p className="text-sm md:text-lg text-[#666666] leading-loose md:leading-snug">Explore practical advice, success stories, and the latest trends in remote work. Are you just starting out or
                                    levelling up your skills, we've got something for every Remote WorkHer.</p>
                            </div>
                            <div className="mt-7">
                                <div className="md:w-[65%] flex mx-auto px-1 rounded-lg py-1 border-solid border-2 border-[#EDEDED]">
                                    <input type="text" className="flex-1" />
                                    <button className="bg-black py-4 px-10 rounded-lg text-white text-sm">Search Skills</button>
                                </div>
                            </div>
                            <div className="mt-14">
                                <Image src={WomenJobBoard} alt="women in different careers" className="mb-5 w-max mx-auto" />
                            </div>
                        </div>
                        <Image src={GroupImg} alt="group background" className="group-bg z-20" />
                    </div>
                    <div className="md:w-[70%] px-5 md:px-0 mx-auto">
                        <div ref={addToRefs} className="text-center">
                            <h2 className="font-bold text-3xl md:text-5xl"> Latest Featured Jobs</h2>
                            <div className="mt-3 md:mt-6 md:w-[40%] mx-auto">
                                <p className="text-sm md:text-base text-[#574F4A] leading-loose">Search and find your dream job is now easier than ever. Just browse a job and apply if you need to.</p>
                            </div>
                        </div>
                        <div className="mt-10 md:mt-20">
                            <div className="grid md:grid-cols-2 gap-x-3 gap-y-10 md:gap-y-20">
                                <SingleJobListing />
                                <SingleJobListing />
                                <SingleJobListing />
                                <SingleJobListing />
                                <SingleJobListing />
                                <SingleJobListing />
                            </div>
                        </div>
                        <div className="mt-20 mb-32">
                            <button className="border-2 border-solid border-[#26272B] font-[600] mx-auto block px-7 py-3 rounded-xl">Browse All Jobs</button>
                        </div>
                    </div>
                </div>
            </DisplayLayout>
        </div>
    );
}
