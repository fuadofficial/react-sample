import { useForm } from "./useForm";
import { useEffect } from "react";

function App() {
  const [value, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("Running");
    return () => {
      console.log("Unmount");
    };
  }, [value.name]);

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="name"
          value={value.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={value.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={value.password}
          placeholder="Password"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
