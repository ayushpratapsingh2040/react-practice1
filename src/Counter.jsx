import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Hello Counter!</h4>
      <h1>{count}</h1>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
