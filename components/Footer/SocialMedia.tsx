import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SocialMedia() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const socialMediaList = [
    {
      image: "/facebook.svg",
      to: "/",
    },
    {
      image: "/discord.svg",
      to: "/",
    },
    {
      image: "/instagram.svg",
      to: "/",
    },
    {
      image: "/linkdin.svg",
      to: "/",
    },
  ];
  return (
    <div className="flex flex-col gap-2 items-center justify-center" data-aos="zoom-in">
      <h5 className="font-semibold">Join our Journey</h5>
      <ul className="flex gap-4">
        {socialMediaList.map((socialData) => {
          return (
            <li className="cursor-pointer">
              <Image
                src={socialData.image}
                alt={socialData.image}
                height={40}
                width={40}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialMedia;
