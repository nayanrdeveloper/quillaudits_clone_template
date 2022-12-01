import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css"; 

function LatestWork() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const workFilterCategory = ["Ethereum", "Binance SC", "NFT", "Solana"];
  const auditReportList = [
    {
      image: "/audit_report.png",
      name: "StackOS Audit Report",
      viewLink: "",
      downloadLink: "",
    },
    {
      image: "/audit_report.png",
      name: "StackOS Audit Report",
      viewLink: "",
      downloadLink: "",
    },
    {
      image: "/audit_report.png",
      name: "StackOS Audit Report",
      viewLink: "",
      downloadLink: "",
    },
    {
      image: "/audit_report.png",
      name: "StackOS Audit Report",
      viewLink: "",
      downloadLink: "",
    },
    {
      image: "/audit_report.png",
      name: "StackOS Audit Report",
      viewLink: "",
      downloadLink: "",
    },
    {
      image: "/audit_report.png",
      name: "StackOS Audit Report",
      viewLink: "",
      downloadLink: "",
    },
  ];
  return (
    <div className="bg-gradient-light-blue container" data-aos="fade-up">
      <div className="py-4 px-20 flex flex-col gap-2 justify-center items-center">
        <h3 className="text-light-blue uppercase">Portfolio</h3>
        <h2 className="text-white font-semibold text-2xl">Latest Work</h2>
        <div className="flex gap-5">
          {workFilterCategory.map((category, index) => {
            return (
              <div
                key={index}
                className={`py-2 px-4 rounded-3xl border border-[#E3E3E3] shadow-filter hover:bg-light-blue duration-300 hover:border-transparent cursor-pointer ${
                  category === selectedCategory
                    ? "bg-light-blue border-transparent"
                    : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </div>
            );
          })}
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
            {auditReportList.map((auditReport, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-2 py-2 px-14 items-center justify-center w-96 h-96">
                    <Image
                      src={auditReport.image}
                      alt=""
                      height={150}
                      width={150}
                    />
                    <h4>{auditReport.name}</h4>
                    <div className="flex gap-4">
                      <Link href={auditReport.viewLink}>
                        <div className="bg-transparent border border-[#FFFFFF4B] rounded-md px-4 py-2">
                          View
                        </div>
                      </Link>
                      <Link href={auditReport.downloadLink}>
                        <div className="bg-transparent border border-[#FFFFFF4B] rounded-md px-4 py-2">
                          Download
                        </div>
                      </Link>
                    </div>
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

export default LatestWork;
