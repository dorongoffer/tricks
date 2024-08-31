import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Card.module.css";

interface CardContainerProps {
  cards: { value: string; imageUrl: string }[];
}

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  const [cardWidth, setCardWidth] = useState(100); // Default value

  useEffect(() => {
    // Get the card width from the CSS variable
    const root = getComputedStyle(document.documentElement);
    const width = parseFloat(root.getPropertyValue("--card-width"));
    setCardWidth(width);
  }, []);

  const totalCards = cards.length;
  const angleStep = cardWidth / 45; // Calculate angle step based on card width
  const radius = 300; // Radius of the arc

  return (
    <div className={styles.cardContainer}>
      {cards.map((card, index) => {
        const angle = (index - Math.floor(totalCards / 2)) * angleStep; // Calculate the angle for each card
        const x = radius * Math.sin((angle * Math.PI) / 180); // Calculate the x position
        const y = radius * (1 - Math.cos((angle * Math.PI) / 180)); // Calculate the y position

        return (
          <Card
            key={index}
            className={styles.card}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `rotate(${angle}deg)`, // Rotate each card
              transformOrigin: "bottom center", // Rotate around the bottom center
            }}
            cardValue={card.value}
            imageUrl={card.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
