// src/components/Lightbox.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Lightbox = ({ items, index, onClose, onChange }) => {
  const overlay = useRef(null);
  const imgRef = useRef(null);
  const current = items[index];

  // open animation
  useEffect(() => {
    gsap.fromTo(overlay.current, { opacity: 0 }, { opacity: 1, duration: 0.35 });
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // image change animation
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.92, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  }, [index]);

  const prev = () => onChange((index - 1 + items.length) % items.length);
  const next = () => onChange((index + 1) % items.length);

  // keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-amber-400 hover:text-black"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-amber-400 hover:text-black md:left-8"
        aria-label="Previous"
      >
        <FaChevronLeft />
      </button>

      <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          ref={imgRef}
          src={current.image}
          alt={current.title}
          className="max-h-[75vh] w-full rounded-xl object-contain"
        />
        <figcaption className="mt-5 text-center">
          <h3 className="text-xl font-bold text-white">{current.title}</h3>
          <p className="text-sm text-amber-400">{current.category}</p>
          <p className="mt-1 text-xs text-gray-500">
            {index + 1} / {items.length}
          </p>
        </figcaption>
      </figure>

      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-amber-400 hover:text-black md:right-8"
        aria-label="Next"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Lightbox;
