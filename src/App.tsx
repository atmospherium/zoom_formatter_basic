import React, { useState, useMemo } from "react";
import { useTitle } from "react-use";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const output = useMemo(() => {
    const lines = input.split("\n").map((line) => line.substr(9));
    return lines.join("\n\n"); //.replace(/^\n\n/, "");
  }, [input]);

  useTitle("C-Print/Zoom Formatter");

  return (
    <div className="App">
      <textarea
        placeholder="Paste text here"
        style={{ width: "80vmin", height: "40vmin" }}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <textarea
        placeholder="Get formatted output here"
        style={{ width: "80vmin", height: "40vmin" }}
        value={output}
      />
    </div>
  );
}
