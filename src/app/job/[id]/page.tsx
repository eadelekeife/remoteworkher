"use client";

import DisplayLayout from "@/components/layout";
import Image from "next/image";

import WomenJobBoard from "@/assets/images/job_board_women.svg";
import SingleJobListing from "@/components/job/listing";
import SingleJobDetail from "@/components/job/listing-detail";

import VectorImg from "@/assets/images/vector-bg.png";
import GroupImg from "@/assets/images/group.png";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
                <div className="detail">
                    <Image src={VectorImg} alt="vector background" className="vector-bg z-10" />
                    <div ref={addToRefs} className="job-hero relative px-5 md:px-0 pt-32 pb-20 md:py-32 md:w-[70%] mx-auto text-center">
                        <h2 className="font-bold text-4xl md:text-6xl">Job Board</h2>
                        <div className="mt-4 md:w-[80%] mx-auto">
                            <p className="text-sm md:text-lg leading-loose">Explore practical advice, success stories, and the latest trends
                                in remote work. Are you just starting out or levelling up your skills, we've got something for every Remote WorkHer.</p>
                        </div>
                        <Image src={GroupImg} alt="group background" className="group-bg z-20" />
                    </div>
                    <div className="md:w-[70%] px-5 md:px-0 mx-auto">
                        <div className="">
                            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-x-3 gap-y-20">
                                <div className="flex flex-col gap-y-16">
                                    <SingleJobListing />
                                    <SingleJobListing />
                                    <SingleJobListing />
                                    <SingleJobListing />
                                    <SingleJobListing />
                                    <SingleJobListing />
                                </div>
                                <div>
                                    <SingleJobDetail />
                                </div>
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
