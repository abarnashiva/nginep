import { FaSearch, FaStar } from "react-icons/fa";
import { LuSquareArrowUp } from "react-icons/lu";
import { BiDollarCircle } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

const features = [
  {
    icon: <FaSearch size={24} className="text-white" />,
    title: "Search Hotels",
    desc: "can easily help you to find recommendations that suit you",
  },
  {
    icon: <LuSquareArrowUp size={30} className="text-white" />,
    title: "Reserver",
    desc: "The aim is that your room order can be made immediately",
  },
  {
    icon: <BiDollarCircle size={32} className="text-white" />,
    title: "Secure Payment",
    desc: "can easily help you if you want to ask about tourist destinations",
  },
];

const hotels = [
  {
    name: "SenicMan",
    price: "$250",
    rating: "5.9",
    location: "Lampung Tengah, Bandar Lampung 34114",
  },
  {
    name: "OYI",
    price: "$350",
    rating: "7.5",
    location: "Kota Metro, Lampung 34114",
  },
  {
    name: "SekNO",
    price: "$150",
    rating: "5.9",
    location: "Lampung Tengah, Bandar Lampung 34114",
  },
];

export default function Feature() {
  return (
    <section className="w-full py-12 max-w-7xl mx-auto text-center lg:mt-10">
      {/* How It Works */}
      <h2 className="lg:text-4xl text-2xl font-semibold mb-8">
        How Nginep <span className="text-amber-400 font-bold">Boss</span> Works?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:mb-16 py-10">
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-amber-400 flex items-center justify-center mb-4">
              {f.icon}
            </div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-500 text-lg mt-2">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Popular Hotels */}
      <h2 className="lg:text-4xl text-2xl font-semibold lg:mb-8 lg:mt-10">
        Our Popular <span className="text-amber-400 font-bold">Hotel</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 py-10">
        {hotels.map((hotel, idx) => (
          <div key={idx} className="rounded-xl shadow-md text-left h-full w-full flex flex-wrap">
            <div className="bg-gray-200 rounded-t-lg">
              <img src="/images/gray.jpg" className="rounded-t-lg" />
            </div>
            <div className="p-4 w-full">
              <div className="flex justify-between items-center mb-2">
                <p className="text-amber-500 font-semibold">{hotel.price} <span className="text-sm text-gray-400">/Night</span></p>
                <div className="flex items-center gap-1 text-amber-400">
                  <FaStar size={14} />
                  <span className="text-sm text-gray-700">{hotel.rating}</span>
                </div>
              </div>
              <h4 className="text-lg font-semibold">{hotel.name}</h4>
              <p className="text-sm text-gray-500 flex gap-2 py-4"><MdOutlineLocationOn className="text-amber-500" size={20} />{hotel.location}</p>
              <hr className="mt-4 text-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
