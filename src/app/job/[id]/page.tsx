import DisplayLayout from "@/components/layout";
import Image from "next/image";

import WomenJobBoard from "@/assets/images/job_board_women.svg";
import SingleJobListing from "@/components/job/listing";
import SingleJobDetail from "@/components/job/listing-detail";

import VectorImg from "@/assets/images/vector-bg.png";
import GroupImg from "@/assets/images/group.png";

export default function JobBoard() {
    return (
        <div>
            <DisplayLayout>
                <div className="detail">
                    <Image src={VectorImg} alt="vector background" className="vector-bg z-10" />
                    <div className="job-hero relative py-32 w-[70%] mx-auto text-center">
                        <h2 className="font-bold text-6xl">Job Board</h2>
                        <div className="mt-4 w-[80%] mx-auto">
                            <p className="text-lg leading-loose">Explore practical advice, success stories, and the latest trends
                                in remote work. Are you just starting out or levelling up your skills, we've got something for every Remote WorkHer.</p>
                        </div>
                        <Image src={GroupImg} alt="group background" className="group-bg z-20" />
                    </div>
                    <div className="w-[70%] mx-auto">
                        <div className="">
                            <div className="grid grid-cols-2 gap-x-3 gap-y-20">
                                <div className="flex flex-col gap-y-16">
                                    <SingleJobListing />
                                    <SingleJobListing />
                                    <SingleJobListing />
                                    <SingleJobListing />
                                    <SingleJobListing />
                                    <SingleJobListing />
                                </div>
                                <div>
                                    <SingleJobDetail />
                                </div>
                            </div>
                        </div>
                        <div className="mt-20 mb-32">
                            <button className="border-2 border-solid border-[#26272B] font-[600] mx-auto block px-7 py-3 rounded-xl">Browse All Jobs</button>
                        </div>
                    </div>
                </div>
            </DisplayLayout>
        </div>
    );
}
