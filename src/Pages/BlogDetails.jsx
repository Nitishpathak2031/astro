import React from "react";
import { FaRegClock, FaEye } from "react-icons/fa";
import eightshouse from "../assets/eightshouse.jpg";

const BlogDetails = ({ article }) => {
  if (!article) return null;

  return (
    <div id="blog-details" className="min-h-screen bg-gradient-to-b from-[#2a0040] to-[#4b0082] text-white pt-20 px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-300 mb-4">{article.title}</h1>
        <p className="text-purple-100 text-lg">{article.discription}</p>
        <div className="mt-4 flex justify-center gap-4 text-sm text-purple-300">
          <span className="flex items-center gap-1"><FaRegClock /> {article.time}</span>
          <span className="flex items-center gap-1"><FaEye /> {article.views}</span>
          <span>{article.date}</span>
        </div>
      </div>

      <div className="flex justify-center">
        <img className="p-6 rounded-xl" src={eightshouse} alt="article" />
      </div>

      <div className="max-w-3xl mx-auto bg-[#3d0066] p-6 rounded-xl text-purple-200 leading-relaxed shadow-lg space-y-4">
        <p>
          Mercury Retrograde can be chaotic, but also a time of renewal. During this phase, communication often breaks down, tech fails, and misunderstandings arise.
        </p>
        <p>
          However, it also offers a unique opportunity to reflect, realign, and redirect your intentions.
        </p>
        <p>
          Use this time to reconnect with old projects, revisit past decisions, and give yourself space to recalibrate.
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
