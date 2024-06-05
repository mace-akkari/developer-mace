import { FaLinkedin, FaGithub } from "react-icons/fa";

const IntroSection = () => {
  const social_media = [{ icon: <FaLinkedin /> }, { icon: <FaGithub /> }];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 gap-10 px-7 md:flex-row flex-col items-center pt-20"
    >
      <img
        src="/images/profilePic.png"
        alt="main image"
        className="md:w-8/12 object-cover flex-1 flex items-center justify-center h-full rounded-full md:rounded-lg"
      />

      <div className="flex-1 flex flex-col items-center md:items-start">
        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-custom-dark-blue font-bold">
          Mace Akkari
        </h1>
        <h3 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-custom-dark-blue">
          FullStack Developer
        </h3>
        <button className="bg-white px-6 py-3 mt-8 rounded-full cursor-pointer">
          Contact Me
        </button>
        <ul className="mt-8 text-3xl flex text-gray-600 gap-5">
          {social_media?.map((icon, i) => (
            <li key={i} className="hover:text-custom-dark-blue cursor-pointer">
              {icon?.icon}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
