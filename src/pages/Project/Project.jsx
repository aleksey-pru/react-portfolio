import { useParams } from "react-router-dom";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";
import { projects } from "../../helpers/projectList";

import s from "./Project.module.scss";
const Project = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  return (
    <main className={s.section}>
      <div className={s.container}>
        <div className={s.projectDetails}>
          <h1 className={s.title_1}>{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className={s.projectDetailsCover}
          />

          <div className={s.projectDetailsDesc}>
            <p>{project.skills}</p>
          </div>
          {project.gitHubLink && (
            <BtnGitHub link="https://github.com/aleksey-pru" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Project;
