import React from "react";
import FeatureCard from "./FeatureCard";

function Featured() {
  interface featureStruct {
    name: string;
    image: string;
    link: string;
  }
  const featureList: featureStruct[] = [
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
    },
  ];
  return (
    <div className="container">
      <div className="py-4 px-3 md:px-20 flex flex-col gap-2 justify-center items-center">
        <h3 className="text-light-blue uppercase">MENTIONS</h3>
        <h2 className="text-light-black font-semibold text-2xl">
          As Featured In
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((featureData) => {
            return <FeatureCard key={featureData.name} {...featureData} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Featured;
