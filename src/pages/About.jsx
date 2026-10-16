// src/pages/About.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaCamera,
  FaFilm,
  FaLightbulb,
  FaHandshake,
  FaQuoteLeft,
} from "react-icons/fa";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import StatCounter from "../components/StatCounter";
import TeamCard from "../components/TeamCard";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { stats, values, timeline, team, services, heroImages } from "../components/siteData";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  camera: FaCamera,
  film: FaFilm,
  lightbulb: FaLightbulb,
  handshake: FaHandshake,
};

const About = () => {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // parallax on story image
      gsap.to(".story-img", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".story-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // timeline line grows while scrolling
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-wrap",
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
        },
      });

      // timeline items
      gsap.utils.toArray(".timeline-item").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: i % 2 === 0 ? -60 : 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      // services marquee
      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="bg-black text-white">
      <PageHero
        eyebrow="About Us"
        title="We Frame Your Vision"
        subtitle="Lyrion Frame Art is a cinematography studio and production house crafting films, commercials and visual stories with a cinematic soul."
        image={heroImages.about}
      />

      {/* STORY */}
      <section className="story-section overflow-hidden px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <Reveal x={-60} y={0} className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={heroImages.story}
                alt="Lyrion on set"
                className="story-img h-[520px] w-full scale-125 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-amber-400 p-6 text-black shadow-2xl md:-right-8">
              <p className="text-4xl font-extrabold">8+</p>
              <p className="text-sm font-semibold uppercase tracking-wider">
                Years of Cinema
              </p>
            </div>
          </Reveal>

          <Reveal x={60} y={0}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
              Our Story
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Where every frame becomes a feeling
            </h2>
            <p className="mt-6 leading-relaxed text-gray-400">
              We started with a simple belief: a great image can change how someone
              feels. Today, Lyrion Frame Art is a full-service production house where
              directors, cinematographers, editors and colorists work side by side
              to bring stories to life.
            </p>
            <p className="mt-4 leading-relaxed text-gray-400">
              Whether it is a 30-second commercial or a feature-length documentary,
              we bring the same obsession with light, composition and emotion.
            </p>
            <div className="mt-8 flex items-start gap-4 border-l-2 border-amber-400 pl-5">
              <FaQuoteLeft className="mt-1 shrink-0 text-amber-400" />
              <p className="italic text-gray-300">
                We don't just record moments. We design how the world remembers them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-neutral-950 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Core Values"
            subtitle="The principles behind every project we shoot, cut and deliver."
          />
          <Reveal stagger={0.15} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = iconMap[v.icon];
              return (
                <div
                  key={v.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-500 hover:-translate-y-2 hover:border-amber-400/60"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-400/10 text-2xl text-amber-400 transition group-hover:bg-amber-400 group-hover:text-black">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{v.text}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Our Journey" title="From One Camera to a Studio" />
          <div className="timeline-wrap relative">
            <div className="timeline-line absolute left-4 top-0 h-full w-[2px] bg-amber-400 md:left-1/2 md:-translate-x-1/2" />
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className={`timeline-item relative mb-14 pl-14 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? "md:pr-14 md:text-right"
                    : "md:ml-auto md:pl-14"
                }`}
              >
                <span
                  className={`absolute top-2 left-[9px] h-4 w-4 rounded-full border-4 border-black bg-amber-400 md:left-auto ${
                    i % 2 === 0 ? "md:-right-2" : "md:-left-2"
                  }`}
                />
                <p className="text-3xl font-extrabold text-amber-400">{t.year}</p>
                <h3 className="mt-1 text-xl font-bold">{t.title}</h3>
                <p className="mt-2 text-gray-400">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES MARQUEE */}
      <section className="overflow-hidden border-y border-white/10 bg-neutral-950 py-8">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {[...services, ...services].map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-12 text-3xl font-extrabold uppercase text-transparent md:text-5xl"
              style={{ WebkitTextStroke: "1px rgba(251,191,36,0.7)" }}
            >
              {s}
              <FaFilm className="text-2xl text-amber-400" />
            </span>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Crew"
            title="Meet the Creative Minds"
            subtitle="A passionate team of storytellers behind every frame."
          />
          <Reveal stagger={0.15} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default About;
