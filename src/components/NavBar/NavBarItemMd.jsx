import React from "react";

function NavBarItemMd(props) {
  return (
    <ul
          className="flex flex-col justify-center items-center absolute top-0 
      left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {props.links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
  );
}

export default NavBarItemMd;
