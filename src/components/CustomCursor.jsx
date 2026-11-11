import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });
    const dotX = gsap.quickTo(dot, "x", {
      duration: 0,
    });

    const dotY = gsap.quickTo(dot, "y", {
      duration: 0,
    });

    const ringX = gsap.quickTo(ring, "x", {
      duration: 0.25,
      ease: "power3.out",
    });

    const ringY = gsap.quickTo(ring, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    let hoveredItem = null;
    const hoverSelector = "a,button,.cursor-hover";

    const move = (event) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
      gsap.set([dot, ring], { autoAlpha: 1 });
    };

    const setHovered = (isHovered) => {
      gsap.to(ring, {
        scale: isHovered ? 2 : 1,
        background: isHovered ? "rgba(212,175,55,.12)" : "transparent",
        borderColor: "#d4af37",
        duration: 0.25,
      });

      gsap.to(dot, {
        scale: isHovered ? 0 : 1,
        duration: 0.2,
      });
    };

    const handleMouseOver = (event) => {
      const item = event.target.closest?.(hoverSelector);
      if (item && item !== hoveredItem) {
        hoveredItem = item;
        setHovered(true);
      }
    };

    const handleMouseOut = (event) => {
      if (!hoveredItem || hoveredItem.contains(event.relatedTarget)) return;

      hoveredItem = event.relatedTarget?.closest?.(hoverSelector) || null;
      setHovered(Boolean(hoveredItem));
    };

    const handleMouseDown = () => {
      gsap.to(ring, { scale: 0.8, duration: 0.12 });
    };

    const handleMouseUp = () => {
      gsap.to(ring, {
        scale: hoveredItem ? 2 : 1,
        duration: 0.18,
      });
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      gsap.killTweensOf([dot, ring]);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[99999] h-2 w-2 rounded-full bg-gold opacity-0"
      />

      <div
        ref={ringRef}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[99998] h-10 w-10 rounded-full border border-gold opacity-0 mix-blend-difference"
      />
    </>
  );
}