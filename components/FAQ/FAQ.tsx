import Image from "next/image";
import React, { useEffect, useState } from "react";


function FAQ() {
  const [selectedAccordion, setSelectedAccordion] = useState<number>(0);
  const faqList = [
    {
      question: "What is smart contract security?",
      answer:
        "Smart Contract Security is a set of best practices to identify bugs & vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.",
      index: 0,
    },
    {
      question: "Are smart contracts vulnerable?",
      answer:
        "Smart Contract Security is a set of best practices to identify bugs & vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.",
      index: 1,
    },
    {
      question: "What is a smart contract audit?",
      answer:
        "Smart Contract Security is a set of best practices to identify bugs & vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.",
      index: 2,
    },
    {
      question: "Why do smart contracts fail?",
      answer:
        "Smart Contract Security is a set of best practices to identify bugs & vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.",
      index: 3,
    },
  ];
  return (
    <div className="py-4 px-3 md:px-20 container mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="flex flex-col gap-3">
          <h3 className="text-light-blue uppercase">FAQ</h3>
          <p className="text-[#391400] font-bold text-2xl">
            Frequently Asked Questions
          </p>
          <p className="text-[#391400]">
            Visit our help center to clear out any second thoughts that you may
            have regarding our services.
          </p>
          <button className="btn-primary w-36 hover:text-black">Contact Us</button>
        </div>
        <div className="flex flex-col mt-5 md:mt-0">
          {faqList.map((faqData, index) => {
            return (
              <div
                className="p-4 flex flex-col gap-2 border border-[#2D83EE]"
                key={index}
              >
                <div className="flex md:justify-between">
                  <h5 className="text-[#391400] font-semibold text-2xl">
                    {faqData.question}
                  </h5>
                  <Image
                    src={"/down_aero.png"}
                    alt="down_aero"
                    height={30}
                    width={30}
                    className={`cursor-pointer duration-300 w-10 h-10 ${index === selectedAccordion ? 'rotate-180' : ''}`}
                    onClick={() => setSelectedAccordion(index)}
                  />
                </div>
                <p
                  className={`text-[#391400] mt-3 duration-200 transition-all ease-linear ${
                    index === selectedAccordion ? "" : "hidden"
                  }`}
                >
                  {faqData.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
