import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import revaLogo from "../assets/reva-logo.svg";

const LogoLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const glowRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
      onComplete: () => {
        // Graceful exit: dissolve, don't just vanish
        gsap.to(svgRef.current, {
          scale: 1.03,
          opacity: 0,
          filter: "blur(6px)",
          duration: 0.7,
          ease: "power2.inOut",
        });
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.15,
          onComplete,
        });
      },
    });

    // 1. Background fade-in — instant, no perceptible delay before something happens
    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.45, ease: "power1.out" }
    );

    // 2. Soft ambient glow breathing in behind the logo (adds life without noise)
    if (glowRef.current) {
      tl.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 0.5, scale: 1, duration: 1.2, ease: "power2.out" },
        "-=0.2"
      );
      gsap.to(glowRef.current, {
        opacity: 0.25,
        scale: 1.08,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    }

    // 3. Logo entrance — restrained, grounded, no rotation/overshoot
    tl.fromTo(
      svgRef.current,
      { scale: 0.94, opacity: 0, y: 16, filter: "blur(4px)" },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "expo.out",
      },
      "-=0.55"
    );

    // 4. Letter groups — quiet stagger, blur-to-focus instead of hard pop-in
    const letterGroups = svgRef.current?.querySelectorAll(
      'g[id^="w"], g#R, g#E, g#V, g#A, g#g, g#r-2, g#a-2, g#p, g#h, g#i, g#c, g#s'
    );
    if (letterGroups?.length) {
      tl.fromTo(
        letterGroups,
        { opacity: 0, y: 14, filter: "blur(3px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.035,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=0.85"
      );
    }

    // 5. Graphic/stroke elements — kept, slightly tightened
    const graphicElements = svgRef.current?.querySelectorAll(
      'g[id^="G"], g[id^="I"]'
    );
    if (graphicElements?.length) {
      tl.fromTo(
        graphicElements,
        { strokeDashoffset: 800, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power2.out",
          stagger: 0.08,
        },
        "-=1.4"
      );
    }

    // 6. Progress line — thin, honest, fills across the load. This is the
    // single biggest "product-company" tell: it tells the eye time is passing.
    if (progressRef.current) {
      tl.fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.6, ease: "power1.inOut" },
        "-=1.3"
      );
    }

    // 7. Brief, deliberate hold so the reveal doesn't feel rushed
    tl.to({}, { duration: 0.35 });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="flex flex-col items-center relative">
        {/* Ambient glow */}
        <div
          ref={glowRef}
          className="absolute inset-0 -z-10 blur-3xl rounded-full opacity-0"
          style={{
            background:
              "radial-gradient(circle, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 70%)",
            width: "140%",
            height: "140%",
            left: "-20%",
            top: "-20%",
          }}
        />

        <div className="mb-2 lg:mb-2 relative">
          <img
            ref={svgRef}
            src={revaLogo}
            alt="Reva Logo"
            className="w-[120px] md:w-[420px] lg:w-[420px] drop-shadow-xl"
          />
        </div>

        {/* Progress line */}
        <div className="h-[4px] w-40 md:w-56 bg-zinc-150 rounded-full overflow-hidden bg-zinc-100">
          <div   
            ref={progressRef}
            className="h-full w-full bg-gradient-to-r from-[#FF9800] to-[#E91E63] rounded-full origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoLoader;