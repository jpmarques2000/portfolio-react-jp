import React from "react";
import { Link } from "react-scroll";

function NavBarItem(props) {
  return (
    <ul className="hidden md:flex">
      {props.links.map(({ id, link }) => (
        <li
          key={id}
          className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
        >
          <Link to={link} smooth duration={400}>{link}</Link>
          </li>
      ))}
    </ul>
  );
}

export default NavBarItem;
