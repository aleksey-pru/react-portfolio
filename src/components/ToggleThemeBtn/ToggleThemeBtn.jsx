import { useEffect, useState } from "react";
const ToggleThemeBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  return (
    <div>
      {/* <button
        onClick={toggleDarkMode}
        className={`order-9 relative flex justify-between w-[51px] h-[26px] p-[5px] rounded-full bg-[#272727] before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:block before:w-[24px] before:h-[24px] before:rounded-full before:bg-white before:transition-[left] before:duration-200 before:ease-in ${
          isDarkMode ? "before:left-[26px]" : ""
        }`}
      >
        <img src={sun} alt="Light mode" className="relative z-[9]" />
        <img src={moon} alt="Dark mode" className="relative z-[9]" />
      </button> */}
      <label className="text-gray-900 dark:text-white flex cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          onChange={toggleDarkMode}
          checked={isDarkMode}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
};

export default ToggleThemeBtn;
