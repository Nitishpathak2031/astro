import React from "react";
import { FaStar } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-6">Your Cosmic Guide</h2>
          <p className="text-lg text-gray-300 mb-4">
            With over 15 years of experience in astrology and cosmic guidance, I've helped thousands of souls connect
            with their celestial purpose and navigate life's cosmic currents.
          </p>
          <p className="text-md text-purple-300 mb-6">
            My approach combines traditional astrological wisdom with modern psychological insights, creating a bridge
            between ancient cosmic knowledge and contemporary life challenges.
          </p>

          <div className="flex items-center justify-between gap-10 mb-8">
            <div>
              <p className="text-3xl font-bold text-yellow-300">5000+</p>
              <p className="text-sm text-gray-300">Readings Given</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-300">15+</p>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-yellow-400 to-purple-500 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition">
            Learn More About Me
          </button>
        </div>

        {/* Right Side */}
        <div className="bg-[#441B7D] h-72 border border-purple-600 rounded-2xl p-8 text-center shadow-xl">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-orange-400 to-purple-500 p-4 rounded-full">
              <FaStar className="text-white text-6xl" />
            </div>
          </div>
          <h3 className="text-2xl font-bold pt-6 text-white mb-2">Certified Astrologer</h3>
          <p className="text-sm text-gray-300">
            Licensed by the International Society for Astrological Research and member of the Professional Astrologers Alliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
