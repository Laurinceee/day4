import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "ana", age: 21 },
    { id: 2, name: "mark", age: 22 },
    { id: 3, name: "renz", age: 23 },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addStudent = () => {
    if (name === "" || age === "") {
      alert("Please fill in all fields");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      name: name,
      age: age,
    };

    setStudents([...students, newStudent]);
    setName("");
    setAge("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <h1>Student List</h1>
      {students.map((student) => (
        <div key={student.id}>
          <p>
            Name: {student.name} | Age: {student.age}
          </p>
          <button
            onClick={() => {
              setStudents(students.filter((s) => s.id !== student.id));
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
