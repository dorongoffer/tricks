import React from "react";
import Card from "./Card";
import styles from "./Card.module.css";

const FaceDownCard: React.FC = () => {
  return <Card className={styles.overlappingCard}>Hidden</Card>;
};

export default FaceDownCard;
