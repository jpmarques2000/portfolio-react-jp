import React from "react";

function ProjectItem(props) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
      {props.projects.map(({ id, href, title }) => (
        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
          <div className="flex items-center justify-center mt-4 mx-4">
            <h2>{title}</h2>
          </div>
          <div className="flex items-center justify-center">
            <a href={href}>
              <button
                href={href}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectItem;
