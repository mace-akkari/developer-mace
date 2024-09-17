import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="h-full w-full p-4 bg-custom-dark-blue rounded-xl">
      <Image
        src={project.img}
        alt={project.name}
        className="rounded-lg w-full h-auto"
      />
      <h3 className="text-lg md:text-2xl lg:text-3xl text-custom-text-color my-4">
        {project.name}
      </h3>
      <div className="flex md:flex-row flex-col items-center justify-center gap-3">
        <a
          href={project.github_link}
          target="_blank"
          rel="noreferrer"
          className="text-lg md:text-xl lg:text-2xl text-background-text-color bg-background-blue rounded-full px-2 py-1 flex w-32 justify-center border border-white"
        >
          Github
        </a>
        <a
          href={project.demo_link}
          rel="noreferrer"
          target="_blank"
          className="text-lg md:text-xl lg:text-2xl text-background-text-color flex rounded-full bg-background-blue px-2 py-1 w-32 justify-center border border-white"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
