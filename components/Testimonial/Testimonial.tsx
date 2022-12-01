import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
function Testimonial() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const testimonialList = [
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
    <div className="py-4 px-20 container mt-10" data-aos="zoom-out-right">
      <div className="flex flex-col flex-wrap gap-3">
        <h3 className="text-light-blue uppercase">Testimonial</h3>
        <div className="flex justify-between">
          <span className="text-black font-semibold text-2xl">
            What our Clients are saying
          </span>
          <button className="btn-primary">Read More</button>
        </div>
        <div className="mt-5 container">
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
                  <div
                    key={index}
                    className="flex flex-col gap-2 items-center justify-center p-2"
                  >
                    <div className="flex gap-2 justify-center items-center">
                      <Image
                        src={testimonial.image}
                        alt=""
                        width={60}
                        height={60}
                      />
                      <h3 className="text-black font-semibold text-2xl">
                        {testimonial.name}
                      </h3>
                    </div>
                    <p className="text-[#391400]">{testimonial.desc}</p>
                    <span className="text-[#391400] font-bold">
                      {testimonial.user}
                    </span>
                    <span className="text-[#391400]">
                      {testimonial.userPosition}
                    </span>
                  </div>
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
