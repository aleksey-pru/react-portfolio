import Header from "../../components/Header/Header";
import s from "./Home.module.scss";
const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-zinc-900 py-[70px]">
        <div className="mx-auto px-[15px] max-w-[1200px]">
          <ul className="text-zinc-900 dark:text-white mx-auto max-w-[570px] flex flex-col items-center gap-[40px] text-center">
            <li className="text-[18px] leading-[1.5]">
              <h2 className=" mb-[20px] text-[40px] font-bold leading-[1.3]">
                Frontend
              </h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </p>
            </li>
            <li className="text-[18px] leading-[1.5]">
              <h2 className=" mb-[20px] text-[40px] font-bold leading-[1.3]">
                Backend
              </h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
