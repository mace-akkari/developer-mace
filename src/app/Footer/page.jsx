import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-custom-dark-blue text-white py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-center text-center md:text-left">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 md:w-1/3">
          <h3 className="text-xl font-semibold">Mace Akkari</h3>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex justify-center w-full md:w-1/3 mb-4 md:mb-0">
          <img
            src="/images/footerLogo.png"
            alt="Logo"
            className="w-12 h-auto"
          />
        </div>

        <ul className="flex justify-center gap-6 md:w-1/3 mb-4 md:mb-0">
          <li>
            <a
              href="https://www.linkedin.com/in/maceakkari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size="50" className="hover:text-gray-400" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mace-akkari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="50" className="hover:text-gray-400" />
            </a>
          </li>
          <li>
            <a
              href="mailto:developer.mace+portfolio@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail size="50" className="hover:text-gray-400" />
            </a>
          </li>
        </ul>
      </div>

      <div className="text-lg mt-4 text-center w-full">
        <a href="#top" className="hover:text-gray-400">
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
