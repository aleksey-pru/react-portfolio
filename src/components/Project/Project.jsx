import { Link } from "react-router-dom";

const Project = ({ title, img, id }) => {
  return (
    <div className="relative w-96 overflow-hidden rounded-xl shadow-md group bg-zinc-200 dark:bg-zinc-900">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-400 via-gray-200 to-pink-50 dark:bg-radial-[at_25%_25%] dark:from-white dark:to-zinc-900 dark:to-75% opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md animate-gradient-x z-0"></div>
      <Link to={`/project/${id}`} className="relative z-10 block">
        <figure>
          <img src={img} alt={title} className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-zinc-900 dark:text-white">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Project;
