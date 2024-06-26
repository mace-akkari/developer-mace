import { FaLinkedin, FaGithub } from "react-icons/fa";

const IntroSection = () => {
  const social_media = [
    {
      icon: <FaLinkedin size="50" />,
      link: "https://www.linkedin.com/in/maceakkari/",
    },
    { icon: <FaGithub size="50" />, link: "https://github.com/mace-akkari" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 gap-10 px-7 md:flex-row flex-col items-center pt-20"
    >
      <img
        src="/images/profilePic.png"
        alt="main image"
        className="w-1/2 md:w-8/12 object-cover flex-1 flex items-center justify-center h-full rounded-full md:rounded-lg"
      />

      <div className="flex-1 flex flex-col items-center md:items-start">
        <h1 className="lg:text-5xl md:text-5xl text-2xl md:leading-normal leading-10 text-custom-dark-blue font-bold">
          Mace Akkari
        </h1>
        <h3 className="lg:text-2.5xl md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-custom-dark-blue">
          FullStack Developer
        </h3>
        <button className="bg-white px-6 py-3 mt-8 rounded-full cursor-pointer">
          Contact Me
        </button>
        <ul className="mt-8 text-3xl flex text-gray-600 gap-5">
          {social_media.map((social, i) => (
            <li key={i} className="hover:text-custom-dark-blue cursor-pointer">
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
