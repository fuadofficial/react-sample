import React, { useState } from "react";

function Counter({ increment, decrement }) {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <br />
      <label>{value}</label>
      <br />
      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <br />
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("red")}>Red</button>
    </div>
  );
}

export default Counter;
