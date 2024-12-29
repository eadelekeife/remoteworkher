import EventPros from "@/components/events/pros";
import DisplayLayout from "@/components/layout";
import Image from "next/image";

import RemoteImg from "@/assets/images/events/remote.png";
import HeroImg from "@/assets/images/events/hero.png";
import PastImg1 from "@/assets/images/events/past.png";
import PastImg2 from "@/assets/images/events/past_2.png";
import PastImg3 from "@/assets/images/events/past_3.png";
import PastImg4 from "@/assets/images/events/past_4.png";
import PastImg5 from "@/assets/images/events/past_5.png";
import PastImg6 from "@/assets/images/events/past_6.png";

import UpcomingEvents from "@/components/events/upcoming";
import PastEvents from "@/components/events/past";


const EventsPage = () => {
    return (
        <div>
            <DisplayLayout textColor="text-[#98A2B3]" logoColor="text-white" footerMargin="mt-0">
                <>
                    <div className="bg-[#110B10] py-48">
                        <div className="flex justify-between w-[80%] mx-auto">
                            <div>
                                <h2 className="font-jakarta text-6xl w-[80%] leading-snug font-bold text-white">Digital Thinkers Meet Up</h2>
                            </div>
                            <div>
                                <p className="text-lg text-white font-medium mb-10">5 to 7 June 2019, Waterfront Hotel, London</p>
                                <button className="border-2 border-accent border-solid text-accent px-8 py-3 rounded-xl">Buy Tickets</button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <Image src={HeroImg} alt="women posing for picture" className="rounded-xl w-max mx-auto -mb-[20rem] object-cover" />
                        </div>
                    </div>
                    <div className="mt-[15rem] px-20">
                        <div className="text-center">
                            <div className="w-max mx-auto text-[#F963AB]">
                                <h4 className="font-jost font-[500] text-accent">Services</h4>
                            </div>
                            <h3 className="font-jakarta text-5xl font-bold mt-5 mb-5 w-[45%] mx-auto leading-snug">
                                Great Reasons to Attend Our Conference
                            </h3>
                        </div>
                        <div className="mt-10">
                            <div className="grid grid-cols-4 gap-7 w-[90%] mx-auto">
                                <EventPros bg="bg-[#F963AB]" textColor="text-white" main="10K" icon="+" footnote="Tickets Confirmed" />
                                <EventPros bg="bg-[#FDD508]" textColor="text-black" main="100" icon="+" footnote="Event Sponsors" />
                                <EventPros bg="bg-[#FF611E]" textColor="text-white" main="20" icon="+" footnote="Speakers" />
                                <EventPros bg="bg-[#65FF8B]" textColor="text-black" main="50" icon="+" footnote="Industry Talks" />
                            </div>
                        </div>
                        <div className="mt-40">
                            <div className="grid grid-cols-2 gap-20">
                                <div>
                                    <Image src={RemoteImg} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-jakarta text-4xl font-black leading-relaxed mb-5 w-[70%] mt-10">Bringing the Remote Community Together</h3>
                                    <p className="text-lg text-[#333333] leading-loose mb-2">
                                        Learn about remote work best practices from industry experts and become part of the thriving tech
                                        experts community. Learn the best things.
                                    </p>
                                    <p className="text-lg text-[#333333] leading-loose">
                                        Learn about remote work best practices from industry experts and become part of the thriving tech
                                        experts community. Learn the best things.Learn about remote work best practices from industry experts
                                        and become part of the thriving tech experts community. Learn the best things.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-40">
                            <div className="">
                                <h3 className="font-jakarta text-4xl font-bold mt-5 mb-10 text-center leading-snug">
                                    Upcoming Events
                                </h3>
                                <div className="grid grid-cols-3 gap-7 w-[90%] mx-auto">
                                    <UpcomingEvents />
                                    <UpcomingEvents />
                                    <UpcomingEvents />
                                </div>
                            </div>
                        </div>
                        <div className="mt-28">
                            <div className="text-center">
                                <h3 className="font-jakarta text-5xl font-bold mt-5 mb-5">
                                    Past Events
                                </h3>
                                <p className="text-lg w-[45%] leading-relaxed mx-auto text-[#475467] font-jakarta">
                                    Best practices from industry experts and become part of the thriving tech experts community.
                                </p>
                            </div>
                            <div className="mt-28">
                                <div className="grid grid-cols-3 gap-14 w-[90%] mx-auto">
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
                    <div className="sec-hero mt-40 py-28">
                        <div>
                            <h3 className="font-jakarta w-[30%] mx-auto text-4xl font-bold mt-5 mb-10 text-center leading-snug text-white">
                                Count Every Seconds Until Event
                            </h3>
                            <div className="mt-5 flex gap-4 bg-[#14141C] w-max py-10 px-20 rounded-xl mx-auto">
                                <h3 className="text-white text-4xl font-black">24 <br /> <span className="text-sm font-normal">DAYS</span></h3>
                                <h3 className="text-white text-4xl font-black">:</h3>
                                <h3 className="text-white text-4xl font-black">13 <br /> <span className="text-sm font-normal">DAYS</span></h3>
                                <h3 className="text-white text-4xl font-black">:</h3>
                                <h3 className="text-white text-4xl font-black">53 <br /> <span className="text-sm font-normal">DAYS</span></h3>
                                <h3 className="text-white text-4xl font-black">:</h3>
                                <h3 className="text-white text-4xl font-black">22 <br /> <span className="text-sm font-normal">DAYS</span></h3>
                            </div>
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    )
}

export default EventsPage;