import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-200 dark:bg-zinc-900 py-[60px] pb-[50px]">
      <div className="text-zinc-900 dark:text-white max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col items-center gap-[27px]">
          <ul className="flex items-center gap-[30px] max-[620px]:gap-[20px]">
            <li className="w-[32px] max-[620px]:w-[28px]">
              <a href="https://github.com/aleksey-pru">
                <FaGithub size={38} />
              </a>
            </li>
            <li className="w-[32px] max-[620px]:w-[28px]">
              <a href="https://www.linkedin.com/in/oleksii-pruzhanskyi-07231a205">
                <FaLinkedin size={38} />
              </a>
            </li>
            <li className="w-[32px] max-[620px]:w-[28px]">
              <a href="https://t.me/soovven">
                <FaTelegramPlane size={38} />
              </a>
            </li>
          </ul>
          <div className="text-[16px] text-center">
            <p>© 2025 Oleksii. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
