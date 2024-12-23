import DisplayLayout from "@/components/layout";
import Image from "next/image";

import { MdArrowForward } from "react-icons/md";

import WomenJobBoard from "@/assets/images/job_board_women.svg";
import SingleJobListing from "@/components/job/listing";
import SingleJobDetail from "@/components/job/listing-detail";
import SingleBlogListing from "@/components/blog/single";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import VectorImg from "@/assets/images/vector-bg.png";
import BlogImg from "@/assets/images/blog/blog_content.png";

export default function JobBoard() {
    return (
        <div>
            <DisplayLayout>
                <div>
                    <Image src={VectorImg} alt="vector background" className="vector-bg z-10" />
                    <div className="min-h-[100vh] job-hero py-32">
                        <div className="w-[70%] mx-auto text-center">
                            <h2 className="font-bold w-[80%] mx-auto text-6xl pt-16 leading-tight">Insights, Tips, and Stories for Thriving in Remote Work</h2>
                            <div className="mt-8 w-[80%] mx-auto">
                                <p className="text-lg leading-normal">Explore practical advice, success stories, and the latest trends
                                    in remote work. Are you just starting out or levelling up your skills, we've got something for every Remote WorkHer.</p>
                            </div>
                            <div className="mt-8">
                                <button className="flex items-center w-max mx-auto gap-3 bg-black py-5 px-8 text-white text-sm rounded-xl">Start
                                    Reading <MdArrowForward className="text-xl" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1/2 w-[85%] mx-auto gap-20 -mt-16 z-30 relative">
                        <div>
                            <div className="mt-5">
                                <div className="flex items-center px-2 mx-auto bg-white rounded-lg py-1 border-solid border-2 border-[#EDEDED]">
                                    <FiSearch />
                                    <input type="text" className="py-2 border-none flex-1" />
                                </div>
                            </div>
                            <div className="mt-8">
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
                                    <h3 className="text-4xl font-bold">Blog posts</h3>
                                </div>
                                <div className="">
                                    <div className="flex items-center px-3 justify-between rounded-lg py-3 min-w-[20rem] bg-white border-solid border-2 border-[#EDEDED]">
                                        <p>Most recent</p>
                                        <MdOutlineKeyboardArrowDown className="text-2xl text-[#667085]" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-24">
                                <div className="grid grid-cols-2 gap-x-10 gap-y-20">
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
                    <div className="mt-20 px-20 ">
                        <div className="flex justify-between border-t-2 border-solid border-[#EAECF0] pt-10">
                            <div className="">
                                <button className="px-6 py-3 border-2 border-solid border-[#D0D5DD] font-[600] text-[#344054] rounded-xl flex gap-5 items-center">
                                    <FaArrowLeft /> Previous</button>
                            </div>
                            <div>
                                <ul className="flex gap-5">
                                    <li className="font-[500] bg-[#F9FAFB] rounded-lg px-7 py-4">1</li>
                                    <li className="font-[500] px-4 py-4">2</li>
                                    <li className="font-[500] px-4 py-4">3</li>
                                    <li className="font-[500] px-4 py-4">...</li>
                                    <li className="font-[500] px-4 py-4">8</li>
                                    <li className="font-[500] px-4 py-4">9</li>
                                    <li className="font-[500] px-4 py-4">10</li>
                                </ul>
                            </div>
                            <div>
                                <button className="px-6 py-3 border-2 border-solid border-[#D0D5DD] font-[600] text-[#344054] rounded-xl flex gap-5 items-center">
                                    Next <FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-28 px-20">
                        <div className="flex justify-between items-center gap-10">
                            <div className="w-[50%]">
                                <h3 className="text-5xl font-jakarta font-bold leading-tight mb-7">Ready to Take Your Remote Work Journey to the Next Level?</h3>
                                <p className="text-lg text-[#475467] mb-10 block">Join Remote WorkHers and access exclusive resources, connect with a supportive community.</p>
                                <button className="bg-accent px-8 py-4 font-[600] text-base text-white rounded-lg">Join Community</button>
                            </div>
                            <div className="w-[50%] items-end flex-col flex">
                                <Image src={BlogImg} alt="different professionals" className="z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </DisplayLayout>
        </div>
    );
}
