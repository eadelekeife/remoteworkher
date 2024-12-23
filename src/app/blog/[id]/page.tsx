"use client";

import DisplayLayout from "@/components/layout";

import Image from "next/image";
import BlogHero from "@/assets/images/blog/img_hero.png";
import InnerBlogData from "@/assets/images/blog/inner_blog.png";
import { LuSend } from "react-icons/lu";

import { FiCopy } from "react-icons/fi";
import SingleBlogListing from "@/components/blog/single";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";

const BlogDetailPage = () => {
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
                <div className="px-5 md:px-20 pt-40">
                    <div ref={addToRefs} className="md:w-[45%]">
                        <div className="bg-[#E7F5F1] py-1 px-2 flex items-center gap-2 w-max border-solid border-2 border-[#90D0BF] rounded-full">
                            <p className="bg-white text-[#0A6C52] py-1 px-2 rounded-full text-xs md:text-sm">Software</p>
                            <p className="text-xs md:text-sm">8 min read</p>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold my-5">Building your API stack</h3>
                        <p className="text-sm md:text-base text-[#475467]">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...</p>
                    </div>
                    <Image src={BlogHero} className="w-full mt-10 mb-5 md:mb-10" alt="company logo" />
                    <div className="flex flex-col md:flex-row justify-between md:items-end">
                        <div className="flex gap-20 items-center">
                            <div>
                                <p className="font-[600] text-sm md:text-base text-accent mb-5">Written by</p>
                                <h5 className="font-[500] text-base md:text-lg">Alec Whitten</h5>
                            </div>
                            <div>
                                <p className="font-[600] text-sm md:text-base text-accent mb-5">Published on</p>
                                <h5 className="font-[500] text-base md:text-lg">17 Jan 2024</h5>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div>
                                <div className="py-2 px-5 border-2 border-solid border-[#D0D5DD] text-[#344054] flex items-center gap-3 text-base font-[600] rounded-lg">
                                    <FiCopy />Copy Link</div>
                            </div>
                            <div>
                                <div className="py-2 px-5 border-2 border-solid border-[#D0D5DD] text-[#344054] text-base font-[600] rounded-lg">Copy Link</div>
                            </div>
                            <div>
                                <div className="py-2 px-5 border-2 border-solid border-[#D0D5DD] text-[#344054] text-base font-[600] rounded-lg">Copy Link</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:grid grid-cols-1/2 gap-20 mt-16 z-30 relative">
                        <div>
                            <div className="bg-[#FFF9FC] px-5 md:px-8 py-10 rounded-xl border-2 border-solid border-[#F6ECF1]">
                                <div className="bg-white w-max rounded-xl px-3 py-3 mb-14 md:mb-20 border-solid border-2 border-[#EAECF0]">
                                    <LuSend className="text-xl" />
                                </div>
                                <h4 className="text-xl font-[600] font-jakarta mb-2">Weekly newsletter</h4>
                                <p className="leading-normal text-[#475467]">No spam. Just the latest releases and tips, interesting articles, and exclusive
                                    interviews in your inbox every week.</p>
                                <div className="flex items-center px-2 mx-auto rounded-lg py-1 mt-8 border-solid border-2 border-[#EDEDED]">
                                    <input type="text" placeholder="Enter your email" className="py-2 bg-transparent text-sm border-none flex-1" />
                                </div>
                                <p className="text-[#475467] text-sm mt-2">Read about our <span className="border-b-2 border-solid border-[]">privacy policy.</span></p>
                                <button className="bg-black w-full py-3 text-white text-sm rounded-lg mt-5">Subscribe</button>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm md:text-base mb-5 text-[#475467] leading-loose">
                                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum
                                felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae
                                nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                            <p className="text-sm md:text-base text-[#475467] leading-loose">
                                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed
                                auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at
                                donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed
                                auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at
                                donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                            </p>
                            <Image src={InnerBlogData} className="w-full mt-10 md:mt-16 mb-10 md:mb-16" alt="company logo" />
                            <p className="text-sm md:text-base mb-5 text-[#475467] leading-loose">
                                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum
                                felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae
                                nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                            <p className="text-sm md:text-base text-[#475467] leading-loose">
                                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed
                                auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at
                                donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed
                                auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at
                                donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:grid grid-cols-1/2 gap-20 mt-28 z-30 relative">
                        <div>
                            <p className="text-accent mb-4 font-[500]">Latest</p>
                            <h3 className="text-4xl font-bold my-5 font-jakarta font-[600]">From the blog</h3>
                            <p className="text-base text-[#475467] mb-10">The latest industry news, interviews, technologies, and resources.</p>
                            <button className="bg-accent px-8 py-4 font-[600] text-base text-white rounded-lg">View all posts</button>
                        </div>
                        <div>
                            <div className="flex flex-col md:grid grid-cols-2 gap-10">
                                <SingleBlogListing />
                                <SingleBlogListing />
                            </div>
                        </div>
                    </div>
                </div>
            </DisplayLayout >
        </div >
    )
}

export default BlogDetailPage;