import Image from "next/image";
import Link from "next/link";
import React from "react";

interface featureStruct{
    name: string;
    image: string;
    link: string;
  }

function FeatureCard(featureData : featureStruct) {
  return (
    <div
      className="flex flex-col p-5 justify-center items-center rounded-lg border border-[#2D83EE] hover:scale-110 duration-200 transition-all ease-linear"
      key={featureData.name}
    >
      <Image src={featureData.image} alt={featureData.name} height={200} width={200} />
      <Link href={featureData.link}>
        <div className="cursor-pointer text-light-blue font-semibold">
          Read More
        </div>
      </Link>
    </div>
  );
}

export default FeatureCard;
