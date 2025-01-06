"use client";

import DisplayLayout from "@/components/layout";
import Image from "next/image";

import { MdArrowForward } from "react-icons/md";

import { gsap } from 'gsap';

import SingleBlogListing from "@/components/blog/single";

import { FaPhone } from "react-icons/fa6";
import { RiMailSendLine } from "react-icons/ri";
import { LuPlus } from "react-icons/lu";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';

import HeroPeople from "@/assets/images/hero_people.png";
// import HeroImg from "@/assets/images/hero.png";
import HeroImg from "@/assets/images/home/hero.png";
import HeroFly from "@/assets/images/patterns.svg";

import Company1 from "@/assets/images/hero/companies/logo_1.svg";
import Company2 from "@/assets/images/hero/companies/logo_2.svg";
import Company3 from "@/assets/images/hero/companies/logo_3.svg";
import Company4 from "@/assets/images/hero/companies/logo_4.svg";
import Company5 from "@/assets/images/hero/companies/logo_5.svg";

import Grid1 from "@/assets/images/hero/grid_1.png";
import Grid2 from "@/assets/images/hero/grid_2.png";
import Grid3 from "@/assets/images/hero/grid_3.png";

import TestimonialCard1 from "@/assets/images/hero/testimonial_card.png";
import TestimonialCard2 from "@/assets/images/hero/testimonial_card2.png";

import RedGradient from "@/assets/images/hero/red_gradient.png";
import RightRedGradient from "@/assets/images/hero/right_red.png";
import PurpleGradient from "@/assets/images/hero/orange gradient.png";
import GreenGradient from "@/assets/images/hero/green.png";

import Great from "@/assets/images/hero/great.png";
import ExperienceCard from "@/assets/images/hero/card members.png";
import Ellipse from "@/assets/images/hero/ellipse.png";
import RedEclipse from "@/assets/images/hero/red_eclipse.png";
import Eclipse from "@/assets/images/hero/eclipse.png";
import SkillsCard from "@/assets/images/hero/card channel.png";
import CircleGradient from "@/assets/images/hero/circle_gradient.png";

import Pros1 from "@/assets/images/hero/pros_1.png";
import Pros2 from "@/assets/images/hero/pros_2.png";
import Pros3 from "@/assets/images/hero/pros_3.png";
import Pros4 from "@/assets/images/hero/pros_4.png";

import Girl1 from "@/assets/images/hero/girl.png";

import CardModerator1 from "@/assets/images/hero/card_moderator.png";
import CardModerator2 from "@/assets/images/hero/card_moderator2.png";
import CardModerator3 from "@/assets/images/hero/card_moderator3.png";
import CardModerator4 from "@/assets/images/hero/card_moderator4.png";

import Shape from "@/assets/images/hero/Shape.png";

import Woman from "@/assets/images/hero/woman.png";
import Community from "@/assets/images/hero/community.png";
import Quote from "@/assets/images/home/quote.png";

import MainInvolved from "@/assets/images/home/main_involved.png";
import SecInvolved from "@/assets/images/home/sec_involved.png";

import BlogImg from "@/assets/images/blog/blog_content.png";
import { IoFilter } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link";

