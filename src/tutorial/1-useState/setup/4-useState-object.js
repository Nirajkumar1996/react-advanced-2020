import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const changeMessage = () => {
    //setPerson('hello world') //use state returning object but we passing string No output data wiped out
    //setPerson({ message: "hello world" }); //it changes meassage but wiped out name and age of object so what is solution SPREAD Operator
    setPerson({ ...person, message: "hello world" }); //very good use of SPREAD operator, spred person object first then set resp attribute
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
