import Image from "next/image";
import React, { useEffect } from "react";


function HeroSection() {
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
    <div className="container py-4 px-3 md:px-20 mt-0 md:mt-10">
      <div className="grid grid-cols-1 gap-0 md:gap-3 md:grid-cols-2 md:space-x-28 items-center">
        <div className="flex flex-col flex-wrap gap-8">
          <h3 className="font-bold text-3xl opacity-70">
            Emerging Web3 Ventures Trust Our Smart Contract Audits and Diligence
            Services
          </h3>
          <p className="font-semibold text-2xl opacity-70">
            QuillAudits, Making web3 a safer place
          </p>
          <div className="flex gap-3 md:gap-2">
            <button className="btn-primary opacity-80">
              Request Free Quote
            </button>
            <button className="btn-transparent">Explore Services</button>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <Image
            src={"/Work_7.jpg"}
            width={400}
            height={300}
            alt="cube"
            className="opacity-80 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 items-center md:grid-cols-3 md:gap-5 mt-10">
        {headerData.map((data, index) => {
          return (
            <div key={index} className="flex justify-center items-center gap-5">
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
