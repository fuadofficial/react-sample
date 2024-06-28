import React, { memo, useRef } from "react";

function Counter({ increment, decrement }) {
  const ref = useRef(0);
  console.log(ref.current++);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default memo(Counter);
