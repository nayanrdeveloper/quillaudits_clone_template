import React from "react";

function Audit() {
  return (
    <div className="py-4 px-3 md:px-20 container mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col flex-wrap gap-3">
          <h3 className="text-light-blue uppercase">WHY ARE WE HERE</h3>
          <h2 className="text-light-black font-semibold text-2xl">
            What is the Need of Smart Contract Audit?
          </h2>
          <button className="btn-primary w-44 hover:text-black">
            Talk to an Expert
          </button>
        </div>
        <div>
          <div className="flex flex-col container px-1 md:px-10">
            <div className="border text-light-blue border-light-blue p-3 items-center text-center rounded-md ml-20 w-full hover:bg-[#4A4BEE] hover:text-white duration-300 transition-all ease-linear"> 
              <p className="">
                Smart Contract Audits Build Social Authority
              </p>
            </div>
            <div className="border text-light-blue border-light-blue p-3 items-center text-center rounded-md ml-14 w-full hover:bg-[#4A4BEE] hover:text-white duration-300 transition-all ease-linear">
              <p className="">
                Only 52.7% of the Exploited Web3 Projects were Audited.
              </p>
            </div>
            <div className="border text-light-blue border-light-blue p-3 items-center text-center rounded-md w-full hover:bg-[#4A4BEE] hover:text-white duration-300 transition-all ease-linear">
              <p className="">
                47.3% of the Web3 Hacks in First Half of 2022 were due to Smart
                Contract Vulnerabilities.
              </p>
            </div>
            <div className="border text-light-blue border-light-blue p-3 items-center text-center rounded-md ml-14 w-full hover:bg-[#4A4BEE] hover:text-white duration-300 transition-all ease-linear">
              <p className="">
                Helps in Earning Users/Investors Trust for the Product
              </p>
            </div>
            <div className="border text-light-blue border-light-blue p-3 items-center text-center rounded-md ml-20 w-full hover:bg-[#4A4BEE] hover:text-white duration-300 transition-all ease-linear">
              <p className="">
                Helps in Earning Users/Investors Trust for the Product
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audit;
