import Image from "next/image";
import PastImg from "@/assets/images/events/past.png";

interface PastEventsPropsInterface {
    img: any
}

const PastEvents = (props: PastEventsPropsInterface) => {
    return (
        <div>
            <div>
                <Image src={props.img} alt="women posing for picture" className="w-full rounded-2xl object-center mb-5" />
            </div>
            <div className="event-body">
                <ul className="flex gap-4 mb-3">
                    <li className="text-[#5D5D6C] text-base">30 Sep 2022</li>
                    <li className="text-[#5D5D6C] text-base">|</li>
                    <li className="text-[#5D5D6C] text-base">10:00 AM</li>
                </ul>
                <h5 className="font-600 font-jakarta text-xl mb-2">Conference Opening</h5>
                <p className="text-[#5D5D6C] text-base">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                <div className="mt-10 flex items-center justify-between">
                    <button className="bg-black py-3 px-10 text-white rounded-lg">Register</button>
                    <p className="text-[#747474]">Paid</p>
                </div>
            </div>
        </div>
    )
}

export default PastEvents;