// src/components/ContactForm.jsx
import { useRef, useState } from "react";
import gsap from "gsap";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const projectTypes = [
  "Commercial Film",
  "Short Film",
  "Music Video",
  "Documentary",
  "Photography",
  "Other",
];

const initial = { name: "", email: "", phone: "", type: projectTypes[0], message: "" };

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-amber-400 focus:bg-white/10";

const ContactForm = () => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const successRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.message.trim().length < 10) e.message = "Tell us a bit more (min 10 characters)";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setLoading(true);

    // TODO: replace with your real API / EmailJS / Formspree call
    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);
    setSent(true);
    setForm(initial);
    requestAnimationFrame(() => {
      gsap.from(successRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.7)",
      });
    });
  };

  if (sent) {
    return (
      <div
        ref={successRef}
        className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-amber-400/30 bg-white/5 p-10 text-center"
      >
        <FaCheckCircle className="text-6xl text-amber-400" />
        <h3 className="mt-6 text-3xl font-bold text-white">Message Sent!</h3>
        <p className="mt-3 max-w-sm text-gray-400">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-8 rounded-full border border-amber-400 px-8 py-3 font-semibold text-amber-400 transition hover:bg-amber-400 hover:text-black"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-white/10 bg-neutral-900/80 p-8 backdrop-blur md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={inputClass}
          />
          {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
        </div>
        <div>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className={inputClass}
          />
          {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone (optional)"
          className={inputClass}
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className={`${inputClass} appearance-none`}
        >
          {projectTypes.map((t) => (
            <option key={t} value={t} className="bg-neutral-900">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-amber-400 px-8 py-4 font-bold uppercase tracking-wider text-black transition hover:bg-amber-300 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
        <FaPaperPlane className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </form>
  );
};

export default ContactForm;
