import { IoLocationSharp } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";

import JobLogo from "@/assets/images/job-logo.svg";
import Image from "next/image";
import Link from "next/link";

const SingleJobListing = () => {
    return (
        <div>
            <div className="bg-[#FFF0F7] px-2 pt-2 rounded-xl">
                <div className="bg-white px-5 pt-4 rounded-xl pb-6">
                    <div className="flex justify-between">
                        <div className="flex justify-center items-center size-12 rounded-full bg-[#FFEDED]">
                            <Image src={JobLogo} alt="company logo" />
                        </div>
                        <div className="flex justify-center items-center size-12 rounded-full bg-[#FFEDED]">
                            <FiBookmark className="text-2xl" />
                        </div>
                    </div>
                    <div className="border-b-2 border-[#E5E5EC] mt-5 mb-5"></div>
                    <div className="">
                        <h4 className="font-jakarta font-bold text-xl md:text-2xl">Lead Product Designer</h4>
                        <div className="mt-4 flex gap-5">
                            <div className="bg-[#FFFBD6] px-5 py-2 rounded-sm">
                                <p className="text-sm font-jakarta font-[500]">Fulltime</p>
                            </div>
                            <div className="bg-[#FFFBD6] px-5 py-2 rounded-sm">
                                <p className="text-sm font-jakarta font-[500]">Remote</p>
                            </div>
                        </div>
                        <div className="mt-5 flex gap-10">
                            <div className="flex items-center gap-1">
                                <IoLocationSharp />
                                <p className="text-sm font-jakarta font-[500]">Worldwide</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <AiFillClockCircle />
                                <p className="text-sm font-jakarta font-[500]">5 days ago</p>
                            </div>
                        </div>
                        <Link href="/job/2" className="bg-black py-3 text-center w-full block text-white rounded-lg text-sm mt-5">Apply</Link>
                    </div>
                </div>
                <button className="bg-[#FFF0F7] font-[600] text-sm w-full py-5 block text-[#D28EAF]">SHARE JOB POST</button>
            </div>
        </div>
    )
}
export default SingleJobListing;