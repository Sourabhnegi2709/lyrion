// src/components/PageHero.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FaChevronDown } from "react-icons/fa";

const PageHero = ({ eyebrow, title, subtitle, image }) => {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-bg", { scale: 1.25, duration: 2.2, ease: "power2.out" }, 0)
        .from(".hero-eyebrow", { y: 30, opacity: 0, duration: 0.8 }, 0.3)
        .from(
          ".hero-word",
          { yPercent: 120, opacity: 0, duration: 1.1, stagger: 0.12 },
          0.45
        )
        .from(".hero-sub", { y: 30, opacity: 0, duration: 0.9 }, 1)
        .from(".hero-line", { scaleX: 0, duration: 1, transformOrigin: "left" }, 1.1)
        .from(".hero-scroll", { opacity: 0, y: -10, duration: 0.8 }, 1.4);

      gsap.to(".hero-scroll", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 0.9,
        ease: "sine.inOut",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black text-white"
    >
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(54,69,79,0.7)_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-20 text-center">
        <p className="hero-eyebrow mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-amber-400">
          {eyebrow}
        </p>
        <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
          {title.split(" ").map((word, i) => (
            <span key={i} className="mr-3 inline-block overflow-hidden align-bottom md:mr-5">
              <span className="hero-word inline-block">{word}</span>
            </span>
          ))}
        </h1>
        <div className="hero-line mx-auto mt-8 h-[2px] w-24 bg-amber-400" />
        <p className="hero-sub mx-auto mt-8 max-w-2xl text-base text-gray-300 md:text-lg">
          {subtitle}
        </p>
      </div>

      <FaChevronDown className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-400" />
    </section>
  );
};

export default PageHero;
