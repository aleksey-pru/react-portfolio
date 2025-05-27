import clsx from "clsx";
import s from "../Navbar/Navbar.module.scss";
import { NavLink } from "react-router-dom";
const buildLinkClass = ({ isActive }) => {
  return clsx(
    s.navList__link,

    isActive && s.navList__link_active
  );
};
const BurgerIcon = () => {
  return (
    <div className="sm:hidden dropdown dropdown-center">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 stroke-black dark:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />{" "}
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-20 p-2 shadow bg-white dark:bg-zinc-900 text-black dark:text-white"
      >
        <li>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={buildLinkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BurgerIcon;
