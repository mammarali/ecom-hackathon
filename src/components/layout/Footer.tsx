import React from "react";
import FooterLeft from "../ui/FooterLeft";
import FooterRight from "../ui/FooterRight";
import FooterBottom from "../ui/FooterBottom";

const Footer = () => {
  return (
    <div className="pt-[4rem] pb-0.5 ">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <FooterLeft></FooterLeft>
        <FooterRight></FooterRight>
      </div>

      <FooterBottom></FooterBottom>
    </div>
  );
};

export default Footer;
