import { Link } from "react-router-dom";
import heroVideo from "../assets/video.png.mp4";

export default function BannerHero({
  videoSrc = heroVideo,
  agencyName = "LYRION FRAME ART",
  className = "",
}) {
  return (
    <section
      aria-label={`${agencyName} introduction`}
      className={`relative isolate flex min-h-[42rem] h-[100svh] w-full items-end overflow-hidden bg-neutral-950 text-white ${className}`}
    >
      <video
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        src={videoSrc}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,12,20,0.76)_0%,rgba(7,12,20,0.42)_56%,rgba(7,12,20,0.12)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#070c14]/80 via-transparent to-[#070c14]/20"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
        <div className="max-w-6xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm sm:mb-8 sm:text-xs">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-orange-400" />
            Design · Print · Digital
          </p>

          <h1 className="max-w-6xl text-balance text-[clamp(3.25rem,7.5vw,7rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
            Make your brand
            <br />
            <span className="font-medium italic text-orange-300">
              impossible to ignore.
            </span>
          </h1>

          <div className="mt-7 flex flex-col gap-7 sm:mt-9 sm:flex-row sm:items-end sm:justify-between">
            {/* <p className="max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              We create thoughtful identities, standout visuals, and digital
              experiences that help ambitious brands move forward.
            </p> */}

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#08182b] transition duration-200 hover:-translate-y-0.5 hover:bg-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore our work
                <span aria-hidden="true" className="text-base">↗</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/45 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/25 pt-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white/65 sm:mt-16 sm:text-xs">
          <span>Creative ideas, made real</span>
          <span className="hidden sm:inline">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
