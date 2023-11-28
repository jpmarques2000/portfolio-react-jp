import React from "react";
import AutoImage from "../assets/My_Image.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-slate-950"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center md:h-full px-4 md:flex-row "
      // h-full
      >
        <div className="flex flex-col justify-center h-full md:mt-0 mt-20">
          <h2 className="text-3xl max-w-md sm:text-5xl font-signature font-bold text-white">
            João Paulo
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Desenvolvedor Backend .NET, C#, SQL, ORACLE, PL/SQL, Azure, SQL Server.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-300 cursor-pointer"
            >
              Projects
            </Link>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-paulo-marques-43ba10242/"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-300 cursor-pointer"
            >
              Linkedin
            </a>
          </div>
        </div>

        <div>
          <img
            src={AutoImage}
            alt="my profile img"
            className="rounded-2xl mx-auto w-2/3 md:w-3/5 md:mt-0 mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
