import Image from "next/image";
import Link from "next/link";
import React from "react";

interface auditReportStruct {
    image: string;
    name: string;
    viewLink: string;
    downloadLink: string;
  }
function WorkCard(auditReportData: auditReportStruct) {
  
  return (
    <div className="flex flex-col gap-2 py-2 px-0 md:px-14 items-center justify-center">
      <Image src={auditReportData.image} alt="" height={150} width={150} />
      <h4>{auditReportData.name}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Link href={auditReportData.viewLink}>
          <div className="bg-transparent text-center border border-[#FFFFFF4B] rounded-md px-2 md:px-4 py-2 hover:bg-light-blue duration-300 transition-all ease-in">
            View
          </div>
        </Link>
        <Link href={auditReportData.downloadLink}>
          <div className="bg-transparent border border-[#FFFFFF4B] rounded-md px-2 md:px-4 py-2 hover:bg-light-blue duration-300 transition-all ease-in">
            Download
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WorkCard;
