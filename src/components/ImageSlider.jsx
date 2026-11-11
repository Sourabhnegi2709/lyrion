import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import slide1 from "../assets/big-slider1.jpg";
import slide2 from "../assets/big-slider2.jpg";
import slide3 from "../assets/big-slider3.webp";
import slide6 from "../assets/big-slider6.webp";
import slide8 from "../assets/big-slider8.webp";

const slides = [
  { image: slide1, alt: "A featured creative project" },
  { image: slide2, alt: "A featured brand campaign" },
  { image: slide3, alt: "A featured visual story" },
  { image: slide6, alt: "A featured production" },
  { image: slide8, alt: "A featured design project" },
];

export default function ImageSlider() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const loopWidth =
      track.children[slides.length].getBoundingClientRect().left -
      track.children[0].getBoundingClientRect().left;
    const tween = gsap.to(track, {
      x: -loopWidth,
      duration: 32,
      ease: "none",
      repeat: -1,
    });

    return () => tween.kill();
  }, []);

  return (
    <section
      aria-labelledby="featured-work-heading"
      className="overflow-hidden bg-charcoal py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
          <span aria-hidden="true" className="h-px w-8 bg-orange-300" />
          Selected work
        </p>
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="featured-work-heading"
            className="max-w-3xl text-balance text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.06em]"
          >
            A closer look at{" "}
            <span className="font-medium italic text-orange-300">what we create.</span>
          </h2>
          <p className="max-w-sm text-sm leading-6 text-white/60 sm:text-base">
            Bold ideas, brought to life through thoughtful visuals and
            unforgettable stories.
          </p>
        </div>
      </div>

      <div className="overflow-hidden motion-reduce:overflow-x-auto">
        <div
          ref={trackRef}
          aria-label="Featured creative work"
          className="flex w-max select-none gap-4 pl-6 sm:gap-6 sm:pl-10 lg:pl-16"
        >
          {[...slides, ...slides].map((slide, index) => {
            const isDuplicate = index >= slides.length;

            return (
              <div
                key={`${slide.image}-${index}`}
                aria-hidden={isDuplicate || undefined}
                className="group relative aspect-[4/3] w-[82vw] max-w-[46rem] flex-shrink-0 overflow-hidden rounded-2xl bg-neutral-800 sm:w-[65vw] sm:rounded-3xl"
              >
                <img
                  src={slide.image}
                  alt={isDuplicate ? "" : slide.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  draggable="false"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
