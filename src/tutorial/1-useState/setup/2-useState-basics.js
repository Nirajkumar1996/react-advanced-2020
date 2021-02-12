import React, { useState } from "react";
//Pointers for all the hookes
//use keyword
//component must be uppercase
//must be in functional / component body
//cannot call conditionally

const UseStateBasics = () => {
  //Uppercase U is important
  //useState return array
  //text-default value   setText-function
  //array Destructuring
  const [text, setText] = useState("random title"); //use state requires default value and return array
  // of default value and function   useState should be in the body
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
