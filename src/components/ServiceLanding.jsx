import { FaArrowRight } from "react-icons/fa";

import CTASection from "./CTASection";
import PageHero from "./PageHero";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "./siteData";

function FrameSequence({ frames, kicker, title, description }) {
  return (
    <section className="overflow-hidden bg-neutral-950 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal x={-35} y={0}>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
            {kicker}
          </p>
          <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-gray-400">{description}</p>
          <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
            <span className="text-4xl font-extrabold text-amber-400">01—03</span>
            <span className="text-xs uppercase leading-relaxed tracking-[0.2em] text-gray-500">
              A story, shaped<br />one frame at a time
            </span>
          </div>
        </Reveal>

        <Reveal stagger={0.12} className="grid grid-cols-2 gap-4">
          {frames.slice(0, 3).map((frame, index) => (
            <figure
              key={frame.id}
              className={`group relative overflow-hidden border border-white/10 bg-black ${
                index === 0 ? "col-span-2 aspect-[16/8]" : "aspect-[4/5]"
              }`}
            >
              <img
                src={frame.image}
                alt={frame.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <span className="absolute left-4 top-4 font-mono text-xs tracking-widest text-white/80">
                LF / 0{index + 1}
              </span>
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <span className="font-semibold text-white">{frame.title}</span>
                <FaArrowRight className="shrink-0 text-amber-400 transition group-hover:translate-x-1" />
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default function ServiceLanding({ page }) {
  const selectedProjects = page.projectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);
  const frames = page.frameIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);

  return (
    <main className="bg-black text-white">
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        image={page.image}
      />

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
              {page.introEyebrow}
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              {page.introTitle}
            </h2>
          </Reveal>
          <Reveal x={30} y={0} className="lg:col-span-5">
            <p className="leading-relaxed text-gray-400">{page.introText}</p>
            <p className="mt-5 border-l-2 border-amber-400 pl-5 text-lg font-medium leading-relaxed text-white">
              {page.pullQuote}
            </p>
          </Reveal>
        </div>
      </section>

      <FrameSequence {...page.sequence} frames={frames} />

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={page.capabilitiesEyebrow}
            title={page.capabilitiesTitle}
            subtitle={page.capabilitiesSubtitle}
          />
          <Reveal stagger={0.12} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.capabilities.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="group relative min-h-64 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-7 transition duration-500 hover:-translate-y-2 hover:border-amber-400/50"
              >
                <span className="absolute right-5 top-3 text-5xl font-bold text-white/[0.04]">
                  0{index + 1}
                </span>
                <Icon className="text-2xl text-amber-400 transition group-hover:scale-110" />
                <h3 className="mt-12 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={page.workEyebrow}
            title={page.workTitle}
            subtitle={page.workSubtitle}
          />
          <div
            className={`mx-auto grid max-w-6xl gap-7 ${
              selectedProjects.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {selectedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="The Process"
            title={page.processTitle}
            subtitle={page.processSubtitle}
          />
          <Reveal stagger={0.15} className="grid gap-8 md:grid-cols-3">
            {page.process.map((step, index) => (
              <article key={step.title} className="border-t border-white/15 pt-6">
                <p className="font-mono text-sm tracking-widest text-amber-400">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-400">{step.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection title={page.ctaTitle} text={page.ctaText} />
    </main>
  );
}
