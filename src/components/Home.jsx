import React from "react";
import AutoImage from "../assets/My_Image.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-slate-950"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-signature font-bold text-white">
            João Paulo
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Desenvolvedor Front-end/Backend JavaScript | TypeScript | ReactJS |
            React Native | Git | C# | Oracle(Pl-SQL)
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-paulo-marques-43ba10242/"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Linkedin
            </a>
          </div>
        </div>

        <div>
          <img
            src={AutoImage}
            alt="my profile img"
            className="rounded-2xl mx-auto w-2/3 md:w-3/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
