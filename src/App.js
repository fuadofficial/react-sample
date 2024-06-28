import { useForm } from "./useForm";
import { useState } from "react";
import Text from "./Text";

function App() {
  const [value, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText ? <Text /> : null}
      <button onClick={() => setShowText(!showText)}>Toggel</button>
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
          type="number"
          name="password"
          value={value.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone"
          value={value.phone}
          placeholder="Phone"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
