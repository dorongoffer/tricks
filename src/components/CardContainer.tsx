import React, { useEffect, useState } from "react";
import { Card } from "./Card"; // Import Card class
import CardTemplate from "./Card"; // Import CardTemplate component
import styles from "./Card.module.css";

interface CardContainerProps {
  cards: Card[];
}

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  const [cardWidth, setCardWidth] = useState(100); // Default value
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  useEffect(
    () => {
      // Get the card width from the CSS variable
      const root = getComputedStyle(document.documentElement);
      const width = parseFloat(root.getPropertyValue("--card-width"));
      setCardWidth(width);
    },
    /* dependencies= */ []
  );

  const totalCards = cards.length;
  const angleStep = 15; // Fixed angle step for better visibility
  const radius = 300; // Radius of the arc

  const handleCardClick = (card: Card) => {
    if (selectedCard && selectedCard.isEqual(card)) {
      // Play the card
      console.log("Card played:", card);
      setSelectedCard(null);
    } else {
      setSelectedCard(card);
    }
  };

  useEffect(() => {
    // Handle outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(`.${styles.card}`)) {
        setSelectedCard(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={styles.cardContainer}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {cards.map((card, index) => {
        const angle = (index - Math.floor(totalCards / 2)) * angleStep; // Calculate the angle for each card
        const x = radius * Math.sin((angle * Math.PI) / 180); // Calculate the x position
        const y = radius * (1 - Math.cos((angle * Math.PI) / 180)); // Calculate the y position

        const isSelected = selectedCard && selectedCard.isEqual(card);
        const offsetX = isSelected
          ? 0.25 * cardWidth * Math.sin((angle * Math.PI) / 180)
          : 0;
        const offsetY = isSelected
          ? 0.25 * cardWidth * Math.cos((angle * Math.PI) / 180)
          : 0;

        return (
          <CardTemplate
            key={index}
            className={`${styles.card} ${isSelected ? styles.selected : ""}`}
            style={{
              position: "absolute",
              left: `calc(50% + ${x + offsetX}px)`,
              top: `calc(50% + ${y + offsetY}px)`,
              transform: `rotate(${angle}deg)`, // Rotate each card
              transformOrigin: "bottom center", // Rotate around the bottom center
            }}
            card={card}
            onClick={e => {
              e.stopPropagation(); // Prevent triggering the outside click handler
              handleCardClick(card);
            }}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
