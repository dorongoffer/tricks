import React from "react";
import Card from "./Card";
import styles from "./Card.module.css";

interface CardContainerProps {
  cards: string[];
}

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <div className={styles.cardContainer}>
      {cards.map((cardValue, index) => (
        <Card
          key={index}
          className={styles.card}
          style={{ left: `${index * 20}px` }} // Adjust left property for overlap
        >
          {cardValue}
        </Card>
      ))}
    </div>
  );
};

export default CardContainer;
