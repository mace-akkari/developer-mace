import { useState } from "react";
import navList from "./NavList";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 justify-between items-center flex">
      <div className="h-20 flex items-center flex-shrink-0">
        <img
          src="/images/logo.png"
          alt="portfolio Logo"
          className="h-full w-auto"
        />
      </div>
      <menu className="h-20 items-center px-10 font-medium rounded-bl-lg hidden md:flex gap-14 text-lg bg-custom-dark-blue flex-shrink-0">
        {navList?.map((list, index) => (
          <li key={index}>
            <a
              href={list?.link}
              className="inline-block text-background-blue hover:text-white transform transition-transform duration-300 hover:scale-150"
            >
              {list?.name}
            </a>
          </li>
        ))}
      </menu>
      <BiMenu
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        className={`z-50 ${
          open ? "text-background-blue" : "text-custom-dark-blue"
        } text-3xl md:hidden m-5 transform transition-transform duration-300 hover:scale-150`}
      />
      <menu
        className={`flex flex-col justify-center gap-10 items-center text-lg md:hidden absolute w-2/3 h-screen font-medium bg-custom-dark-blue top-0 duration-300 ${
          open ? "right-0" : "right-full"
        }`}
      >
        {navList?.map((list, index) => (
          <li key={index} onClick={() => setOpen(false)}>
            <a
              href={list?.link}
              className="inline-block text-background-blue hover:text-white transform transition-transform duration-300 hover:scale-150"
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
