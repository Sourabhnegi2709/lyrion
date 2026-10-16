// src/components/TeamCard.jsx
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TeamCard = ({ name, role, image }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-neutral-900">
    <img
      src={image}
      alt={name}
      loading="lazy"
      className="h-96 w-full object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-6">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-sm text-amber-400">{role}</p>
      <div className="mt-4 flex gap-3 translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        {[FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-amber-400 hover:bg-amber-400 hover:text-black"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TeamCard;
