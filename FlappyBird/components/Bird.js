import { View } from "react-native";

export default function Bird({ birdBottom, birdLeft }) {
  const birdWidth = 50;
  const birdHeight = 60;
  const leftPositionBird = birdLeft - birdWidth / 2;
  const centerPositionBird = birdBottom;
  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "gold",
        width: birdWidth,
        height: birdHeight,
        left: leftPositionBird,
        bottom: centerPositionBird,
      }}
    />
  );
}
