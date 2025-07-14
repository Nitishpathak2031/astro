import React from "react";
import { FaStar, FaMoon, FaBriefcase, FaHeart, FaCalendarAlt, FaMagic } from "react-icons/fa";

const services = [
  {
    title: "Birth Chart Reading",
    description: "Unlock the secrets of your personality, strengths, and life path through your unique cosmic fingerprint.",
    price: "From $150",
    icon: <FaStar className="text-yellow-400 text-2xl" />,
  },
  {
    title: "Lunar Guidance",
    description: "Harness the power of moon phases to optimize your decisions, relationships, and personal growth.",
    price: "From $120",
    icon: <FaMoon className="text-yellow-400 text-2xl" />,
  },
  {
    title: "Career Astrology",
    description: "Navigate your professional path with cosmic insight into your vocational calling and timing.",
    price: "From $180",
    icon: <FaBriefcase className="text-yellow-400 text-2xl" />,
  },
  {
    title: "Relationship Compatibility",
    description: "Explore the cosmic chemistry between you and your loved ones through synastry analysis.",
    price: "From $200",
    icon: <FaHeart className="text-yellow-400 text-2xl" />,
  },
  {
    title: "Transit Forecasting",
    description: "Prepare for upcoming cosmic influences and make the most of planetary opportunities.",
    price: "From $140",
    icon: <FaCalendarAlt className="text-yellow-400 text-2xl" />,
  },
  {
    title: "Spiritual Guidance",
    description: "Connect with your higher purpose and spiritual gifts through deep astrological insight.",
    price: "From $160",
    icon: <FaMagic className="text-yellow-400 text-2xl" />,
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-blue-900 py-20 px-6 text-white min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-300">Celestial Services</h2>
        <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto">
          Discover your cosmic blueprint through our comprehensive astrology services, each designed to illuminate different aspects of your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-600 hover:scale-[1.02] transition-all duration-300 shadow-xl"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{service.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-400 font-semibold">{service.price}</span>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full hover:brightness-110">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
