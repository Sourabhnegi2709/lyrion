// src/pages/Work.jsx
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { FaAward, FaVideo, FaUsers } from "react-icons/fa";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import FilterTabs from "../components/FilterTabs";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { projects, categories, heroImages } from "../components/siteData";

const process = [
  { icon: FaUsers, title: "Discover", text: "We listen, research and shape the story together." },
  { icon: FaVideo, title: "Produce", text: "Pre-production, shoot days and crew handled end to end." },
  { icon: FaAward, title: "Deliver", text: "Editing, colour, sound and final delivery in every format." },
];

const Work = () => {
  const [active, setActive] = useState("All");
  const grid = useRef(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  // animate cards whenever the filter changes
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }, grid);
    return () => ctx.revert();
  }, [active]);

  return (
    <main className="bg-black text-white">
      <PageHero
        eyebrow="Our Work"
        title="Stories We Have Told"
        subtitle="A selection of films, commercials, music videos and documentaries crafted with passion and precision."
        image={heroImages.work}
      />

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Projects"
            subtitle="Filter by category to explore our work."
          />
          <FilterTabs items={categories} active={active} onChange={setActive} />

          <div ref={grid} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-gray-500">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-neutral-950 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How We Work"
            title="From Idea to Final Cut"
            subtitle="A simple, transparent process that keeps your project on track."
          />
          <Reveal stagger={0.2} className="grid gap-8 md:grid-cols-3">
            {process.map((s, i) => (
              <div
                key={s.title}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-10 text-center transition hover:border-amber-400/60"
              >
                <span className="absolute right-6 top-4 text-6xl font-extrabold text-white/5">
                  0{i + 1}
                </span>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-2xl text-black">
                  <s.icon />
                </div>
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-gray-400">{s.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Want to be our next story?"
        text="Tell us about your project and we will craft something unforgettable."
      />
    </main>
  );
};

export default Work;
