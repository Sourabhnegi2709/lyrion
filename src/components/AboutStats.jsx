const stats = [
  { label: "Client satisfaction", value: "98%" },
  { label: "Projects delivered", value: "2k+" },
  { label: "Years creating", value: "12+" },
  { label: "Creative minds", value: "40+" },
];

export default function AboutStats() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-charcoal px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-violet-700/15 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
              <span aria-hidden="true" className="h-px w-8 bg-orange-300" />
              A little about us
            </p>
            <h2
              id="about-heading"
              className="max-w-4xl text-balance text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.06em]"
            >
              Good design makes
              <br className="hidden sm:block" /> people{" "}
              <span className="font-medium italic text-orange-300">
                feel something.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8 lg:col-span-5 lg:justify-self-end">
            We bring strategy, design and craft together to make brands more
            memorable — and help ambitious ideas find their place in the world.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 border-t border-white/15 sm:mt-20 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/15 py-7 pr-4 sm:py-9 lg:border-b-0 lg:py-10"
            >
              <p className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.07em] text-white">
                {stat.value}
              </p>
              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
