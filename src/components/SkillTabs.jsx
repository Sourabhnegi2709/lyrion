import React, { useState, useRef } from "react";

import ShimmerText from "../components/ShimmerText";
import DecorativeUnderline from "../components/DecorativeUnderline";

import GridBg from "../components/GridBg";

/* ---------------- ICONS ---------------- */

import photoshop from "../assets/photoshop.svg";
import Adob from "../assets/ex.svg";
import Invision from "../assets/illustrator.svg";
import figma from "../assets/Figma.svg";
import Indesign from "../assets/indesign.svg";
import Bootstrap from "../assets/bootstrap.svg";
import htm from "../assets/html-5.svg";
import js from "../assets/vuejs.svg";
import css from "../assets/css.svg";
import tailwind from "../assets/tailwindcss.svg";

import mongodb from "../assets/mongodb.svg";
import mariadb from "../assets/mariadb.svg";
import redis from "../assets/redis.svg";
import mysql from "../assets/mysql.svg";
import oracle from "../assets/PHP.svg";
import express from "../assets/Laravel.svg";
import postgre from "../assets/postgresql.svg";
import python from "../assets/python.svg";
import aws from "../assets/aws.svg";
import react from "../assets/react-js.svg";
import adobe1 from "../assets/after-effact.png";
import adobe2 from "../assets/premier.svg";
import adobe3 from "../assets/final.png";
import adobe4 from "../assets/Davinci.png";

/* ---------------- DATA ---------------- */

const techData = {
  design: [
    { id: 1, title: "Photoshop", icon: photoshop },
    { id: 2, title: "Figma", icon: figma },
    { id: 3, title: "Indesign", icon: Indesign },
    { id: 4, title: "Adobe XD", icon: Adob },
    { id: 5, title: "Illustrator", icon: Invision },
  ],

  frontend: [
    { id: 1, title: "React", icon: react },
    { id: 2, title: "Tailwind", icon: tailwind },
    { id: 3, title: "HTML", icon: htm },
    { id: 4, title: "CSS", icon: css },
    { id: 5, title: "Bootstrap", icon: Bootstrap },
    { id: 6, title: "JavaScript", icon: js },
  ],

  backend: [
    { id: 1, title: "Python", icon: python },
    { id: 2, title: "Cordinator", icon: redis },
    { id: 3, title: "MariaDB", icon: mariadb },
    { id: 4, title: "MongoDB", icon: mongodb },
    { id: 5, title: "Laravel", icon: express },
    { id: 6, title: "MySQL", icon: mysql },
    { id: 7, title: "PostgreSQL", icon: postgre },
    { id: 8, title: "PHP", icon: oracle },
    { id: 9, title: "AWS-RDS", icon: aws },
  ],

  video: [
    { id: 1, title: "Adobe After Effect", icon: adobe1 },
    { id: 2, title: "Adobe Premire Pro", icon: adobe2 },
    { id: 3, title: "Final Cut", icon: adobe3 },
    { id: 4, title: "Davinci Resolve", icon: adobe4 },
  ],
};

const tabs = [
  { key: "design", name: "Design" },
  { key: "frontend", name: "Frontend" },
  { key: "backend", name: "Backend" },
  { key: "video", name: "Video" },
];

/* ---------------- COMPONENT ---------------- */

export default function SkillsTabs() {
  const [activeTab, setActiveTab] = useState("frontend");
  const gridRef = useRef();

  /* ---------- GSAP Animation ---------- */

  return (
    <section className="w-full h-auto bg-gradient-to-b from-gray-50 to-white ">
      <GridBg gridSize={80} lineColor="#f5f1ed" bgColor="#fff">

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* ---------------- HEADING ---------------- */}

        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            <ShimmerText>Technologies</ShimmerText> We {" "}
            <span>Work With</span>
          </h2>
          <DecorativeUnderline
            width="320px" // Adjust width as needed
            className="mt-4 mx-auto"
            centerColor="#3B82F6" // Optional: change blue color
                          />

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We leverage modern technologies to build scalable, high-performance
            digital experiences.
          </p>
        </div>

        {/* ---------------- TABS ---------------- */}

        <div className="flex justify-center mb-12">
          <div
            className="
            flex gap-2
            overflow-x-auto
            scrollbar-hide
            bg-white
            rounded-2xl
            p-2
            border
            shadow-sm
          "
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  whitespace-nowrap
                  px-6 py-3
                  rounded-xl
                  text-sm font-semibold
                  transition-all duration-300
                  ${
                    activeTab === tab.key
                      ? "bg-[#ff6726] text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- GRID ---------------- */}

        <div
          ref={gridRef}
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
            gap-8
          "
        >
          {techData[activeTab].map((item) => (
            <div
              key={item.id}
              className="
                tech-card
                group
                bg-white
                rounded-3xl
                p-2
                text-center
                flex flex-col
                items-center
                border
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              <div
                className="
                w-32 h-32
                flex items-center justify-center
                
                rounded-3xl
                mb-3
                group-hover:bg-orange-50
                transition
              "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-28 h-28 object-contain group-hover:scale-110 transition"
                />
              </div>

              <p className="font-semibold text-gray-800 text-xl">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>


      </GridBg>


    </section>
  );
}
