import React, { useState } from "react";
import Card from "./Card"; // Pastikan ini adalah path yang benar
import "../App.css";

const CardList = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Project", tasks: ["Task 1", "Task 2"] },
    { id: 2, title: "Tasks", tasks: [] },
  ]);

  const addTaskToCard = (cardId, task) => {
    setCards(
      cards.map((card) =>
        card.id === cardId
          ? { ...card, tasks: [...card.tasks, task] }
          : card
      )
    );
  };

  return (
    <div className="flex gap-4">
      {cards.map((card) => (
        <Card key={card.id} card={card} addTask={addTaskToCard} />
      ))}
    </div>
  );
};

export default CardList;
