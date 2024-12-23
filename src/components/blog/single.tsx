import { IoLocationSharp } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";

import { MdOutlineArrowOutward } from "react-icons/md";

import Blog1 from "@/assets/images/blog/blog_1.jpg";
import Blog2 from "@/assets/images/blog/blog_2.jpg";
import Blog3 from "@/assets/images/blog/blog_3.jpg";
import Blog4 from "@/assets/images/blog/blog_4.jpg";
import Blog5 from "@/assets/images/blog/blog_5.jpg";
import Blog6 from "@/assets/images/blog/blog_6.jpg";

import Image from "next/image";

const SingleBlogListing = () => {
    return (
        <div>
            <div className="">
                <Image src={Blog1} alt="blog image" />
                <div className="mt-5">
                    <div className="flex gap-3">
                        <div className="bg-[#F0F9FF] border-2 border-solid border-[#B9E6FE] text-sm px-4 py-1 text-[#026AA2] font-[500] rounded-full">Design</div>
                        <div className="bg-[#FDF2FA] border-2 border-solid border-[#FCCEEE] text-sm px-4 py-1 text-[#C11574] font-[500] rounded-full">Reseach</div>
                    </div>
                    <div className="mt-5">
                        <ul className="flex gap-5 items-center">
                            <li className="font-[600] text-[#567C82]">Olivia Rhye</li>
                            <li className="font-[600] text-[#567C82]">&bull;</li>
                            <li className="font-[600] text-[#567C82]">20 Jan 2024</li>
                        </ul>
                        <div className="flex justify-between mt-2">
                            <h3 className="jakarta font-bold text-2xl">PM mental models</h3>
                            <div>
                                <MdOutlineArrowOutward className="text-2xl" />
                            </div>
                        </div>
                        <div className="mt-2">
                            <p>Mental models are simple expressions of complex processes or relationships.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleBlogListing;