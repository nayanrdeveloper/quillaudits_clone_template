import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

function Featured() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const featureList = [
    {
      name: "Coincrunch",
      image: "/Coincrunch_logo.png",
      link: "/",
    },
    {
      name: "CoinInteligence",
      image: "/ctofficial.png",
      link: "/",
    },
    {
      name: "Hackernoon",
      image: "/hackernoon.png",
      link: "/",
    },
    {
      name: "Invest Blockchain",
      image: "/invest_blockchain.png",
      link: "/",
    },
    {
      name: "Money Control",
      image: "/monet_control.png",
      link: "/",
    }
  ];
  return (
    <div className="container" data-aos="fade-up">
      <div className="py-4 px-3 md:px-20 flex flex-col gap-2 justify-center items-center">
        <h3 className="text-light-blue uppercase">MENTIONS</h3>
        <h2 className="text-light-black font-semibold text-2xl">
          As Featured In
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((feature) => {
            return (
              <div
                className="flex flex-col p-5 justify-center items-center rounded-lg border border-[#2D83EE]"
                key={feature.name}
              >
                <Image
                  src={feature.image}
                  alt={feature.name}
                  height={200}
                  width={200}
                />
                <Link href={feature.link}>
                  <div className="cursor-pointer text-light-blue font-semibold">
                    Read More
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Featured;
