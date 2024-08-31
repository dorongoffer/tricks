import React from "react";
import Card from "./Card";
import styles from "./Card.module.css";

interface CardContainerProps {
  cards: { value: string; imageUrl: string }[]; // Update cards prop to include imageUrl
}

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  const totalCards = cards.length;
  const angleStep = 3.5; // Adjust the angle step as needed
  const cardsDistance = 15; // Adjust the angle step as needed
  const startAngle = -((totalCards - 1) * angleStep) / 2; // Center the arc

  return (
    <div className={styles.cardContainer}>
      {cards.map((card, index) => {
        const angle = startAngle + index * angleStep;
        return (
          <Card
            key={index}
            className={styles.card}
            style={{
              transform: `rotate(${angle}deg) translateX(${
                index * cardsDistance
              }px)`, // Rotate and translate each card
              transformOrigin: "bottom center", // Rotate around the bottom center
            }}
            cardValue={card.value}
            imageUrl={card.imageUrl} // Pass imageUrl to Card component
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
