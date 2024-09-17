"use client";

import { useState } from "react";
import navList from "./NavList";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 flex items-center justify-between border border-white bg-custom-dark-blue">
      <div className="h-20 flex items-center flex-shrink-0">
        <img
          src="/images/logo.png"
          alt="portfolio Logo"
          className="h-full w-auto"
        />
      </div>
      <menu className="h-20 items-center px-10 font-medium hidden md:flex gap-14 text-lg bg-custom-dark-blue flex-grow justify-end">
        {navList?.map((list, index) => (
          <li key={index} className="list-none">
            <a
              href={list?.link}
              target={list?.target ? list?.target : "_self"}
              className="inline-block text-custom-text-color transform transition-transform duration-300 hover:scale-150"
            >
              {list?.name}
            </a>
          </li>
        ))}
      </menu>
      <BiMenu
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        className={`z-50 text-white text-3xl md:hidden m-2 transform transition-transform duration-300 hover:scale-150`}
      />
      <menu
        className={`flex flex-col justify-start gap-10 items-center text-lg md:hidden absolute w-2/3 h-screen font-medium bg-custom-dark-blue top-0 duration-300 border-l border-r border-b border-white pt-20 ${
          open ? "right-0" : "right-full"
        }`}
      >
        {navList?.map((list, index) => (
          <li key={index} className="list-none" onClick={() => setOpen(false)}>
            <a
              href={list?.link}
              target={list?.target ? list?.target : "_self"} // Handle target for new tab (CV)
              className="inline-block text-custom-text-color hover:text-white transform transition-transform duration-300 hover:scale-150"
            >
              {list?.name}
            </a>
          </li>
        ))}
      </menu>
    </nav>
  );
};

export default Navbar;
