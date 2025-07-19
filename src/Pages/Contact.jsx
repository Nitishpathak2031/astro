import React from "react";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import Community from "./Community"

export default function Contact() {
  return (
    <div id="contact" className="bg-gradient-to-b from-[#2a0040] to-[#4b0082] text-white px-4 md:px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-200">
          Begin Your Cosmic Journey
        </h2>
        <p className="text-purple-200 text-lg md:text-xl mt-4">
          Ready to unlock the secrets of your celestial blueprint? Reach out to
          schedule your <br className="hidden sm:block" /> personalized astrology session.
        </p>
      </div>

      {/* Form */}
      <div className="bg-[#3d0066] p-6 md:p-8 rounded-2xl shadow-lg max-w-5xl mx-auto mb-12 w-full">
        <h3 className="text-2xl font-bold mb-6 text-center">Book Your Reading</h3>
        <form className="space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-[#5a009d] placeholder-purple-200 text-white"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="your@gmail.com"
                className="w-full p-3 rounded-xl bg-[#5a009d] placeholder-purple-200 text-white"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1">Birth Date & Time</label>
              <input
                type="text"
                placeholder="Birth Date & Time"
                className="w-full p-3 rounded-xl bg-[#5a009d] placeholder-purple-200 text-white"
              />
            </div>
            <div>
              <label className="block mb-1">Birth Location</label>
              <input
                type="text"
                placeholder="Birth Location"
                className="w-full p-3 rounded-xl bg-[#5a009d] placeholder-purple-200 text-white"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div>
            <label className="block mb-1">Service Interest</label>
            <select className="w-full p-3 rounded-xl bg-[#5a009d] text-white">
              <option>Select a service</option>
              <option>Career Guidance</option>
              <option>Relationship Compatibility</option>
              <option>Birth Chart Analysis</option>
            </select>
          </div>

          {/* Row 4 */}
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              placeholder="Your message"
              className="w-full p-3 rounded-xl bg-[#5a009d] placeholder-purple-200 text-white"
              rows={4}
            ></textarea>
          </div>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-yellow-400 to-purple-500 text-white py-3 rounded-full font-semibold hover:scale-[1.02] transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info Row */}
      <div className="flex flex-col md:flex-col items-center justify-center gap-8 max-w-5xl mx-auto text-purple-100">
        <h2 className="font-semibold text-2xl font-serif">Contact Us</h2>
        {/* 3 Cards Row */}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {/* Email */}
          <div className="bg-[#3d0066] p-6 rounded-2xl flex items-start gap-4 shadow-md w-full sm:w-[280px]">
            <div className="text-amber-300 text-3xl">
              <MdEmail />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p>contact@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-[#3d0066] p-6 rounded-2xl flex items-start gap-4 shadow-md w-full sm:w-[280px]">
            <div className="text-amber-300 text-3xl">
              <BiPhone />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Phone No</h2>
              <p>+91 3478387487</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-[#3d0066] p-6 rounded-2xl flex items-start gap-4 shadow-md w-full sm:w-[280px]">
            <div className="text-amber-300 text-3xl">
              <CiLocationOn />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Location</h2>
              <p>Jaipur, India</p>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-[#3d0066] p-6 rounded-2xl shadow-md w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-2">Consultation Hours:</h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-sm md:text-base mt-2">
            <p>Mon - Fri: 9:00 AM - 7:00 PM PST</p>
            <p>Saturday: 10:00 AM - 4:00 PM PST</p>
            <p>Sunday: By appointment only</p>
          </div>
        </div>
      </div>
      <Community/>
    </div>
  );
}
