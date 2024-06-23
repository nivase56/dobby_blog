"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/Images/logo.png";
import Image from "next/image";
import IconComponent from "./IconComponent";
import { Dropdown, Button, Menu } from "antd";
import Link from "next/link";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Dropdown menu content
  const menu = (
    <Menu>
      <Menu.Item>
        <p>Live Offers</p>
      </Menu.Item>
      <Menu.Item>
        <p>Pricing</p>
      </Menu.Item>
      <Menu.Item>
        <Link href="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item>
        <p>Why choose us</p>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {isMobile ? (
        <motion.div
          className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-transparent w-[100%] rounded-full bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ zIndex: 1000 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image src={logo} alt="logo" className="w-36 h-9" />
          <div className="flex items-center gap-3">
          <Button className="p-1 w-28 h-9 ml-1 rounded-lg text-white text-xs bg-blue-500">
              Book watch
            </Button>
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <Button
                type="text"
                icon={<IconComponent icon="solar:hamburger-menu-outline" className="text-primary h-9 w-9 text-gray-500" />}
              />
            </Dropdown>
            
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="fixed fixed-navbar top-0 left-0 right-0 flex p-4 items-center justify-center gap-8 bg-transparent w-[70%] rounded-full ml-auto mr-auto bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image src={logo} alt="logo" className="w-44 h-9 px-3" />
          <div className="flex items-center gap-6 mr-3 text-sm">
            <p>Live Offers</p>
            <p>Pricing</p>
            <p>Blog</p>
            <p>Why choose us</p>
          </div>
          <Button className="p-2 w-32 rounded-lg text-white text-sm bg-blue-500">
            Book watch
          </Button>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
