import React from "react";

const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[#31105D] text-center px-4">
      <div className="text-6xl pb-6">✨</div>
      <div className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-300 mb-4">
        Unlock Your <br /> Cosmic Destiny
      </div>
      <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mb-8">
        Discover the celestial wisdom that guides your path. Connect with the
        universe through personalized astrology readings and join our planetary
        camaraderie.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => {
            const section = document.getElementById("services");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-gradient-to-r from-orange-400 to-purple-500 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
        >
          Explore Services
        </button>
        <button
        onClick={()=>{
          const contact = document.getElementById("contact");
          if(contact){
            contact.scrollIntoView({behavior:"smooth"});
          }
        }}
        className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
          Book Reading
        </button>
      </div>
    </section>
  );
};

export default Home;
