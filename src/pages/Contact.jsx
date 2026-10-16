// src/pages/Contact.jsx
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import PageHero from "../components/PageHero";
import ContactInfoCard from "../components/ContactInfoCard";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import { contactInfo, heroImages } from "../components/siteData";

const socials = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

const faqs = [
  {
    q: "How soon can you start a project?",
    a: "Most projects begin within 1 to 2 weeks after the brief and scope are finalised.",
  },
  {
    q: "Do you work outside your city?",
    a: "Yes. Our crew travels across India and abroad for shoots.",
  },
  {
    q: "What does a project cost?",
    a: "It depends on scope, crew and duration. Share your idea and we will send a tailored quote.",
  },
];

const Contact = () => {
  return (
    <main className="bg-black text-white">
      <PageHero
        eyebrow="Contact"
        title="Let's Create Together"
        subtitle="Tell us about your idea. We would love to hear it and help bring it to life."
        image={heroImages.contact}
      />

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5">
          {/* left: info */}
          <Reveal stagger={0.12} x={-40} y={0} className="space-y-5 lg:col-span-2">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
                Get in touch
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                We'd love to hear from you
              </h2>
              <p className="mt-4 text-gray-400">
                Have a project, a collaboration or just a question? Reach out using
                the details below or fill in the form.
              </p>
            </div>

            <ContactInfoCard icon={FaEnvelope} title="Email">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-amber-400">
                {contactInfo.email}
              </a>
            </ContactInfoCard>
            <ContactInfoCard icon={FaPhoneAlt} title="Phone">
              <a href={`tel:${contactInfo.phone}`} className="hover:text-amber-400">
                {contactInfo.phone}
              </a>
            </ContactInfoCard>
            <ContactInfoCard icon={FaMapMarkerAlt} title="Studio">
              {contactInfo.address}
            </ContactInfoCard>
            <ContactInfoCard icon={FaClock} title="Working Hours">
              {contactInfo.hours}
            </ContactInfoCard>

            <div className="flex gap-3 pt-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-400 hover:text-black"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Reveal>

          {/* right: form */}
          <Reveal x={40} y={0} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 pb-28">
        <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="Lyrion Studio location"
            src="https://www.google.com/maps?q=New+Delhi&output=embed"
            className="h-[420px] w-full grayscale invert-[90%] contrast-[90%]"
            loading="lazy"
          />
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-950 px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Quick Answers</h2>
          </Reveal>
          <Reveal stagger={0.12} className="space-y-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-amber-400/50"
              >
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <p className="mt-2 text-gray-400">{f.a}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
