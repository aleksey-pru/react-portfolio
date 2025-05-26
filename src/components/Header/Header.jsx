import s from "./Header.module.scss";
const Header = () => {
  return (
    <header className="min-h-screen flex items-center justify-center text-black bg-[radial-gradient(46%_50%_at_50%_29.6%,#f5f5f5_0%,#d0d0d0_100%)] dark:text-white dark:bg-[radial-gradient(46%_50%_at_50%_29.6%,#1d1d1f_0%,rgb(13,13,13)_100%)]">
      <div className="text-zinc-900 dark:text-white px-4 max-w-[660px] text-center">
        <h1 className="mb-5 text-4xl font-bold leading-snug">
          <strong>
            Hi, my name is <em>Oleksii</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="mb-10 text-lg leading-[1.333]">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="#!"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
