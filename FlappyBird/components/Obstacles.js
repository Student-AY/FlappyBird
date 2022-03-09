import { View, Text } from "react-native";
import React from "react";

export default function Obstacles({
  obstaclesLeft,
  obstacleWidth,
  obstacleHeight,
  gap,
  color,
  randomBottom,
}) {
  return (
    <>
      <View //obstacle 1
        style={{
          position: "absolute",
          backgroundColor: color,
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom + obstacleHeight + gap,
        }}
      />

      <View //obstacle 2
        style={{
          position: "absolute",
          backgroundColor: color,
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom,
        }}
      />
    </>
  );
}
