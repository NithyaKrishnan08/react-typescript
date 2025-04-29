import { FC, useReducer } from "react";
import { counterReducer } from "../reducer/counterReducer";


const CounterReducerExercise: FC = () => {
  const [state, dispatch] = useReducer(counterReducer, {count: 0});
  
  return (
    <div>
      <h1>Counter Reducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
    </div>
  );
};

export default CounterReducerExercise;
