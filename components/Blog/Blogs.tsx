import React from "react";
import BlogCard from "./BlogCard";

function Blogs() {
  interface blogStruct {
    title: string;
    image: string;
    date: string;
    desc: string;
  }
  const blogList: blogStruct[] = [
    {
      title: "Web3 Security: Classification & Analysis of Web3 Hacks",
      image: "/blog_1.png",
      date: "15 Mar, 2023",
      desc: "At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version.",
    },
    {
      title: "Web3 Security: Classification & Analysis of Web3 Hacks",
      image: "/blog_1.png",
      date: "15 Mar, 2023",
      desc: "At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version.",
    },
    {
      title: "Web3 Security: Classification & Analysis of Web3 Hacks",
      image: "/blog_1.png",
      date: "15 Mar, 2023",
      desc: "At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version.",
    },
  ];
  return (
    <div className="py-4 px-3 md:px-20 container mt-10">
      <div className="flex flex-col flex-wrap gap-3">
        <h3 className="text-light-blue uppercase">OUR BLOG</h3>
        <h2 className="text-light-black font-semibold text-2xl">
          Catch up on the news
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {blogList.map((blogData, index) => {
            return (
              <BlogCard key={index} {...blogData} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
