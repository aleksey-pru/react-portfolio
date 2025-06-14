import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className=" bg-zinc-200 dark:bg-zinc-900 py-[70px]  flex flex-col items-center gap-[40px] text-center">
        <div className=" mb-[20px] text-[40px] font-bold leading-[1.3] text-zinc-900 dark:text-white">
          My Skills
        </div>
        <ul className="max-w-2xl flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            HTML
          </li>
          <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            CSS
          </li>
          <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            SCSS
          </li>
          <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            JavaScript
          </li>
          <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            TypeScript
          </li>
          <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            ReactJS
          </li>
          <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            Redux
          </li>
          <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            TailwindCSS
          </li>
          <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            CSS Modules
          </li>
          <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            Rest API
          </li>
          <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            Vite
          </li>
          <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            Git
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
