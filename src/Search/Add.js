import { useState } from "react";
import "../App.css"
import "../Login/Login.css";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  
  return (
    <>
      <input
        className="inputuser"
        placeholder="Search user"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="buttonUser"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
