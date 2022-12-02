import Image from "next/image";
import Link from "next/link";
import React from "react";

function SocialMedia() {
  interface socialMediaStruct {
    image: string;
    to: string;
  }
  const socialMediaList: socialMediaStruct[] = [
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
    <div className="flex flex-col gap-2 items-center justify-center">
      <h5 className="font-semibold">Join our Journey</h5>
      <ul className="flex gap-4">
        {socialMediaList.map((socialData: socialMediaStruct, index: number) => {
          return (
            <li className="cursor-pointer" key={index}>
              <Link href={socialData.to}>
                <Image
                  src={socialData.image}
                  alt={socialData.image}
                  height={40}
                  width={40}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialMedia;
