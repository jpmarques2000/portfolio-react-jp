import React from "react";
import Card from '../UI/Card.jsx';

function ExperienceItem(props) {
  return (
    <Card>
      {props.technologies.map(({ id, src, title, style }) => (
        <div
          key={id}
          className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
        >
          <img src={src} alt="" className="w-20 mx-auto" />
          <p className="mt-4">{title}</p>
        </div>
      ))}
    </Card>
  );
}

export default ExperienceItem;
