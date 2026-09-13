import { use } from "react";
import "./Card.css";
import { CounterContext } from "../providers/counter.provider.jsx";

export default function Counter() {
  const { count, setCount } = use(CounterContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleIncrementByValue = (value) => {
    setCount(count + value);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card">
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => handleIncrementByValue(5)}>
        Increment by value
      </button>

      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
