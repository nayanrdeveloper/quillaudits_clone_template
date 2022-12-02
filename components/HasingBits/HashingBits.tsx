import Image from "next/image";
import React, { useEffect } from "react";


function HashingBits() {
  return (
    <div className="py-10 px-3 md:px-20 container mt-10 bg-gradient-light-blue relative z-10">
      <div className="flex flex-wrap justify-between gap-5">
        <div className="flex flex-col gap-3">
          <Image
            src={"/hasing_bits.svg"}
            alt={"hashing bits"}
            height={200}
            width={200}
          />
          <h4 className="font-medium">
            DeFi and NFT Hacks, CTFs, and Blockchain Security Insights Straight
            to your Inbox.
          </h4>
          <p>
            Explore our weekly newsletter: HashingBits. Stay updated on
            everything we’re publishing. Stand a step ahead.
          </p>
          <input
            type={"email"}
            className="rounded-lg h-10 bg-[#0000004D] py-2 px-4 md:w-96"
            placeholder="youremail@gmail.com"
          />
          <div className="flex gap-2 items-center">
            <Image src={"/check.png"} width={25} height={25} alt={"correct"} />
            <p className="">
              Your email has been successfully registered, headlines will be
              sent to you soon.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={"/email.svg"} alt={"email"} width={300} height={300} className='absolute top-3 right-35 z-20 opacity-5' />
          <Image src={"/email.svg"} alt={"email"} width={200} height={200} />
        </div>
      </div>
    </div>
  );
}

export default HashingBits;
