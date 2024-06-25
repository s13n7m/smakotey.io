import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border border-[#232323] border-l-transparent border-r-transparent">
      <div className="flex flex-cols justify-center py-3">
        <span>
          <Image
            src="/images/site-logo-watermark.png"
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer opacity-15"
          />
        </span>
      </div>
      <p className="text-[#252525] text:5px flex flex-cols justify-center">
        © {currentYear} M. Akotey
      </p>
      <p className="text-[#252525] text-xs flex flex-cols justify-center pb-5">
        ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default Footer;
