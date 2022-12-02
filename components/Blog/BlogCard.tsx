import Image from "next/image";
import React from "react";

interface blogStruct {
  title: string;
  image: string;
  date: string;
  desc: string;
}
function BlogCard(blogData: blogStruct) {
  return (
    <div className="flex flex-col gap-2 p-2">
      <Image
        src={blogData.image}
        alt={blogData.title}
        height={200}
        width={325}
      />
      <h3 className="text-light-blue font-semibold cursor-pointer hover:text-light-black duration-200 transition-all ease-linear">
        {blogData.title}
      </h3>
      <span className="text-light-black">{blogData.date}</span>
      <p className="text-light-black">{blogData.desc}</p>
    </div>
  );
}

export default BlogCard;
