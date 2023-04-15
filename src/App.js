import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [project, setProject] = useState([]);

  return (
    <div className="App" style={{ margin: "2rem" }}>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        style={{ width: "15rem", height: "2rem" }}
      />
      <button
        style={{ padding: "0.7rem" }}
        onClick={() => {
          setProject([...project, input]);
          setInput("");
        }}
      >
        add to list
      </button>

      {project.map((el, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 key={`${el}-${index}`}>{el}</h1>
          <button
            style={{ height: "2rem", margin: "1rem" }}
            onClick={() => setProject(project.filter((e) => e !== el))}
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
