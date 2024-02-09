//  import { Fragment } from "react";}
// import { MouseEvent } from "react"; // typeScript mouse even type

import { useState } from "react";

interface listGroupProps {
  items: string[];
  heading: string;
  onSelecItem: (item: string) => void; 
}

function ListGroup({ items, heading, onSelecItem }: listGroupProps) {

  //  const message = items.length === 0 ? <p> This list is empty </p> : null;
  const message = items.length === 0 && <p> This list is empty </p>; // this is a better way to doing it

  const [select, setSelect] = useState(0);

  return (
    <>
      <h1> {heading} </h1>
      <ul className="list-group">
        {message}
        {items.map((item, index) => (
          <li
            className={
              select === index ? "list-group-item active" : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelect(index);
              onSelecItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
