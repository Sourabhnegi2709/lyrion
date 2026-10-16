import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What are the fees for Class 5–12 coaching in Patna?",
    a: "Programs start from ₹38,000 for our Junior Wing (Class 5–8), ₹55,000 for Senior Wing / Board Mastery (Class 9–12), and ₹80,000 for our Excellence program. Fees are fully transparent, with no hidden charges for study materials, tests, or doubt sessions.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes — up to 100% scholarship is available for eligible students, merit-based, through our entrance assessment.",
  },
  {
    q: "Is Society Gurukul only in Delhi NCR, or does it have a Patna centre?",
    a: "Society Gurukul is Delhi NCR's coaching institute, and our Patna campus opened in January 2026 — the same 1:20 mentor ratio and teaching method are now available locally.",
  },
  {
    q: "What curriculum do you follow?",
    a: "We follow the NCERT / CBSE curriculum, strictly using NCERT books for Classes 5th to 12th.",
  },
  {
    q: "How many students are in one batch?",
    a: "We maintain a strict 1:20 mentor-to-student ratio (max 15 students in our Excellence program), so your child gets real personal attention, not a lecture hall.",
  },
  {
    q: "Can I try before I enrol?",
    a: "Yes. You get three free demo classes and a free one-time counselling session before you make any decision — no pressure, no obligation.",
  },
];

function FaqRow({ item, isOpen, onToggle }) {
  const panelRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(panelRef.current, {
        height: "auto",
        duration: 0.45,
        ease: "power2.out",
      });
      gsap.to(iconRef.current, {
        rotate: 45,
        duration: 0.35,
        ease: "power2.out",
      });
    } else {
      gsap.to(panelRef.current, {
        height: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-[#0B1D33]/12">
      <button
        onClick={onToggle}
        className="w-full flex items-center cursor-hover justify-between gap-6 py-6 text-left"
      >
        <span className="font-sarif font-semibold text-[#0B1D33] text-base md:text-lg">
          {item.q}
        </span>
        <span
          ref={iconRef}
          className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full border border-[#C9A227] text-[#C9A227] font-sarif text-lg leading-none"
        >
          +
        </span>
      </button>
      <div ref={panelRef} className="overflow-hidden h-0">
        <p className="font-sarif text-[#3D4A57]/85 text-sm md:text-base leading-relaxed pb-6 pr-10">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative bg-[#F3EEE3] py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center px-6 md:px-10">
        {/* Heading section centered */}
        <div ref={headingRef} className="mb-14 text-center">


          <div className="inline-block px-6 py-2 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-full mb-6">
            <p className="font-serif text-[#0B1D33] font-bold text-sm md:text-base tracking-[0.3em] uppercase m-0 flex items-center gap-2">
              <span className="text-[#C9A227]">◆</span>Frequently Asked
              Questions
            </p>
          </div>
          
          <h2 className="font-sarif text-[#0B1D33] text-3xl md:text-[2.75rem] leading-[1.12] font-semibold">
            Answered, before you ask.
          </h2>
        </div>

        {/* FAQ list (Assuming FaqRow handles its own internal layout) */}
        <div>
          {faqs.map((item, i) => (
            <FaqRow
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        {/* Footer text centered */}
        <a
          href="#contact"
          className="inline-block cursor-hover font-sarif text-xs lg:text-sm tracking-widest uppercase text-[#0B1D33] bg-[#C9A227] px-8 py-3.5 rounded-md hover:bg-[#E0BC4A] transition-colors duration-300 mt-12"
        >
          Have a different question? just ask →
        </a>
      </div>
    </section>
  );
}
