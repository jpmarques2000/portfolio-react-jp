import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavBarItem from "./NavBarItem";
import NavBarItemMd from "./NavBarItemMd"; 

const NavBar = () => {
  const [navStatus, setNavStatus] = useState(false);
  const navBarItems = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experiences" },
    { id: 5, link: "contact" },
  ];
  

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Joao Paulo</h1>
      </div>
      <NavBarItem links={navBarItems} />
      <div
        onClick={() => setNavStatus(!navStatus)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {navStatus ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {navStatus && (
        <NavBarItemMd links={navBarItems} />
      )}
    </div>
  );
};

export default NavBar;
