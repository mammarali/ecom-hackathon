import React from "react";

const FooterRight = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-8 sm:mx-16 lg:mx-24 xl:mx-32 max-[1000px]:gap-[2rem] max-[1000px]:mt-4">
      <div>
        <h2 className="text-xl font-bold text-gray-500">Company</h2>
        <ul className="flex flex-col mt-4 gap-2 text-gray-500 ">
          <li>About</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>How it Works</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-500">Support</h2>
        <ul className="flex flex-col mt-4 gap-2 text-gray-500 ">
          <li>Support Carrer</li>
          <li>24h Service</li>
          <li>PQuick Chat</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-500">Contact</h2>
        <ul className="flex flex-col mt-4 gap-2 text-gray-500 ">
          <li>Whatsapp</li>
          <li>Support 24h</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterRight;
