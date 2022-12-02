import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  interface navItemStruct {
    name: string;
    to: string;
  }
  const navList: navItemStruct[] = [
    {
      name: "Audit Service",
      to: "",
    },
    {
      name: "Pricing",
      to: "",
    },
    {
      name: "Blogs",
      to: "",
    },
    {
      name: "Resources",
      to: "",
    },
  ];
  return (
    <nav className="items-center justify-between py-4 px-7 md:flex md:px-10">
      <div className="flex mx-4 cursor-pointer items-center justify-between font-[Poppins] text-2xl font-bold text-gray-800">
        <span className="mr-1 pt-2 text-3xl text-indigo-600">
          {" "}
          <Image src={"/logo.png"} alt="" height={160} width={160} />{" "}
        </span>
        <Image
          src={"/menu-bar.png"}
          width={30}
          height={30}
          alt={"menu"}
          className="right-8 top-6 text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        />
      </div>
      <ul
        className={`md:flex transition-all duration-500 ease-in ${
          open ? "" : "hidden"
        }`}
      >
        {navList.map((navItem, index) => {
          return (
            <Link key={index} href={navItem.to}>
              <li
                key={index}
                className="py-2 md:my-0 md:ml-8 hover:text-light-blue duration-300 cursor-pointer"
              >
                {navItem.name}
              </li>
            </Link>
          );
        })}
        <div className="flex gap-3 md:gap-3 md:ml-3">
          <button className="btn-primary ">Portfolio</button>
          <button className="btn-primary">Request an Audit</button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
