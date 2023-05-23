import React from 'react'

function Card(props) {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
      {props.children}
    </div>
  );
}

export default Card