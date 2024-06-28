import React, { useState, memo } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  console.log("counter page");
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}

export default memo(Counter);
