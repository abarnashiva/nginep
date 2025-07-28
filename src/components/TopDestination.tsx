import { FaArrowRight } from "react-icons/fa";
import { MdOutlineCalendarMonth, MdOutlineLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";

const destinations = [
  { name: "Jawa", image: "/images/jawa.jpg" },
  { name: "Sumatera", image: "/images/sumatera.avif" },
  { name: "Kalimantan", image: "/images/kalimantan.jpg" },
  { name: "Sulawesi", image: "/images/sulawesi.jpg" },
  { name: "NTB", image: "/images/ntb.jpg" },
  { name: "NTT", image: "/images/ntt.jpg" },
];

export default function TopDestinations() {
  return (
    <section className="w-full max-w-7xl mx-auto text-center">
      {/* Title */}
      <h2 className="lg:text-4xl text-2xl font-semibold md:mb-10">
        <span className="text-orange-500 font-bold">Top Destination Choice</span>
        <br />
        <span className="text-gray-800">For You In Indonesian</span>
      </h2>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 py-10">
        {destinations.map(({ name, image }, idx) => (
          <div
            key={idx}
            className="bg-gray-200 rounded-xl flex flex-col justify-end overflow-hidden relative h-60 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="bg-gray-900/70 text-white px-4 py-3 flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg text-left">{name}</p>
                <p className="text-sm text-gray-200">40 Destination</p>
              </div>
              <button className="bg-amber-400 p-2 rounded-full text-white hover:bg-amber-500">
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>


      {/* Filter Bar */}
      <div className="flex md:flex-row flex-col  md:bg-white md:shadow-md md:rounded-full px-4 lg:px-10 py-4 items-center justify-between lg:gap-12 gap-6 max-w-5xl mx-auto">
        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500">
          <MdOutlineLocationOn className="text-amber-500" size={30} />

        </div>
        <div>
          <p className="text-sm">Location</p>
          <p className="font-semibold md:text-lg">Jawa Barat</p>
        </div>

        {/* Check-in/out */}
        <div className="flex items-center gap-2 text-gray-500 lg:border-l lg:pl-6">
          <MdOutlineCalendarMonth className="text-amber-500" size={26} />

        </div>
        <div>
          <p className="text-sm">Check In - Check Out</p>
          <p className="font-semibold md:text-lg">25 Sep 2024 - 1 Jan 2025</p>
        </div>

        {/* Price Range */}
        <div className="flex items-center gap-2 text-gray-500 lg:border-l lg:pl-6">
          <BiDollarCircle size={32} className="text-amber-500" />
        </div>
        <div>
          <p className="text-sm">Range</p>
          <p className="font-semibold md:text-lg">$ 150 - $ 500</p>
        </div>

        {/* Submit Button */}
        <button className="lg:ml-auto bg-amber-400 hover:bg-amber-500 text-white p-2 rounded-full">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
