import React from "react";
import styles from "./Card.module.css";

export class Card {
  constructor(
    public rank: string,
    public suit: string,
    public imageUrl: string
  ) {}

  isEqual(card: Card): boolean {
    return this.rank === card.rank && this.suit === card.suit;
  }
}

interface CardTemplateArgs {
  card: Card;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const compareCards = (card1: Card, card2: Card): boolean => {
  return card1.rank === card2.rank && card1.suit === card2.suit;
};

const CardTemplate: React.FC<CardTemplateArgs> = ({
  card,
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={`${styles.card} ${className} ${styles.cardCustomStyle} ${styles.cardCustomStylePosition} ${styles.cardCustomStyleLeft} ${styles.cardCustomStyleTop} ${styles.cardCustomStyleTransform}`}
      onClick={onClick}
    >
      <img
        src={card.imageUrl}
        alt={`${card.rank} of ${card.suit}`}
        className={styles.cardImage}
      />
      <div className={styles.cardValue}>{`${card.rank} of ${card.suit}`}</div>
    </div>
  );
};

export default CardTemplate;
