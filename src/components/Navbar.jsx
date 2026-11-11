import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import HeadroomModule from "react-headroom";

const Headroom = HeadroomModule.default ?? HeadroomModule;

const dropdownConfigs = {
    services: {
        label: "Services",
        to: "/service",
        items: [
            { to: "/cinematography", label: "Film & Cinematography"},
            { to: "/commercial", label: "Commercial Production"},
            { to: "/production", label: "Post Production"},
        ],
    },
    work: {
        label: "Work",
        to: "/work",
        items: [
            { to: "/portfolio", label: "Portfolio" },
            { to: "/gallery", label: "Gallery" },
        ],
    },
};

const navLinkClass = ({ isActive }) =>
    `nav-animate-item rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${isActive ? "text-gold" : "text-charcoal hover:text-gold"
    }`;

export default function Navbar() {
    /* ================= STATE ================= */
    const [desktopDropdown, setDesktopDropdown] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const scope = useRef(null);
    const mobileMenuRef = useRef(null);
    const mobileBackdropRef = useRef(null);

    const dropdownPanelRefs = useRef({});

    const location = useLocation();
    const isHome = location.pathname === "/";

    /* ================= ENTRANCE ANIMATION ================= */
    useGSAP(
        () => {
            gsap.fromTo(
                scope.current,
                { opacity: 0, y: -24 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            );

            gsap.fromTo(
                scope.current?.querySelectorAll(".nav-animate-item"),
                { opacity: 0, y: 14 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.07,
                    delay: 0.12,
                    ease: "power3.out",
                },
            );
        },
        { scope },
    );

    /* ================= MOBILE DROPDOWN ================= */
    const toggleMobile = (name) => {
        setMobileDropdown((prev) => (prev === name ? null : name));
    };

    // Animate only the items inside the panel that just opened —
    // scoped per-panel, so nothing else gets re-triggered.
    useEffect(() => {
        if (!mobileDropdown) return;
        const panel = dropdownPanelRefs.current[mobileDropdown];
        if (!panel) return;

        const items = panel.querySelectorAll(".nav-animate-item");
        gsap.fromTo(
            items,
            { opacity: 0, x: 24 },
            { opacity: 1, x: 0, duration: 0.35, stagger: 0.06, ease: "power2.out" },
        );
    }, [mobileDropdown]);

    /* ================= LOCK BODY SCROLL ================= */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileOpen]);

    /* ================= MOBILE MENU SLIDE / FADE ================= */
    useEffect(() => {
        if (!mobileBackdropRef.current || !mobileMenuRef.current) return;
        gsap.set(mobileBackdropRef.current, { autoAlpha: 0 });
        gsap.set(mobileMenuRef.current, { x: "100%" });
    }, []);

    useEffect(() => {
        if (!mobileBackdropRef.current || !mobileMenuRef.current) return;

        gsap.to(mobileBackdropRef.current, {
            autoAlpha: mobileOpen ? 1 : 0,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
        });

        gsap.to(mobileMenuRef.current, {
            x: mobileOpen ? 0 : "100%",
            duration: 0.45,
            ease: "power3.out",
            overwrite: "auto",
        });

        if (mobileOpen) {
            const items = mobileMenuRef.current.querySelectorAll(
                ".nav-animate-item",
            );
            gsap.fromTo(
                items,
                { opacity: 0, x: 24 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.35,
                    stagger: 0.06,
                    delay: 0.12,
                    ease: "power2.out",
                },
            );
        }
    }, [mobileOpen]);

    const closeMobile = () => setMobileOpen(false);

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <Headroom
                pinStart={120}
                upTolerance={8}
                downTolerance={8}
                wrapperStyle={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                }}
                style={{ top: "1rem", zIndex: 9999 }}
            >
            <nav
                ref={scope}
                className="relative mx-auto w-[calc(100%-2rem)] max-w-7xl"
            >
                <div className="relative flex h-16 items-center justify-between">
                    {/* BRAND */}
                    <Link
                        to="/"
                        className={`nav-animate-item flex items-center gap-2 ${
                            isHome
                                ? "text-white drop-shadow-[0_1px_4px_rgba(54,69,79,0.7)]"
                                : "text-charcoal"
                        }`}
                    >
                        <span className="text-xl font-black tracking-[-0.06em] sm:text-2xl">
                            LYRION
                        </span>
                        <span
                            className={`mt-1 border-l pl-2 text-[9px] font-bold leading-tight tracking-[0.18em] ${
                                isHome ? "border-white/50" : "border-charcoal/30"
                            }`}
                        >
                            FRAME
                            <br />
                            ART
                        </span>
                    </Link>

                    {/* ================= DESKTOP ================= */}
                    <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/60 bg-white/75 p-1.5 text-charcoal shadow-lg shadow-black/10 ring-1 ring-black/[0.03] backdrop-blur-2xl backdrop-saturate-150 lg:flex">
                        <NavLink to="/" className={navLinkClass}>
                            Home
                        </NavLink>

                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>

                        {Object.entries(dropdownConfigs).map(([key, config]) => {
                            const isGroupActive = config.items.some(
                                (item) => location.pathname === item.to,
                            );

                            return (
                                <div
                                    key={key}
                                    className="relative"
                                    onMouseEnter={() => setDesktopDropdown(key)}
                                    onMouseLeave={() => setDesktopDropdown(null)}
                                >
                                <NavLink
                                    to={config.to}
                                    onClick={() => setDesktopDropdown(null)}
                                    className={({ isActive }) =>
                                        `nav-animate-item flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${isActive || isGroupActive
                                            ? "text-orange-600"
                                            : "text-charcoal hover:text-gold"
                                        }`
                                    }
                                    aria-haspopup="true"
                                        aria-expanded={desktopDropdown === key}
                                    >
                                        {config.label}
                                        <FaAngleDown
                                            className={`transition-transform duration-300 ${desktopDropdown === key ? "rotate-180" : ""
                                                }`}
                                        />
                                    </NavLink>

                                    {/* DROPDOWN PANEL */}
                                    <div
                                        className={`absolute left-0 z-20 mt-2 max-h-[70vh] w-64 origin-top overflow-y-auto rounded-2xl border border-slate-100 bg-white shadow-xl transition-all duration-300 ${desktopDropdown === key
                                                ? "opacity-100 scale-100 visible"
                                                : "opacity-0 scale-95 invisible"
                                            }`}
                                    >
                                        <div className="h-1 w-full bg-orange-500" />
                                        {config.items.map((item) => (
                                            <NavLink
                                                key={item.to}
                                                to={item.to}
                                                onClick={() => setDesktopDropdown(null)}
                                                className={({ isActive }) =>
                                                    `nav-animate-item block px-6 py-3 transition-colors ${isActive
                                                        ? "text-orange-500"
                                                        : "text-gray-700 hover:text-orange-500"
                                                    }`
                                                }
                                            >
                                                {item.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `nav-animate-item hidden items-center rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200 lg:flex ${isActive
                                ? "bg-gold text-charcoal"
                                : "bg-charcoal text-white hover:bg-gold"
                            }`
                        }
                    >
                        Contact Us
                        <span aria-hidden="true" className="ml-2 text-base leading-none">↗</span>
                    </NavLink>

                    {/* HAMBURGER */}
                    <button
                        className="nav-animate-item hamburger rounded-full border border-white/60 bg-white/75 p-3 text-2xl text-charcoal shadow-lg shadow-black/10 ring-1 ring-black/[0.03] backdrop-blur-2xl backdrop-saturate-150 lg:hidden"
                        onClick={() => {
                            setMobileDropdown(null);
                            setMobileOpen(true);
                        }}
                        aria-label="Open menu"
                        aria-expanded={mobileOpen}
                    >
                        <HiOutlineMenuAlt3 />
                    </button>
                </div>
            </nav>
            </Headroom>

            {/* ================= BACKDROP ================= */}
            <button
                ref={mobileBackdropRef}
                onClick={closeMobile}
                aria-label="Close menu"
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            {/* ================= MOBILE SIDEBAR ================= */}
            <aside
                ref={mobileMenuRef}
                className={`fixed hamburger right-0 top-0 h-full w-[85%] max-w-sm z-[99999] bg-white shadow-2xl transition-transform duration-500 flex flex-col ${mobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-6 border-b">
                    <Link
                        to="/"
                        className="text-charcoal text-base font-black tracking-wide"
                        onClick={closeMobile}
                    >
                        LYRION FRAME ART
                    </Link>
                    <HiX
                        className="text-3xl cursor-pointer"
                        onClick={closeMobile}
                        aria-label="Close menu"
                    />
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-2">
                    <Link to="/" className="nav-animate-item block py-3 border-b" onClick={closeMobile}>
                        Home
                    </Link>

                    <Link to="/about" className="nav-animate-item block py-3 border-b" onClick={closeMobile}>
                        About
                    </Link>

                    {/* Mobile Dropdowns — label navigates, chevron toggles the
              accordion. No more duplicate hardcoded "Printing" link. */}
                    {Object.entries(dropdownConfigs).map(([key, config]) => (
                        <div key={key} className="border-b">
                            <div className="nav-animate-item flex items-center justify-between py-3">
                                <Link to={config.to} className="flex-1" onClick={closeMobile}>
                                    {config.label}
                                </Link>
                                <button
                                    onClick={() => toggleMobile(key)}
                                    aria-label={`Toggle ${config.label} submenu`}
                                    aria-expanded={mobileDropdown === key}
                                    className="p-1"
                                >
                                    <FaAngleDown
                                        className={`transition ${mobileDropdown === key ? "rotate-180" : ""}`}
                                    />
                                </button>
                            </div>

                            <div
                                ref={(el) => {
                                    dropdownPanelRefs.current[key] = el;
                                }}
                                className={`overflow-y-auto transition-all duration-300 ${mobileDropdown === key ? "max-h-80 pb-2" : "max-h-0"
                                    }`}
                            >
                                {config.items.map((item) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        className="nav-animate-item block pl-4 py-2 text-slate-600"
                                        onClick={closeMobile}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                    <Link to="/contact" className="nav-animate-item block py-3 border-b" onClick={closeMobile}>
                        Contact
                    </Link>

                </div>

                <div className="border-t p-6 mt-auto">
                    <div className="flex justify-center items-center gap-6 text-2xl">
                        <a
                            href="https://x.com/Revagraphics"
                            className="text-charcoal hover:text-gold transition-all duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Twitter"
                        >
                            <FaXTwitter />
                        </a>
                        <a
                            href="https://www.instagram.com/werevagraphics/"
                            className="text-charcoal hover:text-gold transition-all duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.facebook.com/werevagraphics"
                            className="text-charcoal hover:text-gold transition-all duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Facebook"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/werevagraphics"
                            className="text-charcoal hover:text-gold transition-all duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}