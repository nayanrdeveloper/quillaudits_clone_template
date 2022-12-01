import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FooterCol2() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const col1List = [
    {
      name: "Careers",
      to: "/",
    },
    {
      name: "Courses",
      to: "/",
    },
    {
      name: "Blockchain Security CTF",
      to: "/",
    },
    {
      name: "QuillAudits Partner Program",
      to: "/",
    },
  ];
  return (
    <div className="flex flex-col gap-2" data-aos="fade-right">
      <h5 className="font-semibold">Explore</h5>
      <ul className="flex flex-col gap-2">
        {col1List.map((colo1Data) => {
          return (
            <li className="cursor-pointer" key={colo1Data.name}>
              <Link href={colo1Data.to}>{colo1Data.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterCol2;