export default function JobBoard() {

  const [currentView, setCurrentView] = useState("personal");
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <div className="px-5 md:px-20 pt-32 md:pt-20">
            <div className="">
              <div ref={addToRefs} className="flex flex-col md:grid grid-cols-2 items-center">
                <div className="relative">
                  <h2 className="text-[2rem] md:text-[3.5rem] font-bold font-jakarta font-[700] leading-tight">
                    More Than Just a Space, it&apos;s a Community of Remote WorkHers
                  </h2>
                  <p className="mt-6 text-[#666666] text-lg font-[300] w-full md:w-[70%] mb-10">
                    Whatever your remote work journey looks like, Remote WorkHER is here to support, inspire, and elevate you.
                  </p>
                  <button className="bg-accent px-8 py-4 font-[600] text-base text-white rounded-lg mb-10">Join The Community</button>
                  <h4 className="font-dmsans text-sm font-bold mb-3">Community Members</h4>
                  <Image layout="intrisic" src={HeroPeople} className="w-[40%] md:w-max" alt="collection of women" />
                  <Image layout="intrisic" src={HeroFly} className="absolute -top-5 md:top-0 -right-5 md:right-0" alt="flying icon" />
                </div>
                <div className="">
                  <Image layout="intrisic" src={HeroImg} className="w-full md:w-max mx-auto mt-10 mb-5 md:mb-10" alt="collection of women" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 bg-[#F9FAFB] w-full py-14 md:py-10 px-5 md:px-20">
            <p className="text-[#475467] text-xl text-center">Trusted by our Partners</p>
            <div className="mt-7">
              <div className="flex justify-between flex-wrap gap-10 md:flex-unwrap md:gap-0">
                <Image layout="intrisic" src={Company1} className="w-[40%] md:w-max" alt="companies we partner with" />
                <Image layout="intrisic" src={Company2} className="w-[40%] md:w-max" alt="companies we partner with" />
                <Image layout="intrisic" src={Company3} className="w-[40%] md:w-max" alt="companies we partner with" />
                <Image layout="intrisic" src={Company4} className="w-[40%] md:w-max" alt="companies we partner with" />
                <Image layout="intrisic" src={Company5} className="w-[40%] md:w-max" alt="companies we partner with" />
              </div>
            </div>
          </div>
          <div className="px-5 md:px-20 mt-20 relative">
            <div className="md:grid grid-cols-1.5/1">
              <div ref={addToRefs}>
                <h4 className="text-3xl font-bold mb-4">Who We Are</h4>
                <p className="text-base md:text-lg mb-7 md:mb-0 leading-loose text-[#475467]">
                  RemoteWorkHer is a platform dedicated to empowering individuals through remote work opportunities and resources. We help
                  you connect, learn, and grow in your remote career, regardless of where you are
                </p>
                <div className="relative w-full min-h-[20vh] h-[20vh]">
                  <Image layout="intrisic" src={CardModerator1} className="w-max absolute -top-[20%] -left-[10%]" alt="collection of women" />
                  <Image layout="intrisic" src={CardModerator2} className="w-max absolute top-[15%] md:top-[40%] left-[10%]" alt="collection of women" />
                  <Image layout="intrisic" src={CardModerator3} className="w-max absolute -top-[20%] right-[20%]" alt="collection of women" />
                  <Image layout="intrisic" src={CardModerator4} className="w-max absolute top-[15%] md:top-[40%] -right-[0%]" alt="collection of women" />
                </div>
              </div>
              <div className="relative">
                <Image layout="intrisic" src={Girl1} className="w-[40%] md:w-max mx-auto" alt="collection of women" />
              </div>
            </div>
            <Image layout="intrisic" src={RightRedGradient} className="w-max absolute -top-[20rem] right-0" alt="red gradient" />
          </div>
          <div className="mt-28 md:mt-48 px-5 md:px-20" ref={addToRefs}>
            <div className={`button mx-auto w-max relative border-2 border-solid border-[#E2C6D4] p-1 flex items-center rounded-full`}>
              <div onClick={() => {
                setCurrentView("personal")
                setCurrentIndex(0)
              }}
                className={`px-10 md:px-32 cursor-pointer text-center py-3 md:py-5 ${currentIndex === 0 ? "active" : ""} rounded-full`}>
                <h4 className={`font-[600] font-dmsans relative z-40`}>Individuals</h4>
              </div>
              <div onClick={() => {
                setCurrentView("business")
                setCurrentIndex(1)
              }}
                className={`button px-10 md:px-32 cursor-pointer text-center py-3 md:py-5 ${currentIndex === 1 ? "active" : ""} rounded-full`}>
                <h4 className={`font-[600] font-dmsans relative z-40`}>Businesses</h4>
              </div>
              <div style={{ transform: `translateX(${currentIndex * 100}%)` }} className="active-bg"></div>
            </div>
            {
              currentView === "personal" ?
                <div className="mt-10 md:mt-14">
                  <Swiper
                    navigation
                    pagination={false}
                    spaceBetween={50}
                    breakpoints={{
                      // Mobile view (default)
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      // Tablet view
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      // Desktop view
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 35,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="bg-[#FFF1F3] rounded-3xl pt-1 pb-10 px-5">
                        <div className="bg-white p-3 pt-2 mt-6 mb-5 md:mb-5 rounded-lg">
                          <div className="bg-[#FFF8FB] px-3 w-full rounded-lg mt-2 py-2 mb-2">
                            <p className="text-[#555A62] font-jakarta font-[600] text-xs"> The law and Business of Remote Work</p>
                          </div>
                          <Image layout="intrisic" src={Pros1} className="w-full object-fit object-cover rounded-lg" alt="collection of women" />
                          <div className="bg-[#FFF8FB] px-3 w-full rounded-lg mt-2">
                            <ul className="flex gap-5">
                              <li className="text-sm flex items-center gap-3"><span className="text-2xl font-black">&bull;</span>
                                <span className="text-[#555A62] font-jakarta font-[600] text-sm"> Individuals</span></li>
                              {/* <li className="text-sm flex items-center gap-3"><span className="text-2xl font-black">&bull;</span>
                            <span className="text-[#555A62] font-jakarta font-[600] text-sm"> Businesses</span></li> */}
                            </ul>
                          </div>
                        </div>
                        <div className="mb-10">
                          <h4 className="font-bold font-jakarta text-xl leading-snug mb-2">Exclusive Community Events </h4>
                          <p className="text-base text-[#4B5563]">
                            Events that help bring you together with other remote workers and better opportunities
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-[#FFFAEC] rounded-3xl pt-1 pb-10 px-5">
                        <div className="bg-white p-3 pt-2 mt-6 mb-5 md:mb-5 rounded-lg">
                          <div className="bg-[#FFF8FB] px-3 w-full rounded-lg mt-2 py-2 mb-2">
                            <p className="text-[#555A62] font-jakarta font-[600] text-xs"> The law and Business of Remote Work</p>
                          </div>
                          <Image layout="intrisic" src={Pros2} className="w-full object-fit object-cover rounded-lg" alt="collection of women" />
                          <div className="bg-[#FFF8FB] px-3 w-full rounded-lg mt-2">
                            <ul className="flex gap-5">
                              <li className="text-sm flex items-center gap-3"><span className="text-2xl font-black">&bull;</span>
                                <span className="text-[#555A62] font-jakarta font-[600] text-sm"> Individuals</span></li>
                              {/* <li className="text-sm flex items-center gap-3"><span className="text-2xl font-black">&bull;</span>
                            <span className="text-[#555A62] font-jakarta font-[600] text-sm"> Businesses</span></li> */}
                            </ul>
                          </div>
                        </div>
                        <div className="mb-10">
                          <h4 className="font-bold font-jakarta text-xl leading-snug mb-2">Facebook Community</h4>
                          <p className="text-base text-[#4B5563]">
                            Our easy-to-use editor allows you to create customized job ads within minutes.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-[#F1F3FF] rounded-3xl pt-1 pb-10 px-5">
                        <div className="bg-white p-3 pt-2 mt-6 mb-5 md:mb-5 rounded-lg">
                          <div className="bg-[#FFF8FB] px-3 w-full rounded-lg mt-2 py-2 mb-2">
                            <p className="text-[#555A62] font-jakarta font-[600] text-xs">Open Source Library of resources</p>
                          </div>
                          <Image layout="intrisic" src={Pros3} className="w-full object-fit object-cover rounded-lg" alt="collection of women" />
                          <div className="bg-[#FFF8FB] px-3 w-full rounded-lg mt-2">
                            <ul className="flex gap-5">
                              <li className="text-sm flex items-center gap-3"><span className="text-2xl font-black">&bull;</span>
                                <span className="text-[#555A62] font-jakarta font-[600] text-sm"> Individuals</span></li>
                              {/* <li className="text-sm flex items-center gap-3"><span className="text-2xl font-black">&bull;</span>
                            <span className="text-[#555A62] font-jakarta font-[600] text-sm"> Businesses</span></li> */}
                            </ul>
                          </div>
                        </div>
                        <div className="mb-10">
                          <h4 className="font-bold font-jakarta text-xl leading-snug mb-2">Resources</h4>
                          <p className="text-base text-[#4B5563]">
                            Our easy-to-use resource library provides you with everything needed to help you excel at your job
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-[#F1FFF8] rounded-3xl pt-1 pb-10 px-5">
                        <div className="bg-white p-3 pt-2 mt-6 mb-5 md:mb-5 rounded-lg">
                          <div className="bg-[#FFF8FB] px-3 w-full rounded-lg mt-2 py-2 mb-2">
                            <p className="text-[#555A62] font-jakarta font-[600] text-xs"> The law and Business of Remote Work</p>
                          </div>
                          <Image layout="intrisic" src={Pros4} className="w-full object-fit object-cover rounded-lg" alt="collection of women" />
                          <div className="bg-[#FFF8FB] px-3 w-full rounded-lg mt-2">
                            <ul className="flex gap-5">
                              <li className="text-sm flex items-center gap-3"><span className="text-2xl font-black">&bull;</span>
                                <span className="text-[#555A62] font-jakarta font-[600] text-sm"> Individuals</span></li>
                              {/* <li className="text-sm flex items-center gap-3"><span className="text-2xl font-black">&bull;</span>
                            <span className="text-[#555A62] font-jakarta font-[600] text-sm"> Businesses</span></li> */}
                            </ul>
                          </div>
                        </div>
                        <div className="mb-10">
                          <h4 className="font-bold font-jakarta text-xl leading-snug mb-2">Private Community</h4>
                          <p className="text-base text-[#4B5563]">
                            Our easy-to-use editor allows you to create customized job ads within minutes.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                :
                <div className="md:grid grid-cols-4 gap-10 mt-10 md:mt-14">
                  {/* */}
                  <div className="bg-[#FFF1F3] rounded-3xl pt-1 pb-10 px-5">
                    <div className="bg-white p-3 pt-2 mt-6 mb-5 md:mb-5 rounded-lg">
                      <div className="bg-[#FFF8FB] px-3 w-full rounded-lg mt-2 py-2 mb-2">
                        <p className="text-[#555A62] font-jakarta font-[600] text-xs"> The law and Business of Remote Work</p>
                      </div>
                      <Image layout="intrisic" src={Pros1} className="w-full object-fit object-cover rounded-lg" alt="collection of women" />
                      <div className="bg-[#FFF8FB] px-3 w-full rounded-lg mt-2">
                        <ul className="flex gap-5">
                          {/* <li className="text-sm flex items-center gap-3"><span className="text-2xl font-black">&bull;</span>
                            <span className="text-[#555A62] font-jakarta font-[600] text-sm"> Individuals</span></li> */}
                          <li className="text-sm flex items-center gap-3"><span className="text-2xl font-black">&bull;</span>
                            <span className="text-[#555A62] font-jakarta font-[600] text-sm"> Businesses</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-10">
                      <h4 className="font-bold font-jakarta text-xl leading-snug mb-2">Partnership</h4>
                      <p className="text-base text-[#4B5563]">
                        Events that help bring you together with other remote workers and better opportunities
                      </p>
                    </div>
                  </div>
                </div>
            }
          </div>
          <div className="mt-28 md:mt-36 px-5 md:px-20">
            {/* <div ref={addToRefs} className="md:w-[50%]">
              <p className="text-base font-[600] text-[#667085] mb-4">Work Smarter</p>
              <h3 className="text-3xl w-[70%] md:w-full md:text-4xl font-jakarta font-[600] mb-5">Be a part of something great</h3>
              <p className="text-base font-[500] text-[#667085]">
                Everything you need to work from the comfort of your home as a limtless Remote workHer in this modern day. We&apos;ve done all
                the heavy work and research so you don&apos;t have to — the perfect commnunity to be as a remote worker.
              </p>
            </div> */}
            <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-x-10 gap-y-10 md:gap-y-16 mt-16">
              <div ref={addToRefs}>
                <h3 className="font-jakarta text-4xl md:text-6xl font-[600] mb-4">400+</h3>
                <h5 className="font-dmsans font-[600] text-base md:text-lg mb-2">Partnerships Created</h5>
                <p className="text-sm md:text-base text-[#667085]">We&apos;ve helped build over 400 amazing projects.</p>
              </div>
              <div ref={addToRefs}>
                <h3 className="font-jakarta text-4xl md:text-6xl font-[600] mb-4">70%</h3>
                <h5 className="font-dmsans font-[600] text-base md:text-lg mb-2">Job board validity</h5>
                <p className="text-sm md:text-base text-[#667085]">Our customers have reported a 70% in the callback
                  responses on jobs posted on our platform.</p>
              </div>
              <div ref={addToRefs}>
                <h3 className="font-jakarta text-4xl md:text-6xl font-[600] mb-4">10k</h3>
                <h5 className="font-dmsans font-[600] text-base md:text-lg mb-2">Community Width</h5>
                <p className="text-sm md:text-base text-[#667085]">Our free community has a record of ove 20k plus  participating members.</p>
              </div>
              <div ref={addToRefs}>
                <h3 className="font-jakarta text-4xl md:text-6xl font-[600] mb-4">200+</h3>
                <h5 className="font-dmsans font-[600] text-base md:text-lg mb-2">5 Star Reviews</h5>
                <p className="text-sm md:text-base text-[#667085]">We&apos;re proud of our 5-star rating with over 200 reviews.</p>
              </div>
            </div>
            {/* <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-20 mt-16 items-center">
              <div>
                <div className="grid grid-cols-2 text-center gap-x-10 gap-y-10 md:gap-y-16">
                  <div ref={addToRefs}>
                    <h3 className="font-jakarta text-4xl font-[600] mb-4">400+</h3>
                    <h5 className="font-dmsans font-[600] text-base md:text-lg mb-2">Partnerships Created</h5>
                    <p className="text-sm md:text-base text-[#667085]">We&apos;ve helped build over 400 amazing projects.</p>
                  </div>
                  <div ref={addToRefs}>
                    <h3 className="font-jakarta text-4xl font-[600] mb-4">70%</h3>
                    <h5 className="font-dmsans font-[600] text-base md:text-lg mb-2">Job board validity</h5>
                    <p className="text-sm md:text-base text-[#667085]">Our customers have reported a 70% in the callback
                      responses on jobs posted on our platform.</p>
                  </div>
                  <div ref={addToRefs}>
                    <h3 className="font-jakarta text-4xl font-[600] mb-4">10k</h3>
                    <h5 className="font-dmsans font-[600] text-base md:text-lg mb-2">Community Width</h5>
                    <p className="text-sm md:text-base text-[#667085]">Our free community has a record of ove 20k plus  participating members.</p>
                  </div>
                  <div ref={addToRefs}>
                    <h3 className="font-jakarta text-4xl font-[600] mb-4">200+</h3>
                    <h5 className="font-dmsans font-[600] text-base md:text-lg mb-2">5 Star Reviews</h5>
                    <p className="text-sm md:text-base text-[#667085]">We&apos;re proud of our 5-star rating with over 200 reviews.</p>
                  </div>
                </div>
              </div>
              <div>
                <Image layout="intrisic" src={Great} className="w-full" alt="woman holding camera" />
              </div>
            </div> */}
          </div>
          <div className="mt-28 md:mt-40 px-5 md:px-20 relative">
            <div className="flex flex-col md:grid grid-cols-2 gap-20 items-center">
              <div ref={addToRefs} className="">
                <p className="text-sm font-[500] text-[#667085] mb-2">JOB BOARD</p>
                <h3 className="font-jakarta font-bold text-[2rem] md:text-[3.5rem] mb-4 leading-snug">Want to source for remote jobs?</h3>
                <p className="text-sm md:text-lg font-[#4B5563] leading-loose md:w-[80%]">
                  Join RemoteWorkHer Today
                </p>
                <button className="bg-black py-4 px-10 rounded-lg text-white text-sm mt-8">Browse Opportunities</button>
              </div>
              <div className="relative flex justify-between">
                <div></div>
                <div className="relative">
                  <Image layout="intrisic" src={ExperienceCard} className="shadow-2xl relative rounded-l-2xl z-40" alt="remote job calculation" />
                  <Image layout="intrisic" src={Ellipse} className="absolute -top-[2rem] -right-[2rem] z-1" alt="ellipse" />
                  <Image layout="intrisic" src={Eclipse} className="absolute -bottom-[4rem] -right-[3rem] -z-1" alt="eclipse" />
                </div>
                <div className="absolute top-20 left-20">
                  <Image layout="intrisic" src={SkillsCard} className="shadow-2xl relative top-0 left-0 rounded-2xl z-30" alt="remote job calculation" />
                  <Image layout="intrisic" src={RedEclipse} className="absolute -top-[2rem] -left-[2rem] z-1" alt="ellipse" />
                </div>
                <Image layout="intrisic" src={CircleGradient} className="absolute -left-[20rem] -top-[20rem] opacity-30" alt="gradient" />
              </div>
              <Image layout="intrisic" src={RedGradient} className="w-max absolute -top-[20rem] left-0 opacity-30" alt="gradient" />
            </div>
          </div>
          <div className="mt-32 md:mt-72 px-5 md:px-20 relative">
            <div className="grid grid-cols-2 gap-14 md:gap-28 md:items-center">
              <div>
                <div className="flex justify-between relative">
                  <div></div>
                  <div className="absolute h-full w-full top-0 left-0 flex items-center">
                    <Image layout="intrisic" src={SecInvolved} className="h-[20rem] w-auto" alt="collection of women" />
                  </div>
                  <div>
                    <div className="-ml-[27rem]">
                      <Image layout="intrisic" src={MainInvolved} className="w-max" alt="collection of women" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image layout="intrisic" src={Quote} className="w-auto h-[25px] mb-4" alt="quote" />
                <h4 className="text-3xl font-bold mb-10">Get Involved</h4>
                <div>
                  <div className="py-1 pl-5 border-l-4 mb-8 border-solid border-black">
                    <h5 className="mb-1 font-dmsans font-[600]">Mentorship</h5>
                    <p className="text-[#475467] text-base">Join in on this mentor ship programme as either a Mentor or a Mentee and
                      make use of the opportunity to learn and impart others</p>
                  </div>
                  <div className="py-1 pl-5 border-l-4 mb-2 border-solid border-[#F2F4F7]">
                    <h5 className="mb-1 font-dmsans font-[600]">Volunteering</h5>
                    <p className="text-[#475467] text-base">Join us and become a part of our esteemed volunteers with
                      exclusive access to our platform and resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-28 px-5 md:px-20 relative">
            <div className="flex flex-col md:flex-row gap-14 md:gap-28 md:items-center">
              <div className="grid md:block grid-cols-2 gap-3 md:gap-5">
                <div className="md:mb-24">
                  <Image layout="intrisic" src={Woman} className="w-max" alt="collection of women" />
                </div>
                <div className="">
                  <div className="grid grid-cols-2 gap-3 md:gap-5">
                    <div className="flex flex-col gap-5">
                      <Image layout="intrisic" src={Grid1} className="w-max" alt="collection of women" />
                      <Image layout="intrisic" src={Grid3} className="w-max" alt="collection of women" />
                    </div>
                    <div>
                      <Image layout="intrisic" src={Grid2} className="w-full h-full object-cover object-top rounded-3xl" alt="collection of women" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div ref={addToRefs}>
                  <h4 className="text-3xl font-bold mb-5">Get Involved</h4>
                  <div>
                    <div className="py-4 pl-5 border-l-4 mb-10 border-solid border-black">
                      <h5 className="mb-1 font-dmsans font-[600]">Mentorship</h5>
                      <p className="text-[#475467] text-base">Join in on this mentor ship programme as either a Mentor or a Mentee and
                        make use of the opportunity to learn and impart others</p>
                    </div>
                    <div className="py-4 pl-5 border-l-4 mb-2 border-solid border-[#F2F4F7]">
                      <h5 className="mb-1 font-dmsans font-[600]">Volunteering</h5>
                      <p className="text-[#475467] text-base">Join us and become a part of our esteemed volunteers with
                        exclusive access to our platform and resources</p>
                    </div>
                    <button className="bg-black py-4 px-10 rounded-lg text-white text-sm mt-8">Join Today</button>
                  </div>
                </div>
                <Image layout="intrisic" src={PurpleGradient} className="w-max absolute top-[-10rem] right-0" alt="collection of women" />
              </div>
              <div>
                <Image layout="intrisic" src={Community} className="w-[40%] md:w-max" alt="collection of women" />
              </div>
            </div>
            <Image layout="intrisic" src={RedGradient} className="w-max absolute -top-[20rem] left-0" alt="gradient" />
          </div> */}
          <div className="mt-32">
            <div className="bg-[#FCEFEF] flex flex-col md:grid grid-cols-2">
              <div className="bg-[#E4E4E4] min-h-[20rem]">

              </div>
              <div className="py-16 md:py-28">
                <div ref={addToRefs} className="px-5 md:px-0 md:w-[75%] mx-auto">
                  <h3 className="font-jakarta font-bold text-2xl md:text-4xl mb-3 md:mb-7">Meet Sophie, Our Founder</h3>
                  <p className="text-[#555555] text-base md:text-lg leading-loose mb-2">
                    Welcome to Remote WorkHER! I&apos;m Adeife Adeoye, and I&apos;m dedicated to empowering women to excel
                    in their careers, whether they&apos;re working remotely or in traditional settings.
                  </p>
                  <p className="text-[#555555] text-base md:text-lg leading-loose mb-2">
                    Our community is dedicated to providing a supportive network, valuable resources, and a platform where
                    women (and men) can achieve their professional goals.
                  </p>
                  <p className="text-[#555555] text-base md:text-lg leading-loose mb-2">
                    At Remote WorkHER, we focus on fostering growth, sharing knowledge, and creating an environment
                    where everyone can thrive. Join us as we work together to advance careers and build a vibrant professional community.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-32 px-5 md:px-20">
            <div className="flex flex-col md:grid px-5 md:px-20 grid-cols-2 bg-[#FFF4F9] rounded-2xl">
              <div className="py-10 md:py-20">
                <h3 className="font-jakarta font-bold text-3xl md:text-5xl mb-2 md:mb-5 leading-snug">People love <br /> Remote WorkHer</h3>
                <p className="text-lg font-[#66676D] leading-loose md:w-[80%]">
                  Recommendations from satisfied clients that affirm the value of our service.
                </p>
              </div>
              <div className="shape relative h-full">
                <Image layout="intrisic" src={TestimonialCard1} className="w-full md:absolute -top-[5rem] -right-[9rem]" alt="gradient" />
                <Image layout="intrisic" src={TestimonialCard2} className="w-full md:absolute -mt-[3rem] md:-bottom-[4rem] left-0" alt="gradient" />
              </div>
            </div>
          </div>
          <div className="mt-24 md:mt-32 px-5 md:px-20">
            <div ref={addToRefs} className="flex flex-col md:grid grid-cols-1/1.5 gap-14 md:gap-44">
              <div>
                <h3 className="font-jakarta font-bold text-3xl md:text-4xl mb-8 w-[85%] leading-snug">Got Questions? We&apos;ve Got Answers.</h3>
                <p className="text-base md:text-lg mb-7">For more information, please contact us:</p>
                <div className="w-[60%] mt-5">
                  <ul className="flex flex-col gap-8">
                    <li>
                      <Link href="tel:+441234567890" className="text-sm md:text-base flex items-center gap-5 md:gap-10">
                        <span><FaPhone /></span>
                        <span>+44 123 456 7890</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="mailTo:hello@remoteworkher.com" className="text-sm md:text-base flex items-center gap-5 md:gap-10">
                        <span><RiMailSendLine /></span>
                        <span>hello@remoteworkher.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-10">
                  <div className="collapse-bar">
                    <div className="collapse-block">
                      <div className="collapse-header flex justify-between items-center">
                        <div>
                          <h4 className="font-dmsans text-[#001F3E]">How does Remote WorkHer help me?</h4>
                        </div>
                        <div>
                          <LuPlus className="font-bold text-2xl" />
                        </div>
                      </div>
                      <div className="collapse-body">

                      </div>
                    </div>
                  </div>
                  <div className="collapse-bar">
                    <div className="collapse-block">
                      <div className="collapse-header flex justify-between items-center">
                        <div>
                          <h4 className="font-dmsans text-[#001F3E]">How does Remote WorkHer help me?</h4>
                        </div>
                        <div>
                          <LuPlus className="font-bold text-2xl" />
                        </div>
                      </div>
                      <div className="collapse-body">

                      </div>
                    </div>
                  </div>
                  <div className="collapse-bar">
                    <div className="collapse-block">
                      <div className="collapse-header flex justify-between items-center">
                        <div>
                          <h4 className="font-dmsans text-[#001F3E]">How does Remote WorkHer help me?</h4>
                        </div>
                        <div>
                          <LuPlus className="font-bold text-2xl" />
                        </div>
                      </div>
                      <div className="collapse-body">

                      </div>
                    </div>
                  </div>
                  <div className="collapse-bar">
                    <div className="collapse-block">
                      <div className="collapse-header flex justify-between items-center">
                        <div>
                          <h4 className="font-dmsans text-[#001F3E]">How does Remote WorkHer help me?</h4>
                        </div>
                        <div>
                          <LuPlus className="font-bold text-2xl" />
                        </div>
                      </div>
                      <div className="collapse-body">

                      </div>
                    </div>
                  </div>
                  <div className="collapse-bar">
                    <div className="collapse-block">
                      <div className="collapse-header flex justify-between items-center">
                        <div>
                          <h4 className="font-dmsans text-[#001F3E]">How does Remote WorkHer help me?</h4>
                        </div>
                        <div>
                          <LuPlus className="font-bold text-2xl" />
                        </div>
                      </div>
                      <div className="collapse-body">

                      </div>
                    </div>
                  </div>
                  <div className="collapse-bar">
                    <div className="collapse-block">
                      <div className="collapse-header flex justify-between items-center">
                        <div>
                          <h4 className="font-dmsans text-[#001F3E]">How does Remote WorkHer help me?</h4>
                        </div>
                        <div>
                          <LuPlus className="font-bold text-2xl" />
                        </div>
                      </div>
                      <div className="collapse-body">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </DisplayLayout>
    </div >
  );
}
