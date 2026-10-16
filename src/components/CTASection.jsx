// src/components/CTASection.jsx
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "./Reveal";

const CTASection = ({
  title = "Have a story to tell?",
  text = "Let's turn your idea into a cinematic experience that people will remember.",
  buttonText = "Start a Project",
  to = "/contact",
}) => (
  <section className="relative overflow-hidden bg-black py-28">
    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />
    <Reveal stagger={0.15} className="relative mx-auto max-w-3xl px-6 text-center">
      <h2 className="text-4xl font-extrabold text-white md:text-6xl">{title}</h2>
      <p className="mt-6 text-gray-400">{text}</p>
      <div>
        <Link
          to={to}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-amber-400 px-10 py-4 font-bold uppercase tracking-wider text-black transition hover:bg-amber-300"
        >
          {buttonText}
          <FaArrowRight className="transition group-hover:translate-x-2" />
        </Link>
      </div>
    </Reveal>
  </section>
);

export default CTASection;
