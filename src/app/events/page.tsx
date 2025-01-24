'use client';

import EventPros from "@/components/events/pros";
import DisplayLayout from "@/components/layout";
import Image from "next/image";

// import RemoteImg from "@/assets/images/events/remote.png";
import RemoteImg from "@/assets/images/events/bringing.png";
import HeroImg from "@/assets/images/events/hero.png";
import PastImg1 from "@/assets/images/events/past.png";
import PastImg2 from "@/assets/images/events/past_2.png";
import PastImg3 from "@/assets/images/events/past_3.png";
import PastImg4 from "@/assets/images/events/past_4.png";
import PastImg5 from "@/assets/images/events/past_5.png";
import PastImg6 from "@/assets/images/events/past_6.png";

import UpcomingEvents from "@/components/events/upcoming";
import PastEvents from "@/components/events/past";
import VectorImg from "@/assets/images/vector-bg.png";
import HeroImgOne from "@/assets/images/events/videoPlayer.png";

import { gsap } from 'gsap';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const EventsPage = () => {
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

    // counting animation
    const sectionRef = useRef<HTMLDivElement>(null);
    const counters = useRef<HTMLHeadingElement[]>([]);
  
    useEffect(() => {
      const targets = counters.current;
  
      targets.forEach((counter) => {
        const endValue = parseInt(counter.dataset.value || "0", 10); // Extract numeric value
  
        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: endValue,
            duration: 2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
            },
            snap: { innerText: 1 },
            ease: "power1.out",
            onUpdate: function () {
              const value = parseInt(counter.innerText || "0", 10);
              counter.innerText = counter.dataset.value?.includes("K")
                ? `${Math.round(value)}K`
                : `${value}`;
            },
          }
        );
      });
    }, []);
    return (
        <div>
            {/* <DisplayLayout textColor="text-[#98A2B3]" logoColor="text-white" footerMargin="mt-0"> */}
            <DisplayLayout>
                <>
                    {/* <Image src={VectorImg} alt="vector background" className="vector-bg z-10" /> */}
                    <div className="md:min-h-[100vh] job-hero pt-24 bg-cover bg-[top_left] bg-no-repeat " style={{backgroundImage:`url(${VectorImg.src})`}}>
                        <div className="md:w-[85%] px-5 md:px-0 mx-auto text-center">
                            <div ref={addToRefs}>
                                <h2 className="block font-bold md:w-[80%] mx-auto text-4xl md:text-5xl pt-16 leading-tight md:leading-tight">
                                    Digital Thinkers Meet Up</h2>
                            </div>
                            <div ref={addToRefs} className="mt-3 md:mt-7 md:w-[65%] mx-auto">
                                <p style={{ display: 'block' }} className="text-sm md:text-lg leading-loose md:leading-normal">Explore practical advice, success stories, and the latest trends
                                    in remote work. Are you just starting out or levelling up your skills, we've got something for every Remote WorkHer.</p>
                            </div>
                            <div className="flex gap-8 items-end -mt-4">
                                <Image src={HeroImgOne} alt="woman posing for picture" className="rounded-xl w-max mx-auto h-max" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-[#110B10] py-36 md:py-48">
                        <div ref={addToRefs} className="flex flex-col md:flex-row justify-between px-5 md:px-0 md:w-[80%] mx-auto">
                            <div>
                                <h2 className="font-jakarta mb-5 md:mb-0 text-4xl md:text-6xl w-[80%] leading-snug font-bold text-white">Digital Thinkers Meet Up</h2>
                            </div>
                            <div>
                                <p className="text-lg text-white font-medium mb-5 md:mb-10">5 to 7 June 2019, Waterfront Hotel, London</p>
                                <button className="border-2 border-accent border-solid text-accent px-8 py-3 rounded-xl">Buy Tickets</button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <Image src={HeroImg} alt="women posing for picture" className="rounded-xl w-max mx-auto -mb-[15rem] md:-mb-[20rem] object-cover" />
                        </div>
                    </div> */}
                    <div ref={addToRefs} className="mt-20 md:mt-[4rem] px-5 md:px-0">
                        <div className="px-5 md:px-20">
                            <div className="text-center">
                                {/* <div className="w-max mx-auto text-[#F963AB]">
                                <h4 className="font-jost font-[500] text-accent">Services</h4>
                            </div> */}
                                <h3 className="font-jakarta text-3xl md:text-4xl font-bold mt-5 md:w-[35%] mx-auto md:leading-tight">
                                    Great Reasons to Attend Our Conference
                                </h3>
                            </div>
                            <div className="mt-10 md:mt-14" ref={sectionRef}>
      <div className="grid grid-cols-2 md:grid md:grid-cols-4 gap-7 md:px-24 mx-auto">
        <div
          className="bg-[#FFEEF6] border-[#F8E4ED] border-solid border-2 rounded-2xl py-10 px-10 md:py-14 text-center"
        >
          <h3
          ref={(el) => el && counters.current.push(el)}
            data-value="1000"
            className="text-4xl font-jakarta font-medium hidden md:block text-[#14141C] relative after:content-['+'] after:ml-1"
          >
            0
          </h3>
          <h3
          ref={(el) => el && counters.current.push(el)}
            data-value="100"
            className="text-4xl font-jakarta font-medium block md:hidden text-[#14141C] relative after:content-['+'] after:ml-1"
          >
            0
          </h3>
          <p className="text-base mt-3 text-[#14141C]">Tickets Confirmed</p>
        </div>
        <div
          className="bg-[#FFFEEE] border-[#F1EFDA] border-solid border-2 rounded-2xl py-10 px-10 md:py-14 text-center"
        >
          <h2
          ref={(el) => el && counters.current.push(el)}
            data-value="100"
            className="text-4xl font-jakarta font-medium text-[#14141C] relative after:content-['+'] after:ml-1"
          >
            0
          </h2>
          <p className="text-base mt-3 text-[#14141C]">Event Sponsors</p>
        </div>
        <div
          className="bg-[#F5F5FE] border-solid border-2 rounded-2xl py-10 px-10 md:py-14  text-center"
        >
          <h2
              ref={(el) => el && counters.current.push(el)}
            data-value="20"
            className="text-4xl font-jakarta font-medium text-[#14141C] relative after:content-['+'] after:ml-1"
          >
            0
          </h2>
          <p className="text-base mt-3 text-[#14141C]">Speakers</p>
        </div>
        <div
          className="bg-[#FEF4F9] border-solid border-2 rounded-2xl py-10 px-10 md:py-14  text-center"
        >
          <h2
           ref={(el) => el && counters.current.push(el)} 
            data-value="50"
            className="text-4xl font-jakarta font-medium text-[#14141C] relative after:content-['+'] after:ml-1"
          >
            0
          </h2>
          <p className="text-base mt-3 text-[#14141C]">Industry Talks</p>
        </div>
      </div>
    </div>
                        </div>
                        <div ref={addToRefs} className="mt-24 md:px-16">
                            <div className="flex flex-col md:grid grid-cols-2 gap-5 md:gap-0 items-center">
                                <div>
                                    <Image src={RemoteImg} alt="women posing for picture" className="rounded-xl md:w-full h-auto object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-jakarta text-3xl md:text-4xl font-black leading-normal md:leading-normal mb-3 md:w-[80%] md:w-[70%]">Bringing the Remote Community Together</h3>
                                    <p className="md:text-lg text-[#333333] leading-loose md:leading-loose mb-2">
                                        Learn about remote work best practices from industry experts and become part of the thriving tech
                                        experts community. Learn the best things.
                                    </p>
                                    <p className="md:text-lg text-[#333333] leading-loose md:leading-loose">
                                        Learn about remote work best practices from industry experts and become part of the thriving tech
                                        experts community. Learn the best things.Learn about remote work best practices from industry experts
                                        and become part of the thriving tech experts community. Learn the best things.</p>
                                </div>
                            </div>
                        </div>
                        <div ref={addToRefs} className="mt-24">
                            <div className="">
                                <h3 className="font-jakarta text-3xl md:text-4xl font-bold mt-5 mb-5 md:mb-10 text-center leading-snug">
                                    Upcoming Events
                                </h3>
                                <div className="flex flex-col md:grid grid-cols-3 gap-7 w-full md:px-24 mx-auto">
                                    <UpcomingEvents />
                                    <UpcomingEvents />
                                    <UpcomingEvents />
                                </div>
                            </div>
                        </div>
                        <div ref={addToRefs} className="mt-24 md:mt-28">
                            <div className="text-center">
                                <h3 className="font-jakarta text-3xl md:text-4xl font-bold mt-5 mb-3">
                                    Past Events
                                </h3>
                                <p className="text-base md:text-lg md:w-[45%] leading-relaxed mx-auto text-[#475467] font-jakarta">
                                    Best practices from industry experts and become part of the thriving tech experts community.
                                </p>
                            </div>
                            <div className="mt-5 md:mt-10">
                                <div className="flex flex-col md:grid grid-cols-3 gap-7 md:gap-14 md:px-24 mx-auto">
                                    <PastEvents img={PastImg1} />
                                    <PastEvents img={PastImg2} />
                                    <PastEvents img={PastImg3} />
                                    <PastEvents img={PastImg4} />
                                    <PastEvents img={PastImg5} />
                                    <PastEvents img={PastImg6} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div ref={addToRefs} className="sec-hero mt-40 px-5 py-28">
                        <div>
                            <h3 className="font-jakarta md:w-[30%] mx-auto text-3xl md:text-4xl font-bold mt-5 mb-10 text-center leading-snug text-white">
                                Count Every Seconds Until Event
                            </h3>
                            <div className="mt-5 flex gap-4 bg-[#14141C] w-max py-10 px-10 md:px-20 rounded-xl mx-auto">
                                <h3 className="text-white text-2xl md:text-4xl font-black">24 <br /> <span className="text-sm font-normal">DAYS</span></h3>
                                <h3 className="text-white text-2xl md:text-4xl font-black">:</h3>
                                <h3 className="text-white text-2xl md:text-4xl font-black">13 <br /> <span className="text-sm font-normal">DAYS</span></h3>
                                <h3 className="text-white text-2xl md:text-4xl font-black">:</h3>
                                <h3 className="text-white text-2xl md:text-4xl font-black">53 <br /> <span className="text-sm font-normal">DAYS</span></h3>
                                <h3 className="text-white text-2xl md:text-4xl font-black">:</h3>
                                <h3 className="text-white text-2xl md:text-4xl font-black">22 <br /> <span className="text-sm font-normal">DAYS</span></h3>
                            </div>
                        </div>
                    </div> */}
                </>
            </DisplayLayout>
        </div >
    )
}

export default EventsPage;