import Image from "next/image";
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
    <div className="items-center justify-between py-4 px-7 md:flex md:px-10">
      <div className="flex mx-4 cursor-pointer items-center justify-between font-[Poppins] text-2xl font-bold text-gray-800">
        <span className="mr-1 pt-2 text-3xl text-indigo-600">
          {" "}
          <Image src={"/logo.png"} alt="" height={160} width={160} />{" "}
        </span>
        <span
          onClick={() => setOpen(!open)}
          className=" right-8 top-6 text-3xl md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
      </div>
      <ul
        className={`left absolute z-[-1] w-full pb-12 pl-5 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
          open ? "top-20 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"
        }`}
      >
        {navList.map((navItem, index) => {
          return (
            <li key={index} className="py-2 text-xl md:my-0 md:ml-8">
              <a
                href="1"
                className="text-white duration-300 hover:text-gray-400"
              >
                {navItem.name}
              </a>
            </li>
          );
        })}
        <button className="btn-primary">Portfolio</button>
        <button className="btn-primary">Request an Audit</button>
      </ul>
    </div>
  );
}

export default Navbar;
