import React from "react";
import whitelogo from "@/Images/whitelogo.png";
import Image from "next/image";
import IconComponent from "./IconComponent";

const navLinks = [
  {
    title: "Our Product",
    links: ["Career", "Car", "Packages", "Features", "Priceline"],
  },
  {
    title: "Resources",
    links: [
      "Download",
      "Help Centre",
      "Partner Network",
      "Cruises",
      "Developer",
    ],
  },
  {
    title: "About Washcars",
    links: [
      "Why choose us",
      "Our Story",
      "Investor Relations",
      "Press Center",
      "Advertise",
    ],
  },
];

const Footer = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-9 lg:grid-cols-11 bg-[#051C34] pl-3 py-5 md:p-20">
      <div className="grid col-span-3">
        <Image
          src={whitelogo}
          alt="whitelogo"
          height={150}
          width={150}
          className=""
        />
        <h5 className="text-white mt-4">
          Book a Wash, Get a Instant Shine at just ₹25
        </h5>
      </div>
      {navLinks.map((nav, index) => (
        <div key={index} className={`text-gray-400 grid ${index === 0 || index === 2 ? `col-span-2`: ``} lg:col-span-2`}>
          <h2 className="text-xl font-semibold text-white pb-2">{nav.title}</h2>
          <div className="flex flex-col gap-2 text-sm">
            {nav.links.map((link, i) => (
              <p key={i}>{link}</p>
            ))}
          </div>
        </div>
      ))}
      <div className="text-gray-400  space-y-2">
        <h2 className="text-xl font-semibold text-white pb-2">Follow Us</h2>
        <div className="grid lg:col-span-2">
          <div className="flex gap-2 items-center mb-2">
            <IconComponent
              icon="ic:baseline-facebook"
              className="text-primary h-8 w-8 text-gray-500"
            />
            <IconComponent
              icon="mdi:instagram"
              className="text-primary h-8 w-8 text-gray-500"
            />
            <IconComponent
              icon="mdi:youtube"
              className="text-primary h-8 w-8 text-gray-500"
            />
          </div>
          
            <div className="flex items-center gap-2 py-1">
              <IconComponent
                icon="carbon:location"
                className="text-primary h-8 w-8 text-gray-500"
              />
              <div className="text-gray-400">
                <p>25566 Hc 1, Glenallen, </p>
                <p>Alaska, 99588, USA</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IconComponent
                icon="ion:call"
                className="text-primary h-7 w-7 text-gray-500"
              />
              <p className=" text-gray-400">+603 4784 273 12</p>
            </div>
            <div className="flex items-center gap-2">
              <IconComponent
                icon="ic:outline-mail"
                className="text-primary h-8 w-8 text-gray-500"
              />
              <p className=" text-gray-400">Washcars@gmail.com</p>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
