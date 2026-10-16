import React, { useState } from "react";
import PropTypes from "prop-types";

export default function WorkFilter({
  title = "Our Latest Work",
  subtitle = "Showcasing our best digital experiences across industries",
  projects = [],
  categories = [
    "All",
    "Logistics",
    "E-Commerce",
    "Education",
    "Informative & Services",
    "International Site",
  ],
}) {
  const [activeTab, setActiveTab] = useState("All");

  // Filter projects based on active tab
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[80%] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-2
            overflow-x-auto
            scrollbar-hide
            bg-white
            rounded-2xl
            p-2
            border
            shadow-sm"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`whitespace-nowrap
    px-6 py-3
    rounded-xl
    text-sm font-semibold
    transition-all duration-300 ${
      activeTab === category
        ? "bg-[#ff6726] text-white shadow-md"
        : "text-gray-600 hover:bg-orange-300 hover:text-white"
    }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={
                  project.id ??
                  `${project.title ?? "project"}-${project.category ?? "uncategorized"}-${index}`
                }
                className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 w-full">
                      <h6 className="text-white text-xl font-semibold mb-2">
                        {project.title}
                      </h6>
                      <p className="text-white/90 text-sm leading-relaxed line-clamp-3 mb-4">
                        {project.description}
                      </p>
                      <a
                        href={project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-orange-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-orange-50 transition-colors"
                      >
                        View Site →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="p-5">
                  <h6 className="font-semibold text-zinc-900 text-lg">
                    {project.title}
                  </h6>
                  <p className="text-orange-600 text-sm mt-1">
                    {project.category}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-zinc-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

WorkFilter.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      categories: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
  categories: PropTypes.arrayOf(PropTypes.string),
};
