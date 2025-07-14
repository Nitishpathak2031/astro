import React, { useEffect, useState } from "react";
import {
  FaStar,
  FaMoon,
  FaHeart,
  FaChartBar,
  FaSun,
  FaGlobe,
  FaMagic,
} from "react-icons/fa";

const iconMap = {
  "Planetary Transits": <FaMoon />,
  "Birth Chart Analysis": <FaStar />,
  "Relationship Astrology": <FaHeart />,
  "Lunar Wisdom": <FaSun />,
  "Career Astrology": <FaChartBar />,
  "Spiritual Growth": <FaMagic />,
};

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const API_TOKEN = "fbdc086f57bec175a4ca02cc13f295afd6a8d8b08caf33344932d4a18af9a0e7f4651a0dfc926037db5ec2d0a982d8176ceb27632599dd3e05f0518c469053ff0e60a9b6a139597c7e48df54d39ca9c6203ae252a956cd3300f3e8e87f702199451f3d964ccc9b85f2e5a6e404d89391ff30a6565592dd4f5935962a91fbfc25";

  useEffect(() => {
    fetch(
      "https://thankful-dance-5b37d3980b.strapiapp.com/api/astrology-articles",
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const cleaned = data?.data?.map((item) => ({
          id: item.id,
          title: item.Heading,
          description: item.Description || item.SubHeading || "No description provided",
          category: item.ArticleType || "Uncategorized",
          date: item.Date || item.publishedAt?.split("T")[0],
          time: "8 min read",
          views: "1.2k",
        }));
        setArticles(cleaned);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs", err);
      });
  }, []);

  const fetchFullArticleByID = async (id) => {
    try {
      const res = await fetch(
        `https://thankful-dance-5b37d3980b.strapiapp.com/api/astrology-articles/${id}?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch article: ${res.status}`);
      }

      const data = await res.json();
       console.log("✅ Full Article API Response:", data);
      const attributes = data?.data?.attributes;

      if (!attributes) {
        throw new Error("Invalid article response");
      }

      setSelectedArticle({
        id: data.data.id,
        title: attributes.Heading,
        description: attributes.SubHeading || "No description",
        fullContent: attributes.Description || "Full content not available",
        category: attributes.ArticleType || "Uncategorized",
        date: attributes.Date || attributes.publishedAt?.split("T")[0],
        time: "8 min read",
        views: "1.2k",
      });
    } catch (error) {
      console.error("❌ Error fetching full article:", error);
      alert("Something went wrong while fetching the article.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-purple-900 to-black min-h-screen text-white px-6 py-16 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-300">Celestial Chronicles</h2>
        <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
          Dive deep into the mysteries of the cosmos with our comprehensive astrological articles and cosmic wisdom.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {articles[0] && (
          <div className="bg-purple-800/30 border border-purple-600 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 mb-12">
            <div className="w-full md:w-2/3">
              <div className="flex flex-wrap items-center gap-4">
                <span className="bg-gradient-to-r from-[#EB9321] to-[#9A3BD8] text-white px-3 py-2 text-xs font-semibold rounded-2xl">
                  Featured
                </span>
                <p className="text-sm text-gray-400">{articles[0].date}</p>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 text-white">
                {articles[0].title}
              </h3>
              <p className="text-sm text-gray-300 mt-3 leading-relaxed">{articles[0].description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-3">
                <span>{articles[0].time}</span>
                <span>👁 {articles[0].views}</span>
              </div>
              <button
                onClick={() => fetchFullArticleByID(articles[0].id)}
                className="mt-5 hover:scale-105 transition bg-gradient-to-r from-[#EB9321] to-[#9A3BD8] px-5 py-3 rounded text-white"
              >
                Read Full Article →
              </button>
            </div>
            <div className="w-full md:w-1/3 bg-gradient-to-b from-[#67326F] to-[#4E2789] rounded-lg px-6 py-6 text-center">
              <div className="text-yellow-300 text-3xl mb-2">⭐ ♄</div>
              <p className="text-sm text-gray-300">{articles[0].category}</p>
              <p className="text-xs text-gray-400">Featured Highlight</p>
            </div>
          </div>
        )}

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((post) => (
            <div
              key={post.id}
              className="bg-[#4D2272] hover:scale-105 transition border border-purple-600 rounded-xl p-5"
            >
              <div className="text-yellow-300 flex flex-col items-center gap-2 text-sm mb-2">
                <span className="text-2xl">{iconMap[post.category] || <FaGlobe />}</span>
                <div className="bg-[#5D2993] px-2 rounded-4xl text-sm">
                  <span>{post.category}</span>
                </div>
              </div>
              <h4 className="font-bold text-lg mb-1 text-white">{post.title}</h4>
              <p className="text-sm text-[#978BAD]">{post.description}</p>
              <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
                <p>{post.date}</p>
                <p>{post.time} 👁 {post.views}</p>
              </div>
              <button
                onClick={() => fetchFullArticleByID(post.id)}
                className="mt-4 bg-purple-600 w-full text-white px-4 py-2 rounded-xl hover:bg-purple-700 text-sm"
              >
                📖 Read Article
              </button>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-400 to-purple-500 px-6 py-3 text-white rounded-full font-medium hover:scale-105 transition">
            View All Articles
          </button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-purple-950 max-w-3xl w-full h-[90vh] overflow-y-auto p-8 rounded-2xl shadow-xl relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm"
            >
              ❌ Close
            </button>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-xl">{iconMap[selectedArticle.category] || <FaGlobe />}</span>
              <span className="bg-purple-800 text-sm px-3 py-1 rounded-full">
                {selectedArticle.category}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">{selectedArticle.title}</h2>
            <p className="text-purple-200 mb-6 whitespace-pre-line">
              {selectedArticle.fullContent}
            </p>
            <div className="text-xs text-purple-400">
              {selectedArticle.date} • {selectedArticle.time} • 👁 {selectedArticle.views}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogs;





// import React, { useState } from "react";
// import {
//   FaStar,
//   FaMoon,
//   FaHeart,
//   FaChartBar,
//   FaSun,
//   FaGlobe,
//   FaMagic,
// } from "react-icons/fa";

// const blogPosts = [
//   {
//     title: "Mercury Retrograde Survival Guide: Navigating Communication Chaos",
//     discription:
//       "Learn practical strategies to thrive during Mercury retrograde periods and turn cosmic challenges into opportunities.",
//     fullContent:
//       "During Mercury retrograde, communication breakdowns are common. To survive, double-check all messages, avoid signing contracts, and reflect rather than react. With the right mindset, these periods become transformative.",
//     category: "Planetary Transits",
//     icon: <FaMoon />,
//     date: "January 25, 2025",
//     time: "8 min read",
//     views: "1.8k",
//   },
//   {
//     title: "Understanding Your North Node: Your Soul’s Purpose Revealed",
//     discription:
//       "Discover how your North Node placement reveals your karmic path and spiritual mission in this lifetime.",
//     fullContent:
//       "The North Node in astrology represents your destiny. It's the spiritual direction you’re meant to head toward in this lifetime. Knowing your North Node helps clarify your true potential.",
//     category: "Birth Chart Analysis",
//     icon: <FaStar />,
//     date: "January 22, 2025",
//     time: "10 min read",
//     views: "3.2k",
//   },
//   {
//     title: "Venus Signs in Love: How Your Venus Placement Affects Relationships",
//     discription:
//       "Explore how your Venus sign influences your love language, attraction patterns, and relationship needs.",
//     fullContent:
//       "Venus sign shapes how you love and what you seek in romance. It governs affection, charm, and romantic expression. Understanding your Venus helps in building conscious relationships.",
//     category: "Relationship Astrology",
//     icon: <FaHeart />,
//     date: "January 20, 2025",
//     time: "7 min read",
//     views: "2.8k",
//   },
//   {
//     title: "New Moon Rituals: Manifesting with Lunar Energy",
//     discription:
//       "Harness the power of new moon energy with these transformative rituals and intention-setting practices.",
//     fullContent:
//       "New moons are ideal for setting intentions. Light a candle, write your desires, and meditate. The lunar energy supports manifestation and clarity.",
//     category: "Lunar Wisdom",
//     icon: <FaSun />,
//     date: "January 18, 2025",
//     time: "6 min read",
//     views: "1.5k",
//   },
//   {
//     title: "Your Midheaven Sign: Unlocking Your Professional Destiny",
//     discription:
//       "Discover how your Midheaven placement reveals your ideal career path and public reputation.",
//     fullContent:
//       "Midheaven (MC) shows how you're seen in the world and your career direction. It reflects your aspirations and public image. Each sign brings a unique style to leadership.",
//     category: "Career Astrology",
//     icon: <FaChartBar />,
//     date: "January 17, 2025",
//     time: "9 min read",
//     views: "2.1k",
//   },
//   {
//     title: "The 12th House: Gateway to Spiritual Awakening",
//     discription:
//       "Explore the mysteries of the 12th house and its role in spiritual development and subconscious healing.",
//     fullContent:
//       "The 12th house governs dreams, intuition, and hidden truths. It's a space for healing and divine connection. Embracing it leads to deep emotional release and spiritual growth.",
//     category: "Spiritual Growth",
//     icon: <FaMagic />,
//     date: "January 12, 2025",
//     time: "8 min read",
//     views: "1.9k",
//   },
// ];

// const Blogs = () => {
//   const [selectedPost, setSelectedPost] = useState(null);

//   return (
//     <section className="bg-gradient-to-br from-purple-900 to-black min-h-screen text-white px-6 py-16 relative overflow-hidden">
//       {/* Page Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-yellow-300">Celestial Chronicles</h2>
//         <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
//           Dive deep into the mysteries of the cosmos with our comprehensive astrological articles and cosmic wisdom.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto px-4">
//         {/* Featured Article */}
//         <div className="bg-purple-800/30 border border-purple-600 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 mb-12">
//           <div className="w-full md:w-2/3">
//             <div className="flex flex-wrap items-center gap-4">
//               <span className="bg-gradient-to-r from-[#EB9321] to-[#9A3BD8] text-white px-3 py-2 text-xs font-semibold rounded-2xl">
//                 Featured
//               </span>
//               <p className="text-sm text-gray-400">January 28, 2025</p>
//             </div>

//             <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 text-white">
//               The Great Conjunction of 2025: What It Means for Your Sign
//             </h3>

//             <p className="text-sm text-gray-300 mt-3 leading-relaxed">
//               Discover how the rare planetary alignment between Jupiter and Saturn will influence each zodiac sign throughout the year.
//             </p>

//             <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-3">
//               <span>8 min read</span>
//               <span>👁 2.4k views</span>
//             </div>

//             <button className="mt-5 hover:scale-105 transition bg-gradient-to-r from-[#EB9321] to-[#9A3BD8] px-5 py-3 rounded text-white">
//               Read Full Article →
//             </button>
//           </div>

//           <div className="w-full md:w-1/3 bg-gradient-to-b from-[#67326F] to-[#4E2789] rounded-lg px-6 py-6 text-center">
//             <div className="text-yellow-300 text-3xl mb-2">⭐ ♄</div>
//             <p className="text-sm text-gray-300">Jupiter ⨯ conjunct Saturn ♄</p>
//             <p className="text-xs text-gray-400">The Great Conjunction</p>
//           </div>
//         </div>

//         {/* Blog Cards Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {blogPosts.map((post, index) => (
//             <div
//               key={index}
//               className="bg-[#4D2272] hover:scale-105 transition border border-purple-600 rounded-xl p-5"
//             >
//               <div className="text-yellow-300 flex flex-col items-center gap-2 text-sm mb-2">
//                 <span className="text-2xl">{post.icon}</span>
//                 <div className="bg-[#5D2993] px-2 rounded-4xl text-sm">
//                   <span>{post.category}</span>
//                 </div>
//               </div>
//               <h4 className="font-bold text-lg mb-1 text-white">{post.title}</h4>
//               <p className="text-sm text-[#978BAD]">{post.discription}</p>
//               <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
//                 <p>{post.date}</p>
//                 <p>{post.time} 👁 {post.views}</p>
//               </div>
//               <button
//                 onClick={() => setSelectedPost(post)}
//                 className="mt-4 bg-purple-600 w-full text-white px-4 py-2 rounded-xl hover:bg-purple-700 text-sm"
//               >
//                 📖 Read Article
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* View All CTA */}
//         <div className="text-center mt-12">
//           <button className="bg-gradient-to-r from-orange-400 to-purple-500 px-6 py-3 text-white rounded-full font-medium hover:scale-105 transition">
//             View All Articles
//           </button>
//         </div>
//       </div>

//       {/* Fullscreen Article Modal */}
//       {selectedPost && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md z-50 flex items-center justify-center p-4">
//           <div className="bg-purple-950 w-full max-w-3xl h-[90vh] overflow-y-auto p-8 rounded-2xl shadow-2xl relative">
//             <button
//               onClick={() => setSelectedPost(null)}
//               className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-full text-sm"
//             >
//               ❌ Close
//             </button>
//             <div className="flex items-center gap-2 mb-4">
//               <span className="text-yellow-400 text-xl">{selectedPost.icon}</span>
//               <span className="bg-purple-800 text-sm px-3 py-1 rounded-full">
//                 {selectedPost.category}
//               </span>
//             </div>
//             <h2 className="text-3xl font-bold mb-4">{selectedPost.title}</h2>
//             <p className="text-purple-200 mb-6 whitespace-pre-line">{selectedPost.fullContent}</p>
//             <div className="text-xs text-purple-400">
//               {selectedPost.date} • {selectedPost.time} • 👁 {selectedPost.views}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Blogs;
