import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

function HeroSection() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  interface headerDataStruct {
    amount: string;
    desc: string;
  }
  const headerData: headerDataStruct[] = [
    {
      amount: "$12.8B",
      desc: "Amount Lost To DeFi Hacks in 2021",
    },
    {
      amount: "600K",
      desc: "Lines of Codes Secured by QuillAudits",
    },
    {
      amount: "$14.6B",
      desc: "Amount Protected By QuillAudits",
    },
  ];
  return (
    <div className="container py-4 px-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-28 items-center">
        <div className="flex flex-col flex-wrap gap-8" data-aos="fade-up-right">
          <h3 className="font-bold text-3xl opacity-70">
            Emerging Web3 Ventures Trust Our Smart Contract Audits and Diligence
            Services
          </h3>
          <p className="font-semibold text-2xl opacity-70">
            QuillAudits, Making web3 a safer place
          </p>
          <div className="flex gap-2 flex-wrap">
            <button className="btn-primary opacity-80">
              Request Free Quote
            </button>
            <button className="btn-transparent">Explore Services</button>
          </div>
        </div>
        <div data-aos="fade-up-left">
          <Image
            src={"/Work_7.jpg"}
            width={400}
            height={300}
            alt="cube"
            className="opacity-80 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-5 mt-10">
        {headerData.map((data, index) => {
          return (
            <div key={index} className="flex justify-items-end gap-5  md:w-72">
              <h3 className="text-2xl text-[#2D83EE] font-semibold">
                {data.amount}
              </h3>
              <span>{data.desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroSection;
