import { useEffect, useState } from "react";

function App() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <h1>{second}</h1>;
}

export default App;
