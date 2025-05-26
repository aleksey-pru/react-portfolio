import s from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";

const buildLinkClass = ({ isActive }) => {
  return clsx(
    s.navList__link,
    "text-gray-900 dark:text-white",
    isActive && s.navList__link_active
  );
};

const Navbar = () => {
  return (
    <nav className=" bg-white dark:bg-zinc-900 border-nav-border text-nav-text tracking-normal">
      <div className=" mx-auto p-5 max-w-screen-xl">
        <div className="flex justify-end items-center gap-x-7 gap-y-5 flex-wrap">
          <NavLink
            to="/"
            className="mr-auto text-gray-900 dark:text-white text-2xl font-poppins"
          >
            <strong>Freelancer</strong> portfolio
          </NavLink>
          <ToggleThemeBtn />
          <ul className={s.navList}>
            <li className="text-gray-900 dark:text-white">
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
            </li>
            <li className="text-gray-900 dark:text-white">
              <NavLink to="/projects" className={buildLinkClass}>
                Projects
              </NavLink>
            </li>
            <li className="text-gray-900 dark:text-white">
              <NavLink to="/contacts" className={buildLinkClass}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
