// src/components/FilterTabs.jsx
const FilterTabs = ({ items, active, onChange }) => (
  <div className="mb-12 flex flex-wrap justify-center gap-3">
    {items.map((item) => (
      <button
        key={item}
        onClick={() => onChange(item)}
        className={`rounded-full border px-6 py-2 text-sm font-semibold uppercase tracking-wider transition ${
          active === item
            ? "border-amber-400 bg-amber-400 text-black"
            : "border-white/20 text-gray-300 hover:border-amber-400 hover:text-amber-400"
        }`}
      >
        {item}
      </button>
    ))}
  </div>
);

export default FilterTabs;
