import { useEffect, useState } from "react";



const projects = [
    {
        id: 1,
        title: "Brand Promo Film",
        category: "Commercial",
        thumbnail:
            "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "1:24",
    },
    {
        id: 2,
        title: "Product Launch Reel",
        category: "Social Media",
        thumbnail:
            "https://images.pexels.com/photos/7991650/pexels-photo-7991650.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "0:48",
    },
    {
        id: 3,
        title: "Corporate Story",
        category: "Corporate",
        thumbnail:
            "https://images.pexels.com/photos/7991661/pexels-photo-7991661.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "2:15",
    },
    {
        id: 4,
        title: "Event Highlights",
        category: "Event",
        thumbnail:
            "https://images.pexels.com/photos/7991583/pexels-photo-7991583.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "1:52",
    },
    {
        id: 5,
        title: "YouTube Documentary",
        category: "YouTube",
        thumbnail:
            "https://images.pexels.com/photos/7991575/pexels-photo-7991575.jpeg?auto=compress&cs=tinysrgb&w=800",
        duration: "8:40",
    },
];

export default function Cards() {
    const [active, setActive] = useState(2);
    const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);

    useEffect(() => {
        const updateViewportWidth = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", updateViewportWidth);
        return () => window.removeEventListener("resize", updateViewportWidth);
    }, []);

    const next = () => {
        setActive((previous) => (previous + 1) % projects.length);
    };

    const prev = () => {
        setActive((previous) => (previous - 1 + projects.length) % projects.length);
    };

    return (
        <>


            <div className="bg-white min-h-screen">
                {/* ================= HERO SECTION ================= */}
                

                {/* ================= PROJECTS SLIDER ================= */}
                <section id="projects" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-14">
                            <h2 className="mb-4 text-4xl font-bold text-[#08182b] sm:text-5xl">
                                Our Projects
                            </h2>

                            <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-xl">
                                A selection of recent work — commercials, social content, and
                                brand films
                            </p>
                        </div>

                        {/* Slider */}
                        <div className="relative overflow-hidden">
                            {/* FAN CARDS */}
                            <div className="mt-10 flex w-full justify-center lg:col-span-7 lg:mt-0">
                                <div className="relative h-[420px] w-full max-w-[260px] sm:h-[460px] sm:max-w-[320px] lg:h-[500px] lg:max-w-[380px]">
                                    {projects.map((Project, i) => {
                                        const total = projects.length;
                                        let offset = i - active;

                                        if (offset > total / 2) offset -= total;
                                        if (offset < -total / 2) offset += total;

                                        const isVisible = Math.abs(offset) <= 2;
                                        const cardWidth =
                                            viewportWidth >= 1024
                                                ? 380
                                                : viewportWidth >= 640
                                                  ? 320
                                                  : Math.min(260, viewportWidth - 48);
                                        const fanSpacing = Math.min(
                                            viewportWidth < 640 ? 40 : 80,
                                            Math.max(0, (viewportWidth - 48 - cardWidth) / 4),
                                        );

                                        return (
                                            <div
                                                key={Project.title}
                                                onClick={() => setActive(i)}
                                                className="absolute w-full h-full cursor-pointer flex items-end"
                                                style={{
                                                    transformOrigin: "bottom center",
                                                    transform: `
                  translateX(${offset * fanSpacing}px)
                  translateY(${Math.abs(offset) * (viewportWidth < 640 ? -15 : -25)}px)
                  rotate(${offset * (viewportWidth < 640 ? 8 : 12)}deg)
                  scale(${offset === 0 ? 1 : 0.9})
                `,

                                                    transition:
                                                        "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",

                                                    zIndex: 100 - Math.abs(offset),
                                                    opacity: isVisible ? 1 : 0,
                                                }}
                                            >
                                                {/* CARD */}
                                                <div className="relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-950 shadow-lg border-4 border-orange-300 hover:shadow-2xl transition">
                                                    <img
                                                        src={Project.thumbnail}
                                                        alt={Project.title}
                                                        className="absolute inset-0 h-full w-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />

                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-xl backdrop-blur-sm">
                                                            <svg
                                                                className="ml-1 h-7 w-7"
                                                                fill="currentColor"
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                            >
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                                                        <div>
                                                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-orange-400">
                                                                {Project.category}
                                                            </p>
                                                            <h5 className="font-semibold text-base text-white sm:text-lg">
                                                                {Project.title}
                                                            </h5>
                                                        </div>
                                                        <span className="shrink-0 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                                            {Project.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex justify-center gap-4 mt-8">
                                <button
                                    onClick={prev}
                                    aria-label="Show previous project"
                                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={next}
                                    aria-label="Show next project"
                                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* Simple floating animation styles */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 5.5s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4.8s ease-in-out infinite 0.6s; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
        </>
    );
}