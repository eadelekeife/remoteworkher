import DisplayLayout from "@/components/layout";

import HeroImg from "@/assets/images/services/hero.png";
import Consultation from "@/assets/images/services/consultation.png";
import PartnershipImg from "@/assets/images/services/partnership.png";
import JobImg from "@/assets/images/services/job.png";
import SpeakingImg from "@/assets/images/services/speaking.png";

import TalentOne from "@/assets/images/services/talent_1.png";
import TalentTwo from "@/assets/images/services/talent_2.png";
import TalentThree from "@/assets/images/services/talent_3.png";

import QuoteImg from "@/assets/images/services/quote.png";
import { MdOutlineMail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import Map from "@/assets/images/services/map.png";
import { FaArrowLeft } from "react-icons/fa6";



import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ServicesPage = () => {
    return (
        <div>
            <DisplayLayout>
                <>
                    <div className="px-20 mt-36">
                        <div className="grid grid-cols-2 gap-20">
                            <div>
                                <h3 className="font-jakarta leading-tight text-5xl font-bold mt-5 mb-5">
                                    Empowering Employers and Talents to Thrive in Remote Work
                                </h3>
                                <div></div>
                            </div>
                            <div>
                                <Image src={HeroImg} alt="woman posing for picture" className="rounded-xl w-full" />
                            </div>
                        </div>
                        <div className="mt-20">
                            <div className="grid grid-cols-2 items-center gap-20">
                                <div className="">
                                    <div className="flex gap-2">
                                        <Link href="/" className="border rounded-lg py-4 px-5 border-solid border-[#D6D6D6] bg-[#1018280D] flex gap-1 items-center">
                                            <FaArrowLeft />
                                            Back to Home</Link>
                                        <button className="bg-accent text-white text-base py-4 px-8 rounded-lg">Service</button>
                                    </div>
                                </div>
                                <div>
                                    <div className="">
                                        <p className="text-lg text-[#475467] font-jakarta">
                                            Explore our tailored services designed to transform how businesses and
                                            professionals succeed in the remote work era.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-36 px-20">
                        <div className="text-center">
                            <div className="w-max mx-auto text-[#F963AB]">
                                <h4 className="font-jost font-[500] text-accent">Services</h4>
                            </div>
                            <h3 className="font-jakarta text-5xl font-bold mt-5 mb-5">
                                For Employers & Businesses
                            </h3>
                            <p className="text-base w-[65%] leading-relaxed mx-auto text-[#808080] font-jakarta">
                                Define ambitious service benchmarks that challenge your team to strive for excellence. These benchmarks should be
                                both aspirational and achievable, inspiring everyone to aim higher and constantly improve.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-10 w-[90%] mx-auto mt-16">
                            <div className="border rounded-xl border-solid border-[#D6D6D6] grid grid-cols-1/3 items-center p-4 gap-10">
                                <div>
                                    <Image src={Consultation} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                </div>
                                <div className="py-4">
                                    <h4 className="font-600 mb-2 text-xl font-jakarta">Consultation Services</h4>
                                    <p className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                        Tailored advice and strategies to help you integrate remote work into your business successfully.
                                    </p>
                                </div>
                            </div>
                            <div className="border rounded-xl border-solid border-[#D6D6D6] grid grid-cols-1/3 items-center p-4 gap-10">
                                <div>
                                    <Image src={JobImg} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                </div>
                                <div className="py-4">
                                    <h4 className="font-600 mb-2 text-xl font-jakarta">Consultation Services</h4>
                                    <p className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                        Tailored advice and strategies to help you integrate remote work into your business successfully.
                                    </p>
                                </div>
                            </div>
                            <div className="border rounded-xl border-solid border-[#D6D6D6] grid grid-cols-1/3 items-center p-4 gap-10">
                                <div>
                                    <Image src={SpeakingImg} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                </div>
                                <div className="py-4">
                                    <h4 className="font-600 mb-2 text-xl font-jakarta">Consultation Services</h4>
                                    <p className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                        Tailored advice and strategies to help you integrate remote work into your business successfully.
                                    </p>
                                </div>
                            </div>
                            <div className="border rounded-xl border-solid border-[#D6D6D6] grid grid-cols-1/3 items-center p-4 gap-10">
                                <div>
                                    <Image src={PartnershipImg} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                </div>
                                <div className="py-4">
                                    <h4 className="font-600 mb-2 text-xl font-jakarta">Consultation Services</h4>
                                    <p className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                        Tailored advice and strategies to help you integrate remote work into your business successfully.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-36 px-20">
                            <div className="text-center">
                                <div className="w-max mx-auto text-[#F963AB]">
                                    <h4 className="font-jost font-[500]">Services</h4>
                                </div>
                                <h3 className="font-jakarta text-5xl font-bold mt-5 mb-5">
                                    For Talents
                                </h3>
                            </div>
                            <div className="mt-16">
                                <div className="grid grid-cols-3 gap-7">
                                    <div className="border rounded-3xl border-solid border-[#D6D6D6] p-5">
                                        <Image src={TalentOne} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                        <div className="mt-4">
                                            <h3 className="font-jakarta text-2xl font-bold mt-5">
                                                Courses
                                            </h3>
                                            <div className="mt-2 mx-auto">
                                                <p className="text-base leading-relaxed font-jakarta text-[#475467] mb-4">
                                                    Learn everything about remote work, from beginner skills to professional-level expertise.
                                                </p>
                                                <Link href="" className="text-accent text-base font-jost font-600 flex gap-3 items-center">Read More <FaArrowRight /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border rounded-3xl border-solid border-[#D6D6D6] p-5">
                                        <div className="mt-4">
                                            <h3 className="font-jakarta text-2xl font-bold">
                                                Masters
                                            </h3>
                                            <div className="mt-2 mx-auto">
                                                <p className="text-base leading-relaxed font-jakarta text-[#475467] mb-4">
                                                    Learn everything about remote work, from beginner skills to professional-level expertise.
                                                </p>
                                                <Link href="" className="text-accent text-base font-jost font-600 flex gap-3 items-center">Read More <FaArrowRight /></Link>
                                            </div>
                                        </div>
                                        <Image src={TalentTwo} alt="women posing for picture" className="rounded-xl w-full object-cover mt-10" />
                                    </div>
                                    <div className="border rounded-3xl border-solid border-[#D6D6D6] p-5">
                                        <Image src={TalentThree} alt="women posing for picture" className="rounded-xl w-full object-cover" />
                                        <div className="mt-4">
                                            <h3 className="font-jakarta text-2xl font-bold mt-5">
                                                Courses
                                            </h3>
                                            <div className="mt-2 mx-auto">
                                                <p className="text-base leading-relaxed font-jakarta text-[#475467] mb-4">
                                                    Learn everything about remote work, from beginner skills to professional-level expertise.
                                                </p>
                                                <Link href="" className="text-accent text-base font-jost font-600 flex gap-3 items-center">Read More <FaArrowRight /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-36 px-20">
                            <div className="text-center">
                                <h3 className="font-jakarta text-5xl font-bold mt-5 mb-16">
                                    Why Choose Us
                                </h3>
                            </div>
                            <div className="grid grid-cols-3 text-center gap-20">
                                <div>
                                    <div className="mx-auto border-2 mb-5 border-solid border-accent size-16 rounded-full flex items-center justify-center">
                                        <h4 className="text-accent text-2xl">1</h4>
                                    </div>
                                    <h4 className="font-jakarta font-medium text-2xl mb-3">How do consultations work?</h4>
                                    <p className="font-jakarta text-base text-[#808080] leading-relaxed mb-5">These issues can
                                        range from minor illnesses and injuries to chronic.</p>
                                </div>
                                <div>
                                    <div className="mx-auto border-2 mb-5 border-solid border-accent size-16 rounded-full flex items-center justify-center">
                                        <h4 className="text-accent text-2xl">2</h4>
                                    </div>
                                    <h4 className="font-jakarta font-medium text-2xl mb-3">How do consultations work?</h4>
                                    <p className="font-jakarta text-base text-[#808080] leading-relaxed mb-5">These issues can
                                        range from minor illnesses and injuries to chronic.</p>
                                </div>
                                <div>
                                    <div className="mx-auto border-2 mb-5 border-solid border-accent size-16 rounded-full flex items-center justify-center">
                                        <h4 className="text-accent text-2xl">3</h4>
                                    </div>
                                    <h4 className="font-jakarta font-medium text-2xl mb-3">How do consultations work?</h4>
                                    <p className="font-jakarta text-base text-[#808080] leading-relaxed mb-5">These issues can
                                        range from minor illnesses and injuries to chronic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-36 px-20">
                            <div className="text-center">
                                <h3 className="font-jakarta text-5xl font-bold mt-5 mb-16">
                                    What Our Community Says
                                </h3>
                            </div>
                            <div className="my-10">
                                <Image src={QuoteImg} alt="woman posing for picture" className="rounded-xl mx-auto" />
                            </div>
                            <div className="mt-10 w-[70%] mx-auto text-center border rounded-xl border-solid border-[#D6D6D6] py-5 px-14">
                                <h4 className="font-jakarta text-lg font-medium leading-loose">
                                    Working with Remote WorkHers was a game-changer for our company. Their consultation services helped us
                                    streamline our remote work policies and hire top talent with ease. Highly recommend!
                                </h4>
                                <div className="mt-7">
                                    <h4 className="text-accent font-medium font-jakarta">Samantha T., HR Manager at TechSpark Inc.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-36 px-20">
                        <div className="grid grid-cols-2 gap-32 items-center">
                            <div>
                                <h4 className="font-jost font-[500] text-accent">Contact Us</h4>
                                <h3 className="font-jakarta text-5xl font-bold mt-5 mb-16">
                                    Reach Our Service Team
                                </h3>
                                <div className="mt-3">
                                    <div className="border-solid border-t border-[#D6D6D6] py-7">
                                        <div className="flex gap-5">
                                            <div>
                                                <FiMapPin className="font-bold text-accent text-2xl" />
                                            </div>
                                            <div className="">
                                                <h4 className="font-500 mb-2 text-xl font-jakarta">Address</h4>
                                                <a href="mailTo:info@+1800-525-54-589" className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                                    403, Port Washington Road, Canada.
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-solid border-y border-[#D6D6D6] py-7">
                                        <div className="flex gap-5">
                                            <div>
                                                <MdOutlineMail className="font-bold text-accent text-2xl" />
                                            </div>
                                            <div className="">
                                                <h4 className="font-500 mb-2 text-xl font-jakarta">Contact Details</h4>
                                                <a href="mailTo:info@+1800-525-54-589" className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                                    +1 800-525-54-589
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex gap-5">
                                            <div>
                                                <MdOutlineMail className="font-bold text-accent text-2xl" />
                                            </div>
                                            <div className="">
                                                <h4 className="font-500 mb-2 text-xl font-jakarta">Email Us</h4>
                                                <a href="mailTo:info@remoteworkher.com" className="text-base leading-relaxed mx-auto text-[#475467] font-jakarta">
                                                    info@remoteworkher.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image src={Map} alt="women posing for picture" className="rounded-xl object-cover" />
                            </div>
                        </div>
                    </div>
                </>
            </DisplayLayout>
        </div>
    )
}

export default ServicesPage;