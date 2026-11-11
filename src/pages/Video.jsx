import React, { useState } from "react";
import Seo from "../components/Seo";
import ShimmerText from "../components/ShimmerText";
import DecorativeUnderline from "../components/DecorativeUnderline";
import { Link } from "react-router-dom";
import adobe1 from "../assets/after-effact.png";
import adobe2 from "../assets/premier.svg";
import adobe3 from "../assets/final.png";
import adobe4 from "../assets/Davinci.png";
import photoshop from "../assets/photoshop.svg";
import Adob from "../assets/ex.svg";
import Invision from "../assets/illustrator.svg";
import figma from "../assets/Figma.svg";

const softwareTools = [
    { name: "After Effects", icon: adobe1, size: "h-16 w-16" },
    { name: "Premiere Pro", icon: adobe2, size: "h-20 w-20" },
    { name: "Final Cut Pro", icon: adobe3, size: "h-14 w-14" },
    { name: "DaVinci Resolve", icon: adobe4, size: "h-20 w-20" },
    { name: "Photoshop", icon: photoshop, size: "h-14 w-14" },
    { name: "After Effects", icon: Adob, size: "h-12 w-12" },
    { name: "Illustrator", icon: Invision, size: "h-14 w-14" },
    { name: "Figma", icon: figma, size: "h-12 w-12" },
];

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

