import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  cardValue: string;
  imageUrl: string; // Add imageUrl to CardProps
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  cardValue,
  imageUrl,
  className,
  style,
}) => {
  return (
    <div className={`${styles.card} ${className}`} style={style}>
      <img src={imageUrl} alt={cardValue} className={styles.cardImage} />{" "}
      {/* Display card image */}
      <div className={styles.cardValue}>{cardValue}</div>
    </div>
  );
};

export default Card;
