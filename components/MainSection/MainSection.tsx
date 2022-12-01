import Image from "next/image";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

function MainSection() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })
  const deployPlatforms = [
    {
      name: "Ethereum",
      image: "/ethereum.png",
    },
    {
      name: "Binance",
      image: "/binance.png",
    },
    {
      name: "EOS",
      image: "/eos.png",
    },
    {
      name: "Polygon",
      image: "/polygon.png",
    },
    {
      name: "Solana",
      image: "/solana.png",
    },
  ];
  return (
    <div className="container py-4 px-32 mt-10">
      <div className="flex flex-col">
        <div className="flex gap-3 justify-between items-center">
          <div data-aos="fade-right">
            <Image
              src={"/main_section.jpg"}
              alt={"main"}
              width={900}
              height={900}
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="fade-left">
            <h4 className="text-light-blue">Service</h4>
            <h3 className="text-light-black font-semibold text-2xl">
              Smart Contract Auditing
            </h3>
            <p className="text-light-black">
              Our Audit Process for smart contract is based on the comprehensive
              approach we follow to investigate the code for security flaws and
              potential vulnerabilities. Ethereum Polygon BSC Solana EOS
            </p>
            <div className="flex flex-col gap-2">
              {deployPlatforms.map((deployPlatform) => {
                return (
                  <div className="flex gap-2">
                    <Image
                      src={deployPlatform.image}
                      alt={deployPlatform.name}
                      width={25}
                      height={25}
                    />
                    <span className="text-light-black">
                      {deployPlatform.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-between items-center">
          <div className="flex flex-col gap-1" data-aos="fade-right">
            <h4 className="text-light-blue">Service</h4>
            <h3 className="text-light-black font-semibold text-2xl">
              Blockchain Penetration Testing
            </h3>
            <p className="text-light-black">
              QuillAudits proven strategy to tackle vulnerabilities specific to
              blockchain technology comes with a mix-blend of conventional
              pentesting approach and dynamic blockchain analysis.
            </p>
          </div>
          <div data-aos="fade-left">
            <Image
              src={"/meeting-6004997_640.png"}
              alt={"main"}
              width={700}
              height={700}
            />
          </div>
        </div>
        <div className="flex gap-3 justify-between items-center">
          <div data-aos="fade-right">
            <Image src={"/part_2.jpg"} alt={"main"} width={900} height={900} />
          </div>
          <div className="flex flex-col gap-1" data-aos="fade-left">
            <h4 className="text-light-blue">Service</h4>
            <h3 className="text-light-black font-semibold text-2xl">
              Due Diligence
            </h3>
            <p className="text-light-black">
              QuillAudits acknowledges the significant threats involved in smart
              contracts, which can lead to many critical possibilities. DeFi Due
              Diligence NFT Due Diligence Rug Pull Due Diligence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
