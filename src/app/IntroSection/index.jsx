import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const IntroSection = () => {
  const social_media = [
    {
      icon: <FaLinkedin size="50" className="text-background-text-color" />,
      link: "https://www.linkedin.com/in/maceakkari/",
    },
    {
      icon: <FaGithub size="50" className="text-background-text-color" />,
      link: "https://github.com/mace-akkari",
    },
    {
      icon: <MdEmail size="50" className="text-background-text-color" />,
      link: "mailto:developer.mace+portfolio@gmail.com",
    },
  ];

  return (
    <section
      id="details"
      className="flex pt-16 gap-10 px-7 md:min-h-screen md:flex-row flex-col items-center"
    >
      <img
        src="/images/profilePic.png"
        alt="main image"
        className="w-80 h-80 md:w-3/4 md:h-auto object-cover rounded-full md:rounded-lg border border-white mt-8 md:mt-0"
      />
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h1 className="lg:text-5xl md:text-5xl text-4xl md:leading-normal leading-10 text-background-text-color font-bold">
          Mace Akkari
        </h1>
        <h3 className="lg:text-2.5xl text-2xl md:leading-normal leading-5 mt-4 font-bold text-background-text-color">
          FullStack Developer
        </h3>
        <ul className="mt-8 text-3xl flex text-gray-600 gap-5">
          {social_media.map((social, i) => (
            <li key={i} className="hover:text-#ffffff cursor-pointer">
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
