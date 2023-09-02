import React from "react";
import logo from "/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, LucideTwitter, LinkedinIcon } from "lucide-react";

const FooterLeft = () => {
  return (
    <div className="mx-8 sm:mx-16 lg:mx-24 xl:mx-32">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" className="w-40" />
        </Link>
      </div>
      <div>
        <p className="flex text-lg mt-8 text-gray-500">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
      </div>

      <div>
        <ul className="flex gap-4 mt-8 cursor-pointer">
          <li className="flex bg-gray-300 rounded-md w-10 h-10 items-center justify-center">
            <FacebookIcon></FacebookIcon>
          </li>
          <li className="flex bg-gray-300 rounded-md w-10 h-10 items-center justify-center">
            <LucideTwitter></LucideTwitter>
          </li>
          <li className="flex bg-gray-300 rounded-md w-10 h-10 items-center justify-center">
            <LinkedinIcon></LinkedinIcon>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLeft;
