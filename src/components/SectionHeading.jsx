// src/components/SectionHeading.jsx
import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, subtitle, center = true }) => (
  <Reveal
    stagger={0.15}
    y={30}
    className={`mb-14 ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
  >
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
      {eyebrow}
    </p>
    <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {subtitle && <p className="mt-5 text-gray-400">{subtitle}</p>}
  </Reveal>
);

export default SectionHeading;
