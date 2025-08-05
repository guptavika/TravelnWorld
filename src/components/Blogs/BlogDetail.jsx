import React from "react";
import { useParams } from "react-router-dom";

const travelBlogs = [
  {
    id: "1",
    title: "How to Customize Your Dream Vacation Package Without Overpaying",
    date: "May 15, 2024",
    author: "SONU",
    duration: "5 min read",
    image: "https://admiredashboard.theholistay.in/blog_images/1743490383_67eb8d4f8aaa5GvpeDsEy.jpg",
    description:
      "Planning your dream vacation doesn't have to break the bank! In this guide, we'll show you how to customize your perfect travel package while staying within your budget",
  },
  {
    id: "2",
    title: "Top 10 Hidden Gems to visit in India",
    date: "June 2, 2024",
    author: "Sonu kumar",
    duration: "7 min read",
    image: "https://admiredashboard.theholistay.in/blog_images/1743669350_67ee48668e149nfrtSPJE.png",
    description:
      "Best places to visit, hidden gems Laitmawsiang, Meghalaya, Ubbalamadugu Falls, Andhra Pradesh, Arvalem Caves, Goa...",
  },
];

const BlogDetail = () => {
  const { blogId } = useParams();
  const blog = travelBlogs.find((item) => item.id === blogId);

  if (!blog) {
    return <div className="p-6 text-center text-red-600">Blog not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        {blog.date} • {blog.author} • {blog.duration}
      </p>
      <img src={blog.image} alt={blog.title} className="w-full rounded-xl mb-6" />
      <p className="text-lg text-gray-700">{blog.description}</p>
    </div>
  );
};

export default BlogDetail;
