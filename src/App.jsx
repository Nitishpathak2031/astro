import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Insights from "./Pages/InSights";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Blogs from "./Pages/Blogs";

export default function App() {

  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="blogs"><Blogs/></section>
      <section id="insights"><Insights /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}
