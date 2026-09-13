import "./App.css";
import Counter from "./components/Counter.jsx";
import Display from "./components/Display.jsx";
import CounterProvider from "./providers/counter.provider.jsx";

function App() {
  return (
    <CounterProvider>
      <p>Parent Component </p>
      <Counter />
      <Display />
    </CounterProvider>
  );
}

export default App;
