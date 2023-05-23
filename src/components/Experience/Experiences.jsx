import React from "react";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import ExperienceItem from "./ExperienceItem";
import cSharp from "../../assets/c#.png";
import oracle from "../../assets/oracle.png";
import sql from "../../assets/sql.jpg";

function Experiences() {
  const technologiesItem = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: cSharp,
      title: "C#",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: oracle,
      title: "Oracle",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: sql,
      title: "SQL",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="mt-5">All technologies i own some experience</p>
        </div>
        <ExperienceItem technologies={technologiesItem} />
      </div>
    </div>
  );
}

export default Experiences;
