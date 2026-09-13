import { use } from "react";
import { CounterContext } from "../providers/counter.provider.jsx";
import "./Card.css";

export default function NestedDisplay() {
  const { count } = use(CounterContext);
  return (
    <div className="card-orange">
      <p>Grand Child</p>
      <h1>{count}</h1>
    </div>
  );
}
