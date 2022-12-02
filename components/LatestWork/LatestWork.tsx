import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import WorkCard from "./WorkCard";

function LatestWork() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const workFilterCategory: string[] = [
    "Ethereum",
    "Binance SC",
    "NFT",
    "Solana",
  ];
  interface auditReportStruct {
    image: string;
    name: string;
    viewLink: string;
    downloadLink: string;
  }
  const auditReportList: auditReportStruct[] = [
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
    <div className="bg-gradient-light-blue container">
      <div className="py-4 px-3 md:px-20 flex flex-col gap-2 justify-center items-center">
        <h3 className="text-light-blue uppercase">Portfolio</h3>
        <h2 className="text-white font-semibold text-2xl">Latest Work</h2>
        <div className="flex flex-wrap gap-5">
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
            {auditReportList.map((auditReportData, index) => {
              return (
                <SwiperSlide key={index}>
                  <WorkCard {...auditReportData} />
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
