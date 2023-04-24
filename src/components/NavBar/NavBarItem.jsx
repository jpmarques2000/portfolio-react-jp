import React from "react";

function NavBarItem(props) {
  return (
    <ul className="hidden md:flex">
      {props.links.map(({ id, link }) => (
        <li
          key={id}
          className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
        >{link}</li>
      ))}
    </ul>
  );
}

export default NavBarItem;
