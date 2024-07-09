// Skills.js
import { skills } from "./skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="pb-10 pt-24 bg-custom-dark-blue mt-8 text-background-blue text-center"
    >
      <div className="flex justify-center text-4xl font-semibold gap-2">
        <h3 className="text-background-blue">My Skills</h3>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-10 mt-8">
        {skills?.map((skill, index) => (
          <li key={index} className="flex flex-col items-center">
            <div className="text-5xl">{skill.icon}</div>
            <div className="text-2xl mt-2">{skill.name}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
