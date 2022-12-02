import Image from "next/image";
import React, { useEffect, useState } from "react";

function FooterCol1() {
  interface languageStruct {
    name: string;
    image: string;
  }
  const languageList: languageStruct[] = [
    {
      name: "U.S.",
      image: "/usa_flag.png",
    },
    {
      name: "China",
      image: "/flag_china.png",
    },
    {
      name: "Spen",
      image: "/spen.png",
    },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState<languageStruct>(
    languageList[0]
  );
  const [showLanguage, setShowLanguage] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-2">
      <h5 className="font-bold">Parent Company</h5>
      <Image src={"/logo.png"} alt={"Logo"} width={100} height={100} />
      <span>
        Quillhash delivers enterprise grade blockchain technology to leading
        companies worldwide.
      </span>
      <div>
        <div
          className="flex gap-2 justify-between bg-white py-2 px-5 rounded-md relative z-10"
          onClick={() => setShowLanguage(!showLanguage)}
        >
          <div className="flex gap-2">
            <Image
              src={selectedLanguage.image}
              alt={"flag"}
              height={50}
              width={50}
            />
            <span className="text-black">{selectedLanguage.name}</span>
          </div>
          <div className="flex">
            <Image
              src={"/down_arrow.png"}
              alt={"down arrow"}
              height={20}
              width={20}
            />
          </div>
          <div
            className={`absolute z-20 left-0 top-12 bg-white p-2 w-full duration-300 ease-linear ${
              showLanguage ? "" : "hidden    "
            }`}
          >
            <ul className="flex flex-col gap-2">
              {languageList.map((language) => {
                return (
                  <li
                    className="flex gap-2 cursor-pointer hover:bg-slate-400 p-2 rounded-md"
                    key={language.name}
                    onClick={() => setSelectedLanguage(language)}
                  >
                    <Image
                      src={language.image}
                      alt={"flag"}
                      height={50}
                      width={50}
                    />
                    <span className="text-black">{language.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex gap-2 mt-6">
          {languageList.map((language) => {
            if (language.name != selectedLanguage.name) {
              return (
                <div key={language.name}>
                  <Image
                    src={language.image}
                    alt={language.name}
                    height={40}
                    width={40}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default FooterCol1;
