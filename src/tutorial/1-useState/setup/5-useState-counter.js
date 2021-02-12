import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => setValue(0); //we can write inline st onlick but to show Two methods

  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1);  //if we click 3 times it will change to 1 it will not use      Due to asynchronous
      //current or previos value for update, all thre times it will use previous value as 0 so solution
      setValue((prevState) => {
        //it will use current previous value to increase
        return prevState + 1; //dont return undefined it will break code
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
