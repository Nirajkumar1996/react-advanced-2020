import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); //destructuring array returned by usecase function

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person; //destructuring each object in array
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                removeItem(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>Clear Item</button>
    </>
  );
};

export default UseStateArray;

//V V Imp Point in button onclick () => {}  arrow function necesary
//in onClick={setPeople()} you app will never run Why we want invoke after clicking button so no dirext invocation
//otherwise it will run at render time
