import React from "react";
import TodoList from "../components/CardList";
import "../App.css";
import CardList from "../components/CardList";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Home</h1>
      <CardList />
    </div>
  );
};

export default Home;
