import React from "react";
import { FaStar, FaMoon, FaBolt } from "react-icons/fa";

const Insights = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">

        {/* Current Transits */}
        <div className="bg-purple-800/30 rounded-xl p-6 border border-purple-600">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-yellow-300">
            <span className="text-orange-400">📈</span> Current Transits
          </h3>

          <div className="mb-4 border-l-4 border-yellow-400 pl-4">
            <h4 className="text-lg font-bold text-white">Mercury Retrograde</h4>
            <p className="text-sm text-gray-300">January 15 – February 4, 2025</p>
            <p className="text-sm mt-1 text-gray-400">Time for reflection and revisiting past decisions. Communication may require extra care.</p>
          </div>

          <div className="mb-4 border-l-4 border-purple-300 pl-4">
            <h4 className="text-lg font-bold text-white">Venus in Pisces</h4>
            <p className="text-sm text-gray-300">Through February 20, 2025</p>
            <p className="text-sm mt-1 text-gray-400">Enhanced intuition in relationships and creativity. Trust your heart’s wisdom.</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="text-lg font-bold text-white">Mars in Gemini</h4>
            <p className="text-sm text-gray-300">Until March 10, 2025</p>
            <p className="text-sm mt-1 text-gray-400">Mental energy is heightened. Ideal time for learning and intellectual pursuits.</p>
          </div>
        </div>

        {/* Lunar Cycles */}
        <div className="bg-purple-800/30 rounded-xl p-6 border border-purple-600 text-center">
          <h3 className="text-xl font-semibold mb-4 flex justify-center items-center gap-2 text-yellow-300">
            <FaMoon className="text-yellow-300" /> Lunar Cycles
          </h3>
          <div className="text-center mb-4">
            <div className="text-4xl text-orange-300 mb-2">🌔</div>
            <h4 className="font-bold text-lg">Waxing Gibbous</h4>
            <p className="text-sm text-gray-400">Current Phase</p>
          </div>
          <p className="text-sm text-gray-300 mb-4">Time for refinement and adjustment. Focus on perfecting your goals and intentions.</p>

          <hr className="border-gray-700 my-4" />
          <p className="font-semibold text-white mb-2">Upcoming Phases</p>
          <ul className="text-sm space-y-1 text-left ml-6">
            <li>Full Moon in Leo <span className="float-right text-yellow-300">Feb 12</span></li>
            <li>New Moon in Aquarius <span className="float-right text-blue-300">Feb 27</span></li>
            <li>Full Moon in Virgo <span className="float-right text-cyan-400">Mar 14</span></li>
          </ul>
        </div>

        {/* Weekly Energy */}
        <div className="bg-purple-800/30 rounded-xl p-6 border border-purple-600">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-yellow-300">
            <FaBolt className="text-yellow-300" /> Weekly Energy
          </h3>
          <div className="bg-purple-900/50 border border-purple-500 p-4 rounded-lg mb-4">
            <p className="font-semibold text-white">This Week’s Focus</p>
            <p className="text-sm text-pink-300 mt-1">Transformation and New Beginnings</p>
            <p className="text-sm mt-2 text-gray-400">The cosmic energies are supporting major life changes. Trust your intuition and take bold steps toward your dreams.</p>
          </div>

          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Career & Ambition</span>
              <span className="text-yellow-400">★★★★☆</span>
            </div>
            <div className="flex justify-between">
              <span>Love & Relationships</span>
              <span className="text-purple-400">★★★★★</span>
            </div>
            <div className="flex justify-between">
              <span>Health & Wellness</span>
              <span className="text-blue-300">★★★☆☆</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-orange-400 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:scale-105 transition">
          Get Personalized Insights
        </button>
      </div>
    </section>
  );
};

export default Insights;
