import Counter from "./Counter";
import React, { useCallback, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((currentCounter) => currentCounter + 1);
  }, [setCounter]);

  const decrement = useCallback(() => {
    setCounter((currentCounter) => currentCounter - 1);
  },[setCounter]);

  return (
    <div>
      <h1>{counter}</h1>
      <Counter decrement={decrement} increment={increment} />
    </div>
  );
}

export default App;
