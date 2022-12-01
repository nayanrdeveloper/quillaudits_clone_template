import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FooterCol3() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const col2List = [
    {
      name: "Smart Contract Auditing",
      to: "/",
    },
    {
      name: "Blockchain Pen Testing",
      to: "/",
    },
    {
      name: "Due Diligence",
      to: "/",
    },
  ];
  return (
    <div className="flex flex-col gap-2" data-aos="fade-left">
      <h5 className="font-semibold">Service</h5>
      <ul className="flex flex-col gap-2">
        {col2List.map((colo1Data) => {
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

export default FooterCol3;
