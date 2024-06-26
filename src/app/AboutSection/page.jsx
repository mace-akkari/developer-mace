import AboutMe from "./aboutMe";

const About = () => {
  return (
    <section id="about" className="py-10 text-custom-dark-blue">
      <div className=" text-4xl font-semibold mt-8 flex justify-center gap-2">
        <h3>About</h3>
        <h3 className="text-custom-dark-blue">Me</h3>
      </div>
      <AboutMe />
    </section>
  );
};

export default About;
