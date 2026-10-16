// src/components/ContactInfoCard.jsx
const ContactInfoCard = ({ icon: Icon, title, children }) => (
  <div className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-amber-400/60">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-xl text-amber-400 transition group-hover:bg-amber-400 group-hover:text-black">
      <Icon />
    </div>
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
        {title}
      </h4>
      <div className="mt-1 text-lg text-white">{children}</div>
    </div>
  </div>
);

export default ContactInfoCard;
