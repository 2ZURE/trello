import React, { useState } from "react";

import "../App.css";
const Card = ({ card, addTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(card.id, task);
      setTask(""); // Reset input setelah task ditambahkan
    }
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4 w-64">
      {/* Header Card */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{card.title}</h2>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-white">↔</button>
          <button className="text-gray-400 hover:text-white">⋮</button>
        </div>
      </div>

      {/* Body Card */}
      <ul className="space-y-2">
        {card.tasks.map((task, index) => (
          <li key={index} className="bg-gray-700 text-sm px-2 py-1 rounded-lg">
            {task}
          </li>
        ))}
      </ul>

      {/* Footer Card */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Add a task"
          className="bg-gray-700 text-sm text-white px-2 py-1 rounded-lg w-full"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={handleAddTask}
          className="text-sm text-blue-400 hover:text-blue-300 mt-2"
        >
          + Add a task
        </button>
      </div>
    </div>
  );
};

export default Card;
