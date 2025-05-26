import Project from "../../components/Project/Project";
import s from "./Projects.module.scss";
import { projects } from "../../helpers/projectList";

const Projects = () => {
  return (
    <main className={s.section}>
      <div className={s.container}>
        <h2 className={s.title_1}>Projects</h2>
        <ul className={s.projects}>
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
