import React from "react";
import{ Link} from "react-router-dom"
const travelBlogs = [
  {
    id:"1",
    title: "How to Customize Your Dream Vacation Package Without Overpaying",
    date: "May 15, 2024",
    author: "SONU",
    duration: "5 min read",
    image: "https://admiredashboard.theholistay.in/blog_images/1743490383_67eb8d4f8aaa5GvpeDsEy.jpg",
    description:
      "Planning your dream vacation doesn't have to break the bank! In this guide, we'll show you how to customize your perfect travel package while staying within your budget",
  },
  {
    id:"2",
    title: "Top 10 Hidden Gems to visit in India",
    date: "June 2, 2024",
    author: "Sonu kumar",
    duration: "7 min read",
    image: "https://admiredashboard.theholistay.in/blog_images/1743669350_67ee48668e149nfrtSPJE.png",
    description:
      "Best places to visit, hidden gems Laitmawsiang, Meghalaya, Ubbalamadugu Falls, Andhra Pradesh, Arvalem Caves, Goa...",
  },
];

const TravelInsights = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Latest Travel Insights
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover expert tips, hidden gems, and travel inspiration from our team
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {travelBlogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-56 w-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-xs font-medium text-white bg-yellow-600 px-2 py-1 rounded">
                  {blog.duration}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {blog.author}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>
              </div>

              <div className="mt-auto flex justify-between gap-3">
                <button className="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition font-medium border border-gray-200">
                  Contact
                </button>
                <Link to={`/blogs/${blog.id}`} className="flex-1">
                <button className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition font-medium">
                  Read More
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelInsights;
