import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FooterCol4() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="" data-aos="fade-left">
      <address className="flex flex-col gap-2">
        <h5 className="font-semibold">Contact Us</h5>
        <span>
          LG 006, DLF Grand Mall, Mehrauli Gurgaon Road, Near Sikanderpur DLF
          Phase1, Sector 28, Gurugram, Haryana - 122002
        </span>
        <span>contact@gmail.com</span>
      </address>
    </div>
  );
}

export default FooterCol4;
