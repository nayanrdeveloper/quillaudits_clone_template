import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  interface testimonialStruct{
    name: string;
    image: string;
    desc: string;
    user: string;
    userPosition: string;
  }
  const testimonialList : testimonialStruct[] = [
    {
      name: "StackOS",
      image: "/cube.png",
      desc: "Very professional and timed delivery. Also very prompt in responses and queries.",
      user: "Vishnu Korde",
      userPosition: "CEO, StackOS",
    },
    {
      name: "StackOS",
      image: "/cube.png",
      desc: "Very professional and timed delivery. Also very prompt in responses and queries.",
      user: "Vishnu Korde",
      userPosition: "CEO, StackOS",
    },
    {
      name: "StackOS",
      image: "/cube.png",
      desc: "Very professional and timed delivery. Also very prompt in responses and queries.",
      user: "Vishnu Korde",
      userPosition: "CEO, StackOS",
    },
    {
      name: "StackOS",
      image: "/cube.png",
      desc: "Very professional and timed delivery. Also very prompt in responses and queries.",
      user: "Vishnu Korde",
      userPosition: "CEO, StackOS",
    },
    {
      name: "StackOS",
      image: "/cube.png",
      desc: "Very professional and timed delivery. Also very prompt in responses and queries.",
      user: "Vishnu Korde",
      userPosition: "CEO, StackOS",
    },
  ];
  return (
    <div className="py-4 px-3 md:px-20 container mt-10">
      <div className="flex flex-col flex-wrap gap-3 md:gap-3">
        <h3 className="text-light-blue uppercase">Testimonial</h3>
        <div className="flex flex-wrap gap-3 md:gap-0 justify-between">
          <span className="text-black font-semibold text-2xl">
            What our Clients are saying
          </span>
          <button className="btn-primary hover:text-light-black duration-200 transition-all ease-linear">Read More</button>
        </div>
        <div className="mt-5  container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            navigation
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {testimonialList.map((testimonial, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
