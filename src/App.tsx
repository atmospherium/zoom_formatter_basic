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
      <label>Paste text from Zoom here:</label>
      <br />
      <textarea
        placeholder="Paste text here"
        style={{ width: "80vmin", height: "40vmin" }}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      <label>Copy output from here:</label>
      <br />
      <textarea
        placeholder="Get formatted output here"
        style={{ width: "80vmin", height: "40vmin" }}
        value={output}
      />
      <br />
      <a href="mailto:captioning@deafchoice.com">captioning@deafchoice.com</a>
      <br />
      <a href="https://www.deafchoice.com">
        <img
          alt="Deaf Choice Inc"
          style={{ height: "50px" }}
          src="https://drive.google.com/uc?export=view&id=14xlJXjqHws19Cho7D0QQIL1NBnjBQpJf"
        />
      </a>
    </div>
  );
}
