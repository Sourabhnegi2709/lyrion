// src/components/StatCounter.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatCounter = ({ value, suffix = "", label }) => {
  const wrap = useRef(null);
  const num = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { n: 0 };
      gsap.to(obj, {
        n: value,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: { trigger: wrap.current, start: "top 90%", once: true },
        onUpdate: () => {
          if (num.current) num.current.textContent = Math.round(obj.n) + suffix;
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, [value, suffix]);

  return (
    <div
      ref={wrap}
      className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition hover:border-amber-400/50"
    >
      <div ref={num} className="text-4xl font-extrabold text-amber-400 md:text-5xl">
        0{suffix}
      </div>
      <p className="mt-3 text-sm uppercase tracking-widest text-gray-400">{label}</p>
    </div>
  );
};

export default StatCounter;
