// src/components/Reveal.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-triggered reveal wrapper.
 * - stagger > 0 animates each direct child one after another.
 */
const Reveal = ({
  children,
  className = "",
  y = 50,
  x = 0,
  delay = 0,
  stagger = 0,
  duration = 1,
  as: Tag = "div",
}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = stagger ? ref.current.children : ref.current;
      gsap.from(targets, {
        opacity: 0,
        y,
        x,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [y, x, delay, stagger, duration]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

export default Reveal;
