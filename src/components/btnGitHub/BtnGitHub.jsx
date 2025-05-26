import gitHubIcon from "./gitHub-black.svg";
import s from "./BtnGitHub.module.scss";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" className={s.btnOutline}>
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
