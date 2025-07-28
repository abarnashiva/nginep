import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
    const [smallScreen, setSmallScreen] = useState<boolean>(true);
    const isClient = typeof window === `object`;

    const handleResize = () => {
        setSmallScreen(window.innerWidth <= 950);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
    }, [isClient]);

    return (
        <div
            className="bg-cover bg-center bg-no-repeat p-6 lg:p-10 rounded-lg grid lg:grid-cols-2 justify-between items-center text-gray-800 lg:mt-10 mt-6"
            style={{ backgroundImage: `url('/images/background.webp')` }}
        >
            <div className="text-left mb-6 md:mb-0 bg-black/50 p-4 rounded lg:p-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-white font-bold mb-4 lg:py-10 py-4">
                    Your Ultimate Hotel<br className="hidden md:block" /> Booking Solution!
                </h1>

                {smallScreen && (
                    <div className="flex lg:flex-col gap-2 lg:gap-0 text-2xl md:text-3xl lg:text-4xl text-white lg:justify-end py-4">
                        <p className="font-bold">5M+</p>
                        <p className="md:text-right text-2xl md:text-3xl">Active Users</p>
                    </div>
                )}

                <button className="bg-amber-400 hover:bg-amber-500 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-full flex items-center gap-2 transition">
                    Reserve Now
                    <span className="px-2">
                        <button className="ml-auto bg-white p-2 rounded-full">
                            <FaArrowRight className="text-amber-500" />
                        </button>
                    </span>
                </button>
            </div>

            {!smallScreen && (
                <div className="flex lg:flex-col text-center lg:text-right text-2xl md:text-3xl lg:text-4xl text-white justify-end">
                    <p className="font-bold">5M+</p>
                    <p className="text-2xl lg:text-3xl">Active Users</p>
                </div>
            )}
        </div>
    );
}