export default function VideoPage() {
    const [active, setActive] = useState(2);

    const next = () => {
        setActive((previous) => (previous + 1) % projects.length);
    };

    const prev = () => {
        setActive((previous) => (previous - 1 + projects.length) % projects.length);
    };

    return (
        <>
            <Seo
                title="Video Editing Solution | Reva Graphics"
                description="Professional video editing services — cinematic storytelling, social media reels, corporate films, and high-end post-production."
            />

            <div className="bg-white min-h-screen">
                {/* ================= HERO SECTION ================= */}
                <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-soft-gray">
                    <div className="absolute inset-0 "></div>

                    {/* Floating Software Badges */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Left side */}
                        <div className="absolute top-[18%] left-[6%] md:left-[10%] animate-float-slow">
                            <img
                                src={softwareTools[0].icon}
                                alt={softwareTools[0].name}
                                className={`${softwareTools[0].size} object-contain drop-shadow-[0_8px_12px_rgba(54,69,79,0.35)]`}
                            />
                        </div>
                        <div className="absolute top-[42%] left-[3%] md:left-[6%] animate-float">
                            <img
                                src={softwareTools[2].icon}
                                alt={softwareTools[2].name}
                                className={`${softwareTools[2].size} object-contain drop-shadow-[0_8px_12px_rgba(54,69,79,0.35)]`}
                            />
                        </div>
                        <div className="absolute bottom-[28%] left-[8%] md:left-[12%] animate-float-delayed">
                            <img
                                src={softwareTools[4].icon}
                                alt={softwareTools[4].name}
                                className={`${softwareTools[4].size} object-contain drop-shadow-[0_8px_12px_rgba(54,69,79,0.35)]`}
                            />
                        </div>

                        {/* Right side */}
                        <div className="absolute top-[22%] right-[5%] md:right-[9%] animate-float">
                            <img
                                src={softwareTools[1].icon}
                                alt={softwareTools[1].name}
                                className={`${softwareTools[1].size} object-contain drop-shadow-[0_8px_12px_rgba(54,69,79,0.35)]`}
                            />
                        </div>
                        <div className="absolute top-[48%] right-[4%] md:right-[7%] animate-float-slow">
                            <img
                                src={softwareTools[3].icon}
                                alt={softwareTools[3].name}
                                className={`${softwareTools[3].size} object-contain drop-shadow-[0_8px_12px_rgba(54,69,79,0.35)]`}
                            />
                        </div>
                        <div className="absolute bottom-[24%] right-[9%] md:right-[13%] animate-float-delayed">
                            <img
                                src={softwareTools[5].icon}
                                alt={softwareTools[5].name}
                                className={`${softwareTools[5].size} object-contain drop-shadow-[0_8px_12px_rgba(54,69,79,0.35)]`}
                            />
                        </div>

                        {/* Extra small ones */}
                        <div className="absolute top-[32%] left-[22%] hidden lg:block animate-float">
                            <img
                                src={softwareTools[6].icon}
                                alt={softwareTools[6].name}
                                className={`${softwareTools[6].size} object-contain drop-shadow-[0_8px_12px_rgba(54,69,79,0.35)]`}
                            />
                        </div>
                        <div className="absolute bottom-[38%] right-[22%] hidden lg:block animate-float-slow">
                            <img
                                src={softwareTools[7].icon}
                                alt={softwareTools[7].name}
                                className={`${softwareTools[7].size} object-contain drop-shadow-[0_8px_12px_rgba(54,69,79,0.35)]`}
                            />
                        </div>
                    </div>

                    <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20">
                        <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-black/60 backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.3em]">
                            <span className="h-2 w-2 shrink-0 rounded-full bg-gold animate-pulse sm:h-2.5 sm:w-2.5"></span>
                            Professional reel-creation
                        </div>

                        <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:mb-6 sm:text-6xl md:text-7xl">
                            Video <ShimmerText>Editing</ShimmerText> Solution
                        </h1>


                        <DecorativeUnderline
                            width="min(520px, 82vw)"
                            className="mx-auto mt-2"
                            centerColor="#d4af37"
                        />

                        <p className="mx-auto mt-5 mb-8 max-w-3xl px-2 text-sm leading-relaxed text-black/90 sm:mt-6 sm:mb-10 sm:px-4 sm:text-xl md:text-2xl">
                            Cinematic storytelling, high-impact reels, and polished corporate
                            films. We turn your raw footage into content that captivates and
                            converts.
                        </p>

                        <div className="mx-auto flex w-full max-w-xl flex-row items-stretch justify-center gap-2 sm:gap-4">
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("projects")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="min-w-0 flex-1 rounded-full bg-gold px-3 py-2.5 text-xs font-semibold text-charcoal transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] active:scale-95 sm:px-6 sm:py-3 sm:text-base lg:px-10 lg:py-4 lg:text-lg"
                            >
                                View Our Work
                            </button>
                            <Link
                                to="/contact"
                                className="min-w-0 flex-1 rounded-full border border-black/30 bg-white/10 px-3 py-2.5 text-xs font-semibold text-black backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 sm:px-6 sm:py-3 sm:text-base lg:px-10 lg:py-4 lg:text-lg"
                            >
                                Start a Project
                            </Link>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-center justify-center">
                            <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll"></div>
                        </div>
                    </div>
                </section>

                {/* ================= PROJECTS SLIDER ================= */}
                <section id="projects" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-14">
                            <h2 className="text-5xl font-bold text-charcoal mb-4">
                                Our <ShimmerText>Projects</ShimmerText>
                            </h2>
                            <DecorativeUnderline
                                width="260px"
                                className="mb-4 mx-auto md:w-[320px]"
                                centerColor="#d4af37"
                            />
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                A selection of recent work — commercials, social content, and
                                brand films
                            </p>
                        </div>

                        {/* Slider */}
                        <div className="relative">
                            {/* FAN CARDS */}
                            <div className="lg:col-span-7 flex justify-center mt-10 lg:mt-0">
                                <div className="relative w-[260px] sm:w-[320px] lg:w-[380px] h-[420px] sm:h-[460px] lg:h-[500px]">
                                    {projects.map((Project, i) => {
                                        const total = projects.length;
                                        let offset = i - active;

                                        if (offset > total / 2) offset -= total;
                                        if (offset < -total / 2) offset += total;

                                        const isVisible = Math.abs(offset) <= 2;

                                        return (
                                            <div
                                                key={Project.title}
                                                onClick={() => setActive(i)}
                                                className="absolute w-full h-full cursor-pointer flex items-end"
                                                style={{
                                                    transformOrigin: "bottom center",

                                                    // ✅ Responsive fan spacing
                                                    transform: `
                                                      translateX(${offset * (window.innerWidth < 640 ? 40 : 80)}px)
                                                      translateY(${Math.abs(offset) * (window.innerWidth < 640 ? -15 : -25)}px)
                                                      rotate(${offset * (window.innerWidth < 640 ? 8 : 12)}deg)
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

                {/* ================= SERVICES ================= */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold text-charcoal mb-4">
                                What We <ShimmerText>Deliver</ShimmerText>
                            </h2>
                            <DecorativeUnderline
                                width="280px"
                                className="mb-4 mx-auto"
                                centerColor="#d4af37"
                            />
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                End-to-end video solutions tailored for brands, creators, and
                                businesses
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Commercial & Brand Films",
                                    desc: "High-end commercials, product launches, and brand stories with cinematic color grading and sound design.",
                                },
                                {
                                    title: "Social Media Content",
                                    desc: "Reels, Shorts, TikToks, and vertical videos optimized for engagement and platform algorithms.",
                                },
                                {
                                    title: "Corporate & Event Videos",
                                    desc: "Internal communications, conference highlights, testimonials, and professional event coverage.",
                                },
                                {
                                    title: "Motion Graphics & VFX",
                                    desc: "Custom animations, lower thirds, transitions, and visual effects that elevate your message.",
                                },
                                {
                                    title: "Color Grading",
                                    desc: "Professional color correction and cinematic looks using DaVinci Resolve for a polished finish.",
                                },
                                {
                                    title: "Sound Design & Mixing",
                                    desc: "Clean dialogue, music licensing, sound effects, and balanced audio mixes that feel premium.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center mb-5">
                                        <span className="text-2xl font-bold text-orange-500">
                                            {i + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-charcoal mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= CTA ================= */}
                <section className="py-24 bg-slate-950 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10"></div>
                    <div className="relative max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Ready to elevate your <ShimmerText>video content</ShimmerText>?
                        </h2>
                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Let’s turn your footage into something unforgettable. Get a free
                            consultation today.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex px-12 py-4 bg-gold text-charcoal font-semibold rounded-full text-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
                        >
                            Get Started
                        </Link>
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