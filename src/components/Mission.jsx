import { useState, useRef, useEffect } from "react";

import ShimmerText from "../components/ShimmerText";
import DecorativeUnderline from "../components/DecorativeUnderline";

const tabs = [
  {
    id: "mission",
    tag: "What We Do",
    label: "Our Mission",
    emoji: "🚀",
    accent: "#d4af37",
    accentLight: "#dfe6e9",
    content:
      "We are on a mission to satisfy all our valuable clients through high-quality and result-oriented Digital Design and Branding Services across the globe.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80",
    imageAlt: "Team collaborating on a mission",
    stats: [
      { value: "500+", label: "Projects" },
      { value: "98%", label: "Satisfaction" },
      { value: "12+", label: "Years" },
    ],
  },
  {
    id: "vision",
    tag: "Where We're Headed",
    label: "Our Vision",
    emoji: "👁️",
    accent: "#d4af37",
    accentLight: "#dfe6e9",
    content:
      "Our vision is to break the digital world with innovation and powerful creative solutions.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
    imageAlt: "Visionary team",
    stats: [
      { value: "40+", label: "Markets" },
      { value: "150+", label: "Experts" },
      { value: "∞", label: "Ambition" },
    ],
  },
];

function useAnimateIn(dep) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const t = setTimeout(() => {
      el.style.transition = "all 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 50);
    return () => clearTimeout(t);
  }, [dep]);
  return ref;
}

export default function Mission() {
  const [activeTab, setActiveTab] = useState("vision");
  const [imgLoaded, setImgLoaded] = useState(false);

  const active = tabs.find((t) => t.id === activeTab);

  const contentRef = useAnimateIn(activeTab);
  const imgRef = useAnimateIn(activeTab);

  return (
    <section className="bg-soft-gray py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs uppercase tracking-widest px-4 py-1.5 bg-white border border-soft-gray rounded-full text-charcoal">
            Who We Are
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            Driven by purpose,
            <br />
            <ShimmerText>guided by vision</ShimmerText>
          </h2>
          <DecorativeUnderline
            width="400px" // Adjust width as needed
            className="mt-4 mx-auto"
            centerColor="#d4af37"
            />
        </div>

        {/* Tabs (scrollable on mobile) */}
        <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setImgLoaded(false);
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border whitespace-nowrap transition-all"
              style={{
                background: activeTab === tab.id ? tab.accent : "#ffffff",
                color: "#36454f",
                borderColor: activeTab === tab.id ? tab.accent : "#dfe6e9",
              }}
            >
              {tab.emoji} {tab.label}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-xl">
          {/* Content */}
          <div
            ref={contentRef}
            className="p-6 md:p-10 flex flex-col justify-between"
          >
            <div>
              <span
                className="inline-block text-xs px-3 py-1 rounded-full mb-4"
                style={{
                  background: active.accentLight,
                  color: active.accent,
                }}
              >
                {active.tag}
              </span>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {active.label}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                {active.content}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {active.stats.map((s) => (
                <div
                  key={s.label}
                  className="p-3 rounded-xl text-center"
                  style={{ background: active.accentLight }}
                >
                  <div
                    className="text-lg md:text-xl font-bold"
                    style={{ color: active.accent }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-charcoal">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[260px] md:h-auto">
            <img
              ref={imgRef}
              src={active.image}
              alt={active.imageAlt}
              onLoad={() => setImgLoaded(true)}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: imgLoaded ? 1 : 0 }}
            />

            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${active.accent}55, transparent)`,
              }}
            />

            {/* Text overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md p-4 rounded-xl">
              <p className="text-white text-sm md:text-lg font-semibold">
                "{active.label} — shaping tomorrow."
              </p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="cursor-pointer transition-all duration-300"
              style={{
                width: activeTab === tab.id ? "24px" : "10px",
                height: "10px",
                borderRadius: "999px",
                background: activeTab === tab.id ? tab.accent : "#dfe6e9",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
