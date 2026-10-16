import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

import {
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaTimes,
    FaHeart,
    FaRegHeart,
} from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const WORD = "lyrion";
const WORD_GLOW_COLORS = ["#ff6726", "#facc15", "#22d3ee", "#a78bfa", "#f472b6"];



export default function Footer() {
    const sliderRef = useRef(null);
    const lettersRef = useRef([]);
    const bigTextRef = useRef(null);
    const colorOrbRef = useRef(null);
    // const [selectedBadge, setSelectedBadge] = useState(null);

    // Close modal with ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setSelectedBadge(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    // ── Per-letter drop animation ──────────────────────────────────
    useEffect(() => {
        const els = lettersRef.current.filter(Boolean);
        if (!els.length) return;

        gsap.set(els, { yPercent: -120, opacity: 0 });

        const ctx = gsap.context(() => {
            gsap.to(els, {
                yPercent: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                stagger: 0.055,
                scrollTrigger: {
                    trigger: bigTextRef.current,
                    start: "top 88%",
                    toggleActions: "play none none none",
                },
            });
        });

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const section = bigTextRef.current;
        const colorOrb = colorOrbRef.current;
        if (!section || !colorOrb) return undefined;

        const handlePointerMove = (event) => {
            const bounds = section.getBoundingClientRect();
            const pointerX = event.clientX - bounds.left;
            const pointerY = event.clientY - bounds.top;
            const normalizedX = Math.max(0, Math.min(1, pointerX / bounds.width));
            const orbColor =
                WORD_GLOW_COLORS[
                Math.floor(normalizedX * WORD_GLOW_COLORS.length) % WORD_GLOW_COLORS.length
                ];

            gsap.to(colorOrb, {
                x: pointerX - 110,
                y: pointerY - 110,
                background: `radial-gradient(circle, ${orbColor}dd 0%, ${orbColor}88 34%, ${orbColor}35 58%, transparent 78%)`,
                duration: 0.75,
                ease: "elastic.out(1, 0.45)",
                overwrite: "auto",
            });
        };

        const resetColorOrb = () => {
            gsap.to(colorOrb, {
                x: -220,
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                overwrite: "auto",
            });
        };

        const showColorOrb = () => {
            gsap.to(colorOrb, { opacity: 1.35, duration: 0.25, overwrite: "auto" });
        };

        section.addEventListener("pointermove", handlePointerMove);
        section.addEventListener("pointerenter", showColorOrb);
        section.addEventListener("pointerleave", resetColorOrb);

        return () => {
            section.removeEventListener("pointermove", handlePointerMove);
            section.removeEventListener("pointerenter", showColorOrb);
            section.removeEventListener("pointerleave", resetColorOrb);
            gsap.killTweensOf(colorOrb);
        };
    }, []);

    // ── Mobile badge carousel ──────────────────────────────────────
    useEffect(() => {
        const el = sliderRef.current;
        if (!el || window.innerWidth >= 768) return;

        const totalWidth = el.scrollWidth / 2;
        const animation = gsap.to(el, {
            x: -totalWidth,
            duration: 6,
            ease: "none",
            repeat: -1,
        });
        return () => animation.kill();
    }, []);

    const openModal = (badge) => setSelectedBadge(badge);
    const closeModal = () => setSelectedBadge(null);

    return (
        <footer className="bg-[#30303c] text-zinc-300 border-t border-zinc-800">
            {/* ── MIDDLE SECTION ──────────────────────────────────────── */}

            <section className="bg-[#30303c] text-white border-t border-zinc-800">
                <div className="max-w-[90%] mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-12">
                        {/* Logo + rating */}
                        <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
                            <Link
                                to="/"
                                className="text-white text-xl lg:text-2xl font-black tracking-wide"
                            >
                                LYRION FRAME ART
                            </Link>

                            <div className="flex justify-center gap-1 text-2xl text-yellow-400 lg:justify-start">
                                ★ ★ ★ ★ ★
                            </div>
                            <p className="text-base text-zinc-300 max-w-sm">
                                Overall client rating is <b>4.9 out of 8,500</b> clients for
                                Lyrion Frame Art.
                            </p>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h3 className="text-white text-xl font-semibold  mb-5">
                                Follow Us
                            </h3>
                            <div className="flex flex-col gap-3 text-lg">
                                {[
                                    {
                                        href: "https://x.com/Revagraphics",
                                        icon: <FaXTwitter size={22} />,
                                        label: "Twitter",
                                    },
                                    {
                                        href: "https://www.instagram.com/werevagraphics/",
                                        icon: <FaInstagram size={22} />,
                                        label: "Instagram",
                                    },
                                    {
                                        href: "https://www.facebook.com/werevagraphics",
                                        icon: <FaFacebook size={22} />,
                                        label: "Facebook",
                                    },
                                    {
                                        href: "https://www.linkedin.com/company/werevagraphics",
                                        icon: <FaLinkedin size={22} />,
                                        label: "LinkedIn",
                                    },
                                ].map(({ href, icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 text-zinc-400 hover:text-orange-400 transition-all duration-300 hover:scale-105"
                                    >
                                        {icon}
                                        <span className="font-medium">{label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Desktop badge grid - NOW CLICKABLE */}
                        {/* <div className="badge-grid-responsive hidden md:flex flex-wrap justify-center gap-8 items-center">
                            {badges.map((badge) => (
                                <img
                                    key={badge.id}
                                    src={badge.src}
                                    alt={badge.alt}
                                    onClick={() => openModal(badge)}
                                    className="badge-item h-20 md:h-20 lg:h-28 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                                />
                            ))}
                        </div> */}

                        {/* Mobile badge carousel - CLICKABLE */}
                        {/* <div className="block md:hidden w-screen relative -mx-[50vw] overflow-hidden">
                            <div
                                ref={sliderRef}
                                className="flex gap-10 w-max items-center px-6"
                            >
                                {[...badges, ...badges].map((badge, i) => (
                                    <img
                                        key={i}
                                        src={badge.src}
                                        alt={badge.alt}
                                        onClick={() => openModal(badge)}
                                        className="h-20 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                                    />
                                ))}
                            </div>
                        </div> */}

                        {/* CTA */}
                        <div>
                            <Link
                                to="/contact"
                                className="inline-block bg-gradient-to-r from-[#FF9800] to-[#E91E63] px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-orange-500/40 hover:scale-105"
                            >
                                Our Brochure →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BIG TEXT ───────────────────────────────────────────── */}
            <section
                ref={bigTextRef}
                className="relative isolate overflow-hidden bg-[#30303c] border-t border-zinc-800 py-2 sm:py-8 md:py-10 group"
            >
                <div
                    ref={colorOrbRef}
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-56 top-8 z-0 h-56 w-56 rounded-full opacity-0 blur-xl saturate-150"
                />
                <div className="relative z-10 flex w-full items-end px-4 sm:px-4">
                    {WORD.split("").map((ch, i) => {
                        if (ch === " ") {
                            return (
                                <span
                                    key={`space-${i}`}
                                    style={{
                                        display: "inline-block",
                                        width: "clamp(24px, 3.5vw, 50px)",
                                    }}
                                />
                            );
                        }
                        return (
                            <span
                                key={i}
                                style={{
                                    overflow: "hidden",
                                    display: "inline-block",
                                    lineHeight: 1.1,
                                }}
                            >
                                <span
                                    ref={(el) => (lettersRef.current[i] = el)}
                                    className="inline-block"
                                    style={{
                                        display: "inline-block",
                                        fontFamily:
                                            "'Helvetica Neue', Helvetica, Arial, sans-serif",
                                        fontWeight: 900,
                                        fontSize: "clamp(64px, 13.5vw, 165px)",
                                        color: "#ffffff",
                                        letterSpacing: "-0.035em",
                                        lineHeight: 1.3,
                                        textTransform: "lowercase",
                                        opacity: 0,
                                    }}
                                >
                                    {ch}
                                </span>
                            </span>
                        );
                    })}
                </div>
            </section>

            {/* -------------- BOTTOM BAR ----------- */}
            <div className="bg-[#30303c] border-t border-zinc-800">
                <div className="max-w-[90%] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                    <p>
                        © {new Date().getFullYear()}{" "}
                        <Link
                            to="/"
                            className="hover:text-orange-400 transition-colors text-zinc-400"
                        >
                            Lyrion Frame Art
                        </Link>{" "}
                        All rights reserved
                    </p>
                    <p className="flex items-center gap-2">
                        Made with{" "}
                        <span className="text-red-600">
                            <FaHeart />
                        </span>{" "}
                        by{" "}
                        <span className="bg-gradient-to-r from-[#FF9800] to-[#E91E63] bg-clip-text text-transparent font-medium">
                            Lyrion Frame Art
                        </span>
                    </p>
                </div>
            </div>

            
        </footer>
    );
}