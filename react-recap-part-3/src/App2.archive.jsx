import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [members, setMembers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // setMembers([...members, { name, age }]);
    setMembers((prev) => [...prev, { name, age }]);

    setName("");
    setAge("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <button type="submit">Submit</button>
      </form>

      {members.map((member) => (
        <Card name={member.name} age={member.age} />
      ))}
    </div>
  );
}

export default App;
