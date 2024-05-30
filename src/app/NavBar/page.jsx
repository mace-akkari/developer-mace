import navList from "./NavList";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
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
      <BiMenu className="text-3xl md:hidden m-5" />
    </nav>
  );
};

export default Navbar;
