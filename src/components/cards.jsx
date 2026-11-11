import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Brand Promo Film",
    category: "Commercial",
    thumbnail:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200",
    duration: "1:24",
    description:
      "A confident, cinematic introduction that brings a brand's personality into focus.",
  },
  {
    id: 2,
    title: "Product Launch Reel",
    category: "Social media",
    thumbnail:
      "https://images.pexels.com/photos/7991650/pexels-photo-7991650.jpeg?auto=compress&cs=tinysrgb&w=1200",
    duration: "0:48",
    description:
      "A fast-moving launch story designed to make every detail feel considered.",
  },
  {
    id: 3,
    title: "Corporate Story",
    category: "Brand film",
    thumbnail:
      "https://images.pexels.com/photos/7991661/pexels-photo-7991661.jpeg?auto=compress&cs=tinysrgb&w=1200",
    duration: "2:15",
    description:
      "A human portrait of the people and purpose behind a growing business.",
  },
  {
    id: 4,
    title: "Event Highlights",
    category: "Event",
    thumbnail:
      "https://images.pexels.com/photos/7991583/pexels-photo-7991583.jpeg?auto=compress&cs=tinysrgb&w=1200",
    duration: "1:52",
    description:
      "The energy, atmosphere, and standout moments of a day worth remembering.",
  },
  {
    id: 5,
    title: "YouTube Documentary",
    category: "Documentary",
    thumbnail:
      "https://images.pexels.com/photos/7991575/pexels-photo-7991575.jpeg?auto=compress&cs=tinysrgb&w=1200",
    duration: "8:40",
    description:
      "An intimate long-form story shaped around honest moments and strong visuals.",
  },
];

export default function Cards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + projects.length) % projects.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % projects.length);
  };

  return (
    <section
      aria-labelledby="projects-heading"
      className="bg-soft-gray px-6 py-20 text-charcoal sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              A few recent favorites
            </p>
            <h2
              id="projects-heading"
              className="max-w-3xl text-balance text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.06em]"
            >
              Every project has{" "}
              <span className="font-medium italic text-gold">a point of view.</span>
            </h2>
          </div>
          <p className="max-w-md leading-7 text-charcoal/75 lg:col-span-5 lg:justify-self-end">
            From first idea to final frame, we make films that give good stories
            the attention they deserve.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <div
            aria-live="polite"
            className="flex flex-col rounded-3xl bg-white p-7 shadow-sm sm:p-10"
          >
            <div className="flex items-center justify-between border-b border-soft-gray pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60">
                Featured project
              </p>
              <p className="font-mono text-sm text-charcoal/60">
                {String(activeIndex + 1).padStart(2, "0")}
                <span className="px-1.5 text-gold">/</span>
                {String(projects.length).padStart(2, "0")}
              </p>
            </div>

            <div className="flex flex-1 flex-col justify-center py-9">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                {activeProject.category}
                <span className="px-2 text-charcoal/35">/</span>
                {activeProject.duration}
              </p>
              <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                {activeProject.title}
              </h3>
              <p className="mt-4 max-w-md leading-7 text-charcoal/75">
                {activeProject.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-5 border-t border-soft-gray pt-6">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Show previous project"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-soft-gray text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Show next project"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-soft-gray text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Explore all work
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <figure
            key={activeProject.id}
            className="group relative min-h-[22rem] overflow-hidden rounded-3xl bg-charcoal sm:min-h-[30rem] lg:min-h-0"
          >
            <img
              src={activeProject.thumbnail}
              alt={`${activeProject.title} — ${activeProject.category}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-charcoal/10"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Lyrion Frame Art
              </span>
              <span className="rounded-full border border-white/40 px-4 py-2 text-xs font-medium backdrop-blur-sm">
                {activeProject.category}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
