import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="h-full w-full p-4 bg-custom-dark-blue rounded-xl">
      <Image
        src={project.img}
        alt={project.name}
        className="rounded-lg w-full h-auto"
      />
      <h3 className="text-xxl text-background-blue my-4">{project.name}</h3>
      <div className="flex md:flex-row flex-col items-center justify-center gap-3">
        <a
          href={project.github_link}
          target="_blank"
          rel="noreferrer"
          className="text-custom-dark-blue bg-background-blue rounded-full px-2 py-1 flex w-32 justify-center"
        >
          Github
        </a>
        <a
          href={project.demo_link}
          rel="noreferrer"
          target="_blank"
          className="text-custom-dark-blue flex rounded-full bg-background-blue px-2 py-1 w-32 justify-center"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
