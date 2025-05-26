import { useParams } from "react-router-dom";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";
import { projects } from "../../helpers/projectList";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  return (
    <main className="bg-zinc-200 dark:bg-zinc-900 py-[70px]">
      <div className="text-zinc-900 dark:text-white max-w-[1200px] mx-auto px-4">
        <div className="max-w-[865px] mx-auto flex flex-col items-center text-center">
          <h1 className="mb-[60px] text-[60px] font-bold leading-[1.3] text-[var(--title-1)]">
            {project.title}
          </h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="max-w-full mb-[40px] rounded-[10px] shadow-[var(--box-shadow)]"
          />

          <div className="mb-[30px] font-bold text-[24px] leading-[1.3]">
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
