import { useContext, FC } from "react";
import { MyContext } from "../context/MyContext";

const Counter: FC = () => {
  const {count, increment, decrement} = useContext(MyContext);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
