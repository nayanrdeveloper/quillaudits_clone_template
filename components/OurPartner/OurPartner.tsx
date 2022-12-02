import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OurPartner() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const partnerList = [
    "/partner.png",
    "/partner.png",
    "/partner.png",
    "/partner.png",
    "/partner.png",
    "/partner.png",
  ];
  return (
    <div className="py-4 px-3 md:px-20 container" data-aos="fade-up-right">
      <div className="flex flex-col flex-wrap gap-3">
        <h3 className="text-light-blue uppercase">Clients</h3>
        <h2 className="text-black font-semibold text-2xl">Partners</h2>
        <div className="grid grid-cols-3 gap-3 md:gap-0 md:grid-cols-6">
          {partnerList.map((partner, index) => {
            return (
              <div key={index}>
                <Image src={partner} alt="" height={100} width={100} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurPartner;
