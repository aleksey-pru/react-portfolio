import project01 from "./../img/projects/Screenshot 2025-05-29 104412.png";
import project01Big from "./../img/projects/Screenshot 2025-05-29 104412.png";
import project02 from "./../img/projects/Screenshot 2025-05-29 104439.png";
import project02Big from "./../img/projects/Screenshot 2025-05-29 104439.png";
import project03 from "./../img/projects/Screenshot 2025-05-29 104456.png";
import project03Big from "./../img/projects/Screenshot 2025-05-29 104456.png";
import project04 from "./../img/projects/Screenshot 2025-05-29 104513.png";
import project04Big from "./../img/projects/Screenshot 2025-05-29 104513.png";
import project05 from "./../img/projects/Screenshot 2025-05-29 104526.png";
import project05Big from "./../img/projects/Screenshot 2025-05-29 104526.png";
import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    title: "BOSE Project",
    skills: "HTML,CSS",
    img: project01,
    imgBig: project01Big,
    gitHubLink: "https://github.com/aleksey-pru/project",
    desc: "Landing for music product presentation. Landing with responsive design that displays equally well on all devices",
  },
  {
    id: uuidv4(),
    title: "Watchcharm",
    img: project02,
    imgBig: project02Big,
    skills: "HTML,CSS",
    gitHubLink: "https://github.com/Syvyj/team-04/tree/gh-pages",
    desc: "Landing with a responsive layout. Team project. Role: Developer. Was responsible for Reviews section",
  },
  {
    id: uuidv4(),
    title: "WebStudio Landing",
    img: project03,
    imgBig: project03Big,
    skills: "HTML,CSS",
    gitHubLink: "https://github.com/aleksey-pru/goit-markup-hw-06",
    desc: "Pet-project. Responsive layout project with a more complex structure.",
  },
  {
    id: uuidv4(),
    title: "Portfolio Project",
    img: project04,
    imgBig: project04Big,
    skills: "HTML, CSS, JavaScript, REST API, Vite",
    gitHubLink: "https://github.com/aleksey-pru/team-04-js",
    desc: "Team project. Role: Team-lead & Developer. Led a team of 9 developers, managed workflows, and was responsible for architecture and technical decisions.",
  },
  {
    id: uuidv4(),
    title: "Movie Search App",
    img: project05,
    imgBig: project05Big,
    skills: "HTML, CSS, JavaScript, React, REST API, Vite",
    desc: "Built a responsive movie search application that allows users to find films by keyword using a public API. Integrated Axios for efficient API requests and React Router for seamless navigation between pages (e.g.,movie details). Key features include real-time search, dynamic routing, and clean UI built with React",
  },
];
