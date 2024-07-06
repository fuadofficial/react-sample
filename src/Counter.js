import React, { useEffect, useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("white");
  const [boom, setBoom] = useState(false);

  useEffect(() => {
    setBoom(false)
    const id = setTimeout(() => {
      setBoom(true);
    }, value * 1000);
    return () => {
      clearTimeout(id);
    };
  }, [value]);

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
      <br />
      <br />
      <br />
      <div>{boom && value ? <h1>Boom</h1> : null}</div>
    </div>
  );
}

export default Counter;
