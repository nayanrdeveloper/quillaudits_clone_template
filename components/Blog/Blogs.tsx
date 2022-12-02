import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Blogs() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const blogList = [
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
    <div className="py-4 px-3 md:px-20 container mt-10" data-aos="zoom-out-left">
      <div className="flex flex-col flex-wrap gap-3">
        <h3 className="text-light-blue uppercase">OUR BLOG</h3>
        <h2 className="text-light-black font-semibold text-2xl">
          Catch up on the news
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {blogList.map((blog, index) => {
            return (
              <div key={index} className="flex flex-col gap-2 p-2">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  height={200}
                  width={325}
                />
                <h3 className="text-light-blue font-semibold cursor-pointer">{blog.title}</h3>
                <span className="text-light-black">{blog.date}</span>
                <p className="text-light-black">{blog.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
