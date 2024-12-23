import { IoLocationSharp } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";

import JobLogo from "@/assets/images/job-logo.svg";
import Image from "next/image";

const SingleJobDetail = () => {
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
                        <button className="bg-black py-3 w-full block text-white rounded-lg text-sm mt-5">Apply</button>
                        <div className="mt-6 pb-20">
                            <div>
                                <h4 className="font-bold text-lg">Job description</h4>
                                <div className="mt-4">
                                    <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Job title : Senior Product Designer (Equity-Based)</p>
                                    <div className="mt-3">
                                        <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Job Location : Lagos Deadline : December 22, 2024 Quick Recommended Links</p>
                                    </div>
                                    <div className="mt-4">
                                        <ul className="ml-3">
                                            <li className="text-[#666666] text-sm md:text-base mb-3 leading-snug">&bull; Jobs by Location</li>
                                            <li className="text-[#666666] text-sm md:text-base mb-3 leading-snug">&bull; Job by industries</li>
                                            <li className="text-[#666666] text-sm md:text-base mb-3 leading-snug">&bull; Career Advice</li>
                                        </ul>
                                        <div className="mt-5">
                                            <h4 className="font-bold text-[#666666]">Description</h4>
                                            <div className="mt-3">
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug"> As we move toward revenue generation and securing investment, we seek a passionate Senior Product Designer
                                                    to join our dynamic team. This role offers a unique opportunity to shape the user experience of a
                                                    transformative transportation project from the ground up.</p>
                                            </div>
                                        </div>
                                        <div className="mt-7">
                                            <h4 className="font-bold text-[#666666]">Responsibilities</h4>
                                            <div className="mt-3">
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">
                                                    Lead the end-to-end design process, from concept to MVP, ensuring a seamless and user-centric
                                                    experience.</p>
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">
                                                    Collaborate closely with product managers, developers, and stakeholders to translate user needs
                                                    and business objectives into engaging interfaces.</p>
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Conduct user research to identify pain points, validate assumptions, and iterate designs.</p>
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Develop wireframes, prototypes, and high-fidelity designs for both web and mobile platforms.</p>
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Establish and maintain a consistent design system, ensuring scalability as the product grows.</p>
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Continuously gather feedback and iterate on designs to improve the product based on user insights.</p>
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Stay updated on transportation industry trends and best practices in UX / UI design.</p>
                                            </div>
                                        </div>
                                        <div className="mt-7">
                                            <h4 className="font-bold text-[#666666]">Requirements</h4>
                                            <div className="mt-3">
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">
                                                    Proven experience (5+ years) as a Product Designer, preferably in transportation, logistics, or SaaS platforms.</p>
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Strong portfolio showcasing a range of projects with a focus on UX / UI for web and mobile applications.</p>
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Proficiency in design tools such as Figma, Sketch, or Adobe Creative Suite.</p>
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Experience with user research methodologies and usability testing.</p>
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Ability to work in an agile, fast-paced environment, adapting to evolving priorities.</p>
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Excellent communication and collaboration skills, with a proactive and problem-solving mindset.</p>
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Understanding of front-end development principles (HTML / CSS) is a plus.</p>
                                            </div>
                                        </div>
                                        <div className="mt-7">
                                            <h4 className="font-bold text-[#666666]">Compensation</h4>
                                            <div className="mt-3">
                                                <p className="text-[#666666] text-sm md:text-base mb-3 leading-snug">Equity-Based (with potential for future revenue and investment participation)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="bg-[#FFF0F7] font-[600] text-sm w-full py-5 block text-[#D28EAF]">SHARE JOB POST</button>
            </div>
        </div >
    )
}
export default SingleJobDetail;