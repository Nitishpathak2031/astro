import React from "react";

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a0040] to-[#4b0082] text-white p-6 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-200 mb-2">Planetary Camaraderie</h1>
        <p className="text-lg text-purple-100 max-w-2xl mx-auto">
          Join our cosmic community where kindred spirits share their celestial journey and support each other's growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#3d0066] rounded-2xl p-6 shadow-lg">
          <p className="italic text-purple-100">
            "The birth chart reading was absolutely transformative. I finally understand my life patterns and feel empowered to make positive changes."
          </p>
          <div className="mt-4 flex justify-between items-center text-sm text-purple-300">
            <span className="font-bold">Sarah M.</span>
            <span>Leo <span role="img" aria-label="Leo">♌</span></span>
          </div>
        </div>

        <div className="bg-[#3d0066] rounded-2xl p-6 shadow-lg">
          <p className="italic text-purple-100">
            "The career astrology session helped me find my true calling. I'm now pursuing my passion with confidence and cosmic backing."
          </p>
          <div className="mt-4 flex justify-between items-center text-sm text-purple-300">
            <span className="font-bold">Michael R.</span>
            <span>Scorpio <span role="img" aria-label="Scorpio">♏</span></span>
          </div>
        </div>

        <div className="bg-[#3d0066] rounded-2xl p-6 shadow-lg">
          <p className="italic text-purple-100">
            "The relationship compatibility reading saved my marriage. We now understand each other on a deeper, cosmic level."
          </p>
          <div className="mt-4 flex justify-between items-center text-sm text-purple-300">
            <span className="font-bold">Elena K.</span>
            <span>Pisces <span role="img" aria-label="Pisces">♓</span></span>
          </div>
        </div>
      </div>

      <div className="bg-[#300050] p-8 rounded-2xl text-center shadow-xl max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">Join Our Cosmic Circle</h2>
        <p className="text-purple-200 mb-6">
          Connect with fellow star-seekers in our monthly cosmic gatherings, online community, and exclusive workshops.
        </p>
        <button className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-300 hover:to-pink-400 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300">
          Join Community
        </button>
      </div>
    </div>
  );
}
