import React from "react";
import Card from "./Card";

interface FaceUpCardProps {
  cardValue: string | JSX.Element;
  className?: string; // Add this line
}

const FaceUpCard: React.FC<FaceUpCardProps> = ({ cardValue, ...rest }) => {
  // Capture additional props
  return <Card {...rest}>{cardValue}</Card>; // Pass them to Card
};

export default FaceUpCard;
