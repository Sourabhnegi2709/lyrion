// src/pages/Gallery.jsx
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { FaExpand } from "react-icons/fa";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import FilterTabs from "../components/FilterTabs";
import Lightbox from "../components/Lightbox";
import CTASection from "../components/CTASection";
import { gallery, galleryCategories, heroImages } from "../components/siteData";

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null); // index or null
  const grid = useRef(null);

  const items = useMemo(
    () => (active === "All" ? gallery : gallery.filter((g) => g.category === active)),
    [active]
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
        }
      );
    }, grid);
    return () => ctx.revert();
  }, [active]);

  return (
    <main className="bg-black text-white">
      <PageHero
        eyebrow="Gallery"
        title="Frames That Speak"
        subtitle="Stills, behind-the-scenes moments and photography from our sets and studio."
        image={heroImages.gallery}
      />

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Visual Archive"
            title="A Collection of Moments"
            subtitle="Click any image to view it full screen."
          />
          <FilterTabs items={galleryCategories} active={active} onChange={setActive} />

          <div
            ref={grid}
            className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            {items.map((g, i) => (
              <button
                key={g.id}
                onClick={() => setLightbox(i)}
                className={`gallery-item group relative overflow-hidden rounded-2xl ${g.span}`}
              >
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 opacity-0 transition duration-500 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-widest text-amber-400">
                    {g.category}
                  </p>
                  <h3 className="text-lg font-bold">{g.title}</h3>
                </div>
                <span className="absolute right-4 top-4 flex h-10 w-10 scale-50 items-center justify-center rounded-full bg-amber-400 text-black opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <FaExpand size={14} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <Lightbox
          items={items}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onChange={setLightbox}
        />
      )}

      <CTASection
        title="Love what you see?"
        text="Let's create visuals like these for your brand or story."
        buttonText="Work With Us"
      />
    </main>
  );
};

export default Gallery;
