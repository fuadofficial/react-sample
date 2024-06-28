import { useEffect } from "react";

const Text = () => {
  useEffect(() => {
    console.log("Text Running");
    return () => {
      console.log("Unmount");
    };
  }, []);

  return <h1>Text component</h1>;
};

export default Text;
