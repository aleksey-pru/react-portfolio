import Project from "../../components/Project/Project";

import { projects } from "../../helpers/projectList";

const Projects = () => {
  return (
    <main className="bg-zinc-200 dark:bg-zinc-900 py-[70px]">
      <div className="text-zinc-900 max-w-[1200px] px-4 mx-auto">
        <h2 className="text-zinc-900 dark:text-white mb-[60px] text-[60px] font-bold leading-[1.3] text-center">
          Projects
        </h2>
        <ul className="flex justify-center flex-wrap gap-[30px]">
          {projects.map((project) => {
            return (
              <Project
                id={project.id}
                key={project.id}
                title={project.title}
                img={project.img}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
