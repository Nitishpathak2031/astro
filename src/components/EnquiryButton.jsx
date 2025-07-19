import React from "react";
import { FaEnvelope } from "react-icons/fa";

const EnquiryButton = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
      <button
        className="bg-purple-600 text-white px-4 py-3 rounded-l-full shadow-xl flex items-center gap-2 hover:bg-purple-700 transition-all"
        onClick={() => {
            const enquiry = document.getElementById("contact");
            if(enquiry){
                enquiry.scrollIntoView({behavior:"smooth"})
            }
        }}
      >
        <FaEnvelope className="text-lg" />
        <span className="hidden sm:inline">Enquiry</span>
      </button>
    </div>
  );
};

export default EnquiryButton;
