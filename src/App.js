import { useRef } from "react";
import Counter from "./Counter";

function App() {
  console.log("main page");
  const inputRef = useRef();
  const accessRef = () => {
    console.log(inputRef);
  };
  return (
    <div>
      <Counter />
      <input type="text" ref={inputRef} />
      <button onClick={accessRef}>Ref</button>
    </div>
  );
}

export default App;
