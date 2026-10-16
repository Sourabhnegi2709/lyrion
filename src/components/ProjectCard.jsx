// src/components/ProjectCard.jsx
import { FaPlay, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { title, category, year, role, description, image } = project;

  return (
    <article className="project-card group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
          {category}
        </span>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-black shadow-xl">
            <FaPlay className="ml-1" />
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-gray-500">
          <span>{year}</span>
          <span>{role}</span>
        </div>
        <h3 className="mt-3 text-2xl font-bold text-white transition group-hover:text-amber-400">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
        <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-400">
          View Project
          <FaArrowRight className="transition group-hover:translate-x-2" />
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
