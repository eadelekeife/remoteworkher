"use client";

import DisplayLayout from "@/components/layout";
import Image from "next/image";

import { MdArrowForward } from "react-icons/md";

import { gsap } from 'gsap';

import SingleBlogListing from "@/components/blog/single";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import VectorImg from "@/assets/images/vector-bg.png";
import BlogImg from "@/assets/images/blog/blog_content.png";
import { IoFilter } from "react-icons/io5";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        <div>
          {/* <Image src={VectorImg} alt="vector background" className="vector-bg z-10" /> */}
          <div className="md:min-h-[100vh] job-hero pt-24 py-24 bg-cover bg-[top_left] bg-no-repeat bg-center " style={{backgroundImage:`url(${VectorImg.src})`}}>
            <div className="md:w-[70%] px-5 md:px-0 mx-auto text-center flex flex-col justify-content">
              <div ref={addToRefs}>
                <h2 style={{ display: 'block' }} className="font-bold md:w-[80%] mx-auto text-4xl md:text-6xl pt-16 leading-tight">Insights, Tips, and Stories for Thriving in Remote Work</h2>
              </div>
              <div ref={addToRefs} className="mt-3 md:mt-8 md:w-[80%] mx-auto">
                <p style={{ display: 'block' }} className="text-sm md:text-lg leading-loose md:leading-normal">Explore practical advice, success stories, and the latest trends
                  in remote work. Are you just starting out or levelling up your skills, we've got something for every Remote WorkHer.</p>
              </div>
              <div ref={addToRefs} className="mt-8">
                <button className="flex items-center w-max mx-auto gap-3 bg-black py-5 px-8 text-white text-sm rounded-xl">Start
                  Reading <MdArrowForward className="text-xl" /></button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:grid grid-cols-1/2 px-5 md:px-0 md:w-[85%] mx-auto md:gap-20 -mt-16 z-30 relative">
            <div>
              <div className="flex items-center mt-5 gap-5 md:gap-0">
                <div className="flex-1 flex items-center px-2 mx-auto bg-white rounded-lg py-1 border-solid border-2 border-[#EDEDED]">
                  <FiSearch />
                  <input type="text" className="py-2 border-none flex-1" />
                </div>
                <IoFilter className="md:hidden text-2xl" />
              </div>
              <div className="hidden md:block mt-8">
                <div>
                  <p className="text-offwhite font-[600]">Blog categories</p>
                  <div className="mt-5">
                    <ul className="flex flex-col gap-4">
                      <li className="bg-[#F9FAFB] font-[600] py-3 px-5 text-[#E62D86] rounded-lg">View all</li>
                      <li className="px-5 font-[600] text-offwhite">Design</li>
                      <li className="px-5 font-[600] text-offwhite">Product</li>
                      <li className="px-5 font-[600] text-offwhite">Software Engineering</li>
                      <li className="px-5 font-[600] text-offwhite">Customer Success</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex mt-6 justify-between items-center">
                <div>
                  <h3 className="text-xl md:text-4xl font-bold">Blog posts</h3>
                </div>
                <div className="">
                  <div className="flex items-center px-3 justify-between rounded-lg py-3 md:min-w-[20rem] bg-white border-solid border-2 border-[#EDEDED]">
                    <p>Most recent</p>
                    <MdOutlineKeyboardArrowDown className="text-2xl text-[#667085]" />
                  </div>
                </div>
              </div>
              <div className="mt-10 md:mt-24">
                <div className="flex flex-col md:grid grid-cols-2 gap-x-10 gap-y-10 md:gap-y-20">
                  <SingleBlogListing />
                  <SingleBlogListing />
                  <SingleBlogListing />
                  <SingleBlogListing />
                  <SingleBlogListing />
                  <SingleBlogListing />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 px-5 md:px-20">
            <div className="flex justify-between border-t-2 border-solid border-[#EAECF0] pt-10">
              <div className="hidden md:block">
                <button className="px-4 md:px-6 py-3 text-base md:text-sm border-2 border-solid border-[#D0D5DD] font-[600] text-[#344054] rounded-xl flex gap-5 items-center">
                  <FaArrowLeft /> Previous</button>
              </div>
              <div>
                <ul className="flex justify-between md:gap-5">
                  <li className="font-[500] text-sm md:text-base bg-[#F9FAFB] rounded-lg px-7 py-4">1</li>
                  <li className="font-[500] text-sm md:text-base px-4 py-4">2</li>
                  <li className="font-[500] text-sm md:text-base px-4 py-4">3</li>
                  <li className="font-[500] text-sm md:text-base px-4 py-4">...</li>
                  <li className="font-[500] text-sm md:text-base px-4 py-4">8</li>
                  <li className="font-[500] text-sm md:text-base px-4 py-4">9</li>
                  <li className="font-[500] text-sm md:text-base px-4 py-4">10</li>
                </ul>
              </div>
              <div className="hidden md:block">
                <button className="px-6 py-3 border-2 border-solid border-[#D0D5DD] font-[600] text-[#344054] rounded-xl flex gap-5 items-center">
                  Next <FaArrowRight /></button>
              </div>
            </div>
          </div>
          <div className="mt-28 px-5 md:px-20">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
              <div ref={addToRefs} className="md:w-[50%]">
                <h3 className="text-3xl md:text-5xl font-jakarta font-bold leading-tight mb-7">Ready to Take Your Remote Work Journey to the Next Level?</h3>
                <p className="text-base md:text-lg text-[#475467] mb-10 block">Join Remote WorkHers and access exclusive resources, connect with a supportive community.</p>
                <button className="bg-accent px-8 py-4 font-[600] text-base text-white rounded-lg">Join Community</button>
              </div>
              <div className="md:w-[50%] items-end flex-col flex">
                <Image src={BlogImg} alt="different professionals" className="z-10" />
              </div>
            </div>
          </div>
        </div>
      </DisplayLayout>
    </div>
  );
}
