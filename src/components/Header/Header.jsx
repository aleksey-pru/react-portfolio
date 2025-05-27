import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Header = () => {
  const el = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    const firstTyped = new Typed(el.current, {
      strings: ["Hi, my name is <i>Oleksii</i>"],
      typeSpeed: 50,
      showCursor: false,
      onComplete: () => {
        new Typed(secondRef.current, {
          strings: ["a frontend developer"],
          typeSpeed: 50,
          showCursor: true,
        });
      },
    });

    return () => {
      firstTyped.destroy();
    };
  }, []);
  return (
    <header className="min-h-screen flex items-center justify-center text-black bg-[radial-gradient(46%_50%_at_50%_29.6%,#f5f5f5_0%,#d0d0d0_100%)] dark:text-white dark:bg-[radial-gradient(46%_50%_at_50%_29.6%,#1d1d1f_0%,rgb(13,13,13)_100%)]">
      <div className="text-zinc-900 dark:text-white px-4 max-w-[660px] text-center">
        <div className="avatar">
          <div className="ring-black dark:ring-white ring-offset-base-100 w-34 rounded-full ring-2 ring-offset-2">
            <img src="/photo_2025-05-27_15-25-04.jpg" alt="" />
          </div>
        </div>
        <h1 className="mb-5 text-4xl leading-snug">
          <span ref={el}></span>
          <br />
          <span ref={secondRef}></span>
        </h1>
        <div className="mb-10 text-lg leading-[1.333]">
          <p>with passion for learning and creating.</p>
        </div>
        <div className="inline-block">
          <button className="btn btn-neutral btn-outline">Download CV</button>
        </div>
        <div className="divider"></div>

        <section>
          <h1 className="mb-5 text-4xl leading-snug">About Me</h1>
          <p>
            Frontend Developer with a strong foundation in HTML, CSS,
            JavaScript, and modern web technologies. Experienced in creating
            responsive and adaptive web applications, with a focus on clean
            design and usability. Skilled in Git, REST APIs, and Vite, and
            actively expanding knowledge in React.js, TypeScript, and Node.js
            through the GoIT FullStack Developer program. Demonstrated ability
            to work in both team-based and independent projects, contributing to
            the development of landing pages and interactive UI components.
            Strong analytical skills, problem-solving mindset, and adaptability.
          </p>
        </section>
      </div>
    </header>
  );
};

export default Header;
