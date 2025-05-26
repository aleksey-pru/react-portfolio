import linkedin from "./../../img/icons/linkedIn.svg";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import twitter from "./../../img/icons/twitter.svg";
import s from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerWrapper}>
          <ul className={s.social}>
            <li className={s.socialItem}>
              <a href="#!">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className={s.socialItem}>
              <a href="#!">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className={s.socialItem}>
              <a href="#!">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className={s.socialItem}>
              <a href="#!">
                <img src={linkedin} alt="Link" />
              </a>
            </li>
          </ul>
          <div className={s.copyright}>
            <p>© 2025 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
