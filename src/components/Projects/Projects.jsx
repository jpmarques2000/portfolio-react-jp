import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projectItems = [
    {
      id: 1,
      title: "Calculator-Javascript",
      description: "A simple calculator project, made with javascript. ",
      href: "https://github.com/jpmarques2000/Calculator-Js",
    },
    {
      id: 2,
      title: "Shop Website-Javascript",
      description: "A web shop project, made with javascript. ",
      href: "https://github.com/jpmarques2000/Shop-Javascript",
    },
    {
      id: 3,
      title: "Mobile Shop App(Xamarin.Forms)",
      description:
        "A mobile app shop made with Xamarin.forms, used for a graduation final project. ",
      href: "https://github.com/jpmarques2000/VENDAS_SUPERMERCADO",
    },
    {
      id: 4,
      title: "React Native App(Incomplete)",
      description: "A shop app made with React Native, not completed yet. ",
      href: "https://github.com/jpmarques2000/VendasReact",
    },
    {
      id: 5,
      title: "Shop Website-React",
      description:
        "A web shop page made with React, React Redux, Express and mysql. ",
      href: "https://github.com/jpmarques2000/React-Shop",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Projects
          </p>
          <p className="py-6">Some of my projects</p>
        </div>
        <ProjectItem projects={projectItems} />
      </div>
    </div>
  );
};

export default Projects;
