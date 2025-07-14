import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false); // close menu after click

  return (
    <nav className="bg-black/80 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-300">⭐ Celestial Guidance</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
          <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
          <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
          <li><a href="#blogs" className="hover:text-yellow-400 transition">Blogs</a></li>
          <li><a href="#insights" className="hover:text-yellow-400 transition">Insights</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={handleToggle}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4 text-white text-sm font-medium">
          <a href="#home" onClick={handleLinkClick} className="block hover:text-yellow-400">Home</a>
          <a href="#about" onClick={handleLinkClick} className="block hover:text-yellow-400">About</a>
          <a href="#services" onClick={handleLinkClick} className="block hover:text-yellow-400">Services</a>
          <a href="#blogs" onClick={handleLinkClick} className="block hover:text-yellow-400">Blogs</a>
          <a href="#insights" onClick={handleLinkClick} className="block hover:text-yellow-400">Insights</a>
          <a href="#contact" onClick={handleLinkClick} className="block hover:text-yellow-400">Contact</a>
        </div>
      )}
    </nav>
  );
}
