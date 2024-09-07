import React, { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer";
import { Card } from "./components/Card";

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    // Fetch the card data from the Deck of Cards API
    const fetchCardData = async () => {
      try {
        const response = await fetch(
          "https://deckofcardsapi.com/api/deck/new/draw/?count=5"
        );
        const data = await response.json();
        const fetchedCards = data.cards.map(
          (card: any) => new Card(card.value, card.suit, card.image)
        );
        setCards(fetchedCards);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardData();
  }, []);

  return (
    <div>
      <h1>Card Game</h1>
      <CardContainer cards={cards} />
    </div>
  );
};

export default App;
