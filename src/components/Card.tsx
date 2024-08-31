import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  cardValue?: string; // Make cardValue optional if using children
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode; // Add children prop
}

const Card: React.FC<CardProps> = ({
  cardValue,
  className,
  style,
  children,
}) => {
  return (
    <div className={`${styles.card} ${className}`} style={style}>
      {children || cardValue}{" "}
      {/* Render children if provided, otherwise render cardValue */}
    </div>
  );
};

export default Card;
