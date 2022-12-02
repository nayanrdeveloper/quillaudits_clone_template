import Image from "next/image";
import React from "react";

interface testimonialStruct {
  name: string;
  image: string;
  desc: string;
  user: string;
  userPosition: string;
}
function TestimonialCard(testimonial: testimonialStruct) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center p-2">
      <div className="flex gap-2 justify-center items-center">
        <Image src={testimonial.image} alt="" width={60} height={60} className="w-5 h-5 md:w-20 md:h-20" />
        <h3 className="text-black font-semibold md:text-2xl">
          {testimonial.name}
        </h3>
      </div>
      <p className="text-[#391400]">{testimonial.desc}</p>
      <span className="text-[#391400] font-bold">{testimonial.user}</span>
      <span className="text-[#391400]">{testimonial.userPosition}</span>
    </div>
  );
}

export default TestimonialCard;
