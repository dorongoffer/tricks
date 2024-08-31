import React from "react";
import CardContainer from "./components/CardContainer"; // Adjust the path as necessary

const App: React.FC = () => {
  const cards = ["Ace", "King", "Queen", "Jack", "10"]; // Example card values

  return (
    <div>
      <h1>Card Game</h1>
      <CardContainer cards={cards} />
    </div>
  );
};

export default App;
