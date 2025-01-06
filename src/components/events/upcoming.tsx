import UpcomingImg from "@/assets/images/events/upcoming.png";
import Image from "next/image";

const UpcomingEvents = () => {
    return (
        <div>
            <div className="border border-solid border-[#14141C] p-4 rounded-lg shadow-l shadow-[#F963AB]">
                <div>
                    <Image src={UpcomingImg} alt="women posing for picture" className="w-full object-center mb-5" />
                </div>
                <div className="event-body">
                    <h5 className="font-600 font-jakarta text-xl mb-2">Conference Opening</h5>
                    <ul className="flex gap-4 mb-3">
                        <li className="text-accent text-base">30 Sep 2022</li>
                        <li className="text-accent text-base">|</li>
                        <li className="text-accent text-base">10:00 AM</li>
                    </ul>
                    <p className="text-[#5D5D6C] text-base">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <div className="mt-10 flex items-center justify-between">
                        <button className="bg-black py-3 px-10 text-white rounded-lg">Register</button>
                        <p className="text-[#747474]">Physical</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvents;