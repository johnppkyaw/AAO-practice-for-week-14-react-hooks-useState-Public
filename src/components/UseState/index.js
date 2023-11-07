import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  return (
    <div className={`state ${theme}`}>
      <h1>Theme Color: {theme}</h1>
      <button
        onClick={() =>
          setTheme((prevTheme) =>
            prevTheme === "light" ? (prevTheme = "dark") : "light"
          )
        }
      >
        Change Theme
      </button>
      <h2>Current count: {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
