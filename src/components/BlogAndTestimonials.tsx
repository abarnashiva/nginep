import { FaStar } from "react-icons/fa";
import { MdOutlineCalendarMonth, MdOutlineRemoveRedEye } from "react-icons/md";

const blogs = [
  {
    title: "The Ultimate Guide to Finding the best Hotel Deals",
    category: "Hotel Booking",
    views: "1K",
    date: "12 Jan, 2024",
  },
  {
    title: "The Benefit of Early Hotel Reservation",
    category: "Hotel Booking",
    views: "3K",
    date: "12 Jan, 2024",
  },
  {
    title: "The Art of Picking the Perfect Hotel Location for your Trip",
    category: "Hotel Booking",
    views: "1K",
    date: "12 Jan, 2024",
  },
];

const testimonials = [
  {
    rating: 5,
    content:
      "These websites provide a global marketplace for artists, musicians, designers, and creators of all kinds to showcase their unique creations and connect with a broader audience.",
    name: "Robert",
    country: "USA",
  },
  {
    rating: 5,
    content:
      "These websites provide a global marketplace for artists, musicians, designers, and creators of all kinds to showcase their unique creations and connect with a broader audience.",
    name: "Robert",
    country: "USA",
  },
  {
    rating: 5,
    content:
      "These websites provide a global marketplace for artists, musicians, designers, and creators of all kinds to showcase their unique creations and connect with a broader audience.",
    name: "Robert",
    country: "USA",
  },
];

export default function BlogAndTestimonials() {
  return (
    <section className="w-full py-16 max-w-7xl mx-auto text-center">
      {/* Blog Section */}
      <h2 className="lg:text-4xl text-2xl font-semibold mb-8">
        Our Latest <span className="text-amber-500">Blog & News</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-6 mb-16 py-10">
        {blogs.map((blog, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden text-left">
            <div className="bg-gray-200 h-56 w-full" />
            <div className="p-6">
              <span className="inline-block bg-amber-400 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {blog.category}
              </span>
              <h3 className="font-semibold lg:text-xl text-gray-800 mb-4">
                {blog.title}
              </h3>
              <div className="flex justify-between w-full items-center text-sm gap-4">
                <div className="flex items-center gap-1">
                  <MdOutlineRemoveRedEye size={20} />
                  {blog.views}
                </div>
                <div className="flex items-center gap-1">
                  <MdOutlineCalendarMonth size={20} />
                  {blog.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
      <h2 className="lg:text-4xl text-2xl font-semibold mb-8">
        Our Customer <span className="text-amber-500">Testimonial</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-6 py-10">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-6 rounded-xl text-left shadow-sm"
          >
            <div className="flex items-center mb-2 text-amber-400">
              {Array.from({ length: item.rating }).map((_, starIdx) => (
                <FaStar key={starIdx} size={16} />
              ))}
              <span className="ml-2 text-black font-semibold">5.0</span>
            </div>
            <p className="text-sm text-gray-700 mb-4">{item.content}</p>
            <p className="font-semibold">{item.name}</p>
            <p className="text-xs text-gray-500">{item.country}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
