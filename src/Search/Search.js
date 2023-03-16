import { useState } from "react";

export default function Search({ onAddTask }) {
  const [filteredList, setFilteredList] = new useState(itemList);
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        filterBySearch={(e) => setText(e.target.value)}
      />
      <button
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
