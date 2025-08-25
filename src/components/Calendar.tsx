import { FaArrowRight, FaSearch } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";

export default function Calendar() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2" data-aos="fade-right">
            <div className="mt-6 w-full bg-white rounded-full shadow-md flex text-center items-center px-4 lg:px-6 py-2 gap-4 lg:gap-10 max-w-2xl">
                <div className="flex items-center gap-4 text-gray-600 text-sm lg:text-lg xl:text-xl">
                    <FaSearch className="text-amber-500" />
                    <span>Location</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-4 text-gray-600 border-l pl-2 md:pl-4 xl:pl-10 text-sm lg:text-lg xl:text-xl">
                    <MdOutlineCalendarMonth className="text-amber-500" size={20} />
                    <span>25 Sep - 1 Dec 2024</span>
                </div>
                <button className="ml-auto bg-amber-400 hover:bg-amber-500 text-white p-2 rounded-full">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}