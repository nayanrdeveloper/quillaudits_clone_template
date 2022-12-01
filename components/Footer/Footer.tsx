import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterCol1 from "./FooterCol1";
import FooterCol2 from "./FooterCol2";
import FooterCol3 from "./FooterCol3";
import FooterCol4 from "./FooterCol4";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <div className="py-10 px-20 container bg-[#28293E]">
      <div className="grid grid-cols-4 gap-5">
        <FooterCol1 />
        <FooterCol2 />
        <FooterCol3 />
        <FooterCol4 />
      </div>
      <SocialMedia />
      <div className="text-center p-2 mt-5 border-t border-[#3A3C56]"> 
        <p className="mt-5">
          All Rights Reserved. © Copyright 2022. QuillHash Technologies Private
          Limited
        </p>
      </div>
    </div>
  );
}

export default Footer;
