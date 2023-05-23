import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavBarItem from "./NavBarItem";
import NavBarItemMd from "./NavBarItemMd";

const NavBar = () => {
  const [navStatus, setNavStatus] = useState(false);
  const navBarItems = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  const closeMenu = () => {
    setNavStatus(!navStatus);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <NavBarItem links={navBarItems} />
      <div
        onClick={() => setNavStatus(!navStatus)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {navStatus ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {navStatus && (
        <NavBarItemMd links={navBarItems} onCloseMenu={closeMenu} />
      )}
    </div>
  );
};

export default NavBar;
