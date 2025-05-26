import { Link } from "react-router-dom";
import s from "./Project.module.scss";

const Project = ({ title, img, id }) => {
  return (
    <li className={s.project}>
      <Link to={`/project/${id}`}>
        <img src={img} alt="Project img" className={s.projectImg} />
        <h3 className={s.projectTitle}>{title}</h3>
      </Link>
    </li>
  );
};

export default Project;
